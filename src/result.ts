interface IMatcher<A, B, E extends Error = Error> {
  ok: (value: A) => B;
  err: (vaule: E) => B;
}

export const Result = {
  chain,
  isOk,
  isErr,
  map,
  match,
  of,
  /** (fn) => fn() throws || fn() Nullable ? Err : Ok(fn()) */
  try<A, B, E extends Error = Error>(fn: (value: A) => B) {
    return function (value: A): Result<B, E> {
      try {
        return of<B, E>(fn(value));
      } catch (error) {
        return err(error as E);
      }
    };
  },
  unwrap,
  unwrapOr,
  sequence,
  traverse,
};
export type Result<A, E extends Error = Error> = Ok<A, E> | Err<A, E>;

export function chain<A, B, E extends Error = Error>(
  fn: (value: A) => Result<B, E>
) {
  return function (result: Result<A, E>): Result<B, E> {
    return result.chain(fn);
  };
}

/** (result) => result instanceof Ok : true : false */
export function isOk<A, E extends Error = Error>(
  result: Result<A, E>
): result is Ok<A, E> {
  return result instanceof Ok;
}

/** (result) => result instanceof Err : true : false */
export function isErr<A = unknown, E extends Error = Error>(
  result: Result<A, E>
): result is Err<A, E> {
  return result instanceof Err;
}

/** (fn) => (result) => result.isOk() ? Ok(fn(result.value)) : Err(fn(result.value)) */
export function map<A, B, E extends Error = Error>(fn: (value: A) => B) {
  return function (result: Result<A, E>): Result<B, E> {
    return result.map(fn);
  };
}

/** (matcher) => (result) => result.isOk() ? matcher.some(result.value) : matcher.err(result.value) */
export function match<A, B, E extends Error = Error>(
  matcher: IMatcher<A, B, E>
) {
  return function (result: Result<A, E>): B {
    if (result.isOk()) return matcher.ok(result.unwrap());
    else return matcher.err(result.unwrap() as E);
  };
}

/** value NonNullable ? Ok(value) : Err */
export function of<A, E extends Error = Error>(value: A | E): Result<A, E> {
  return value instanceof Error ? err(value) : ok(value);
}

/** (result) => result.isOk() ? result.value : error */
export function unwrap<A, E extends Error = Error>(ok: Ok<A, E>): A;
export function unwrap<A, E extends Error = Error>(err: Err<A, E>): E;
export function unwrap<A, E extends Error = Error>(
  result: Result<A, E>
): A | E {
  return result.unwrap();
}

/** (fallback) => (result) => result.isOk() ? result.value : fallback */
export function unwrapOr<A>(fallback: A) {
  return function (result: Result<A>): A {
    return result.unwrapOr(fallback);
  };
}

/** (array) => array.some(isErr) ? Err : Ok<array> */
export function sequence<A, E extends Error = Error>(
  array: Result<A, E>[]
): Result<A[], E> {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    const ai = array[i];
    if (ai.isErr()) return err(ai.unwrap());
    output.push(ai.unwrap() as A);
  }
  return ok(output);
}

/** (fn) => (array) => array.some(isErr) ? Err : Ok<array.map(fn)> */
export function traverse<A, B>(fn: (value: A) => B) {
  /** (array) => array.some(isErr) ? Err : Ok<array.map(fn)> */
  return function <E extends Error = Error>(
    array: Result<A, E>[]
  ): Result<B[], E> {
    const output: B[] = [];
    for (let i = 0; i < array.length; i++) {
      const value = array[i].unwrap();
      if (value instanceof Error) return err(value);
      output.push(fn(value));
    }
    return ok(output);
  };
}

class Ok<A, E extends Error = Error> {
  constructor(private readonly value: A) {}

  /** this.isOk() & fn(this.value).isOk() ? Ok(fn(this.value).value) : Err */
  chain<B>(fn: (value: A) => Result<B, E>): Result<B, E> {
    return fn(this.value);
  }

  /** this instanceof Ok : true : false */
  isOk(): this is Ok<A, E> {
    return true;
  }

  /** this instanceof Err : true : false */
  isErr(): this is Err<A, E> {
    return false;
  }

  /** this.isOk() ? Ok(fn(this.value)) : Err */
  map<B>(fn: (value: A) => B): Result<B, E> {
    return ok(fn(this.value));
  }

  /** this.isOk() ? matcher.ok(this.value) : matcher.err() */
  match<B>(matcher: IMatcher<A, B, E>): B {
    return matcher.ok(this.value);
  }

  /** this.isOk() ? this.value : Err */
  unwrap(): A {
    return this.value;
  }

  /** this.isOk() ? this.value : fallback */
  unwrapOr(): A {
    return this.value;
  }
}

class Err<A = unknown, E extends Error = Error> {
  constructor(private readonly value: E) {}

  /** this.isOk() & fn(this.value).isOk() ? Ok(fn(this.value).value) : Err */
  chain<B>(_fn: (value: A) => Result<B, E>): Result<B, E> {
    return err(this.value);
  }

  /** this instanceof Ok : true : false */
  isOk(): this is Ok<A, E> {
    return false;
  }

  /** this instanceof Err : true : false */
  isErr(): this is Err<A, E> {
    return true;
  }

  /** this.isOk() ? Ok(fn(this.value)) : Err */
  map<B>(_fn: (value: A) => B): Result<B, E> {
    return err(this.value);
  }

  /** this.isOk() ? matcher.ok(this.value) : matcher.err() */
  match<B>(matcher: IMatcher<A, B, E>): B {
    return matcher.err(this.value);
  }

  /** this.isOk() ? this.value : Err */
  unwrap(): E {
    return this.value;
  }

  /** this.isOk() ? this.value : fallback */
  unwrapOr(fallback: A): A {
    return fallback;
  }
}

/** Ok(value) */
function ok<A, E extends Error = Error>(value: A): Result<A, E> {
  if (value instanceof Error)
    throw new TypeError(
      "Ok<A, E> must be initialized with a non-empty, non-null value that is not an instanceof Error."
    );
  return new Ok<A, E>(value);
}

/** Err(value) */
function err<A = unknown, E extends Error = Error>(
  value: E | string
): Result<A, E> {
  if (value instanceof Error) return new Err<A, E>(value);
  if (typeof value === "string") return new Err<A, E>(new Error(value) as E);
  throw new TypeError(
    "Err<A, E> must be initialized with an instance of Error or String."
  );
}

export { ok as Ok, err as Err };
