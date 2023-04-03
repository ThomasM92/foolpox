interface IMatcher<A, B> {
  some: (value: A) => B;
  none: () => B;
}

/** Some<A> = NonNullable<A> */
class Some<A> {
  constructor(private readonly value: A) {}

  /** @returns predicate(this.value) ? this : none */
  filter(predicate: (value: A) => boolean): Option<A> {
    return predicate(this.value) ? this : none;
  }

  /** @returns fn(this.value) */
  flatMap<B>(fn: (value: A) => Option<B>): Option<B> {
    return fn(this.value);
  }

  isSome(): this is Some<A> {
    return true;
  }

  isNone(): this is None<A> {
    return false;
  }

  /** @returns Option.of(fn(this.value)) */
  map<B>(fn: (value: A) => B): Option<B> {
    return some(fn(this.value));
  }

  /** @returns this.isSome() ? matcher.some(this.value) : matcher.none() */
  match<B>(matcher: IMatcher<A, B>): B {
    return matcher.some(this.value);
  }

  /** @returns this.isSome() ? this.value : undefined */
  unwrap(): A {
    return this.value;
  }

  /** @returns this.isSome() ? this.value : fallback */
  unwrapOr(): A {
    return this.value;
  }
}

class None<A> {
  /** @returns predicate(this.value) ? this : none */
  filter(): Option<A> {
    return this;
  }

  /** @returns fn(this.value) */
  flatMap<B>(): Option<B> {
    return none;
  }

  isSome(): this is Some<A> {
    return false;
  }

  isNone(): this is None<A> {
    return true;
  }

  /** @returns Option.of(fn(this.value)) */
  map<B>(): Option<B> {
    return none;
  }

  /** @returns this.isSome() ? matcher.some(this.value) : matcher.none() */
  match<B>(matcher: IMatcher<A, B>): B {
    return matcher.none();
  }

  /** @returns this.isSome() ? this.value : undefined */
  unwrap(): undefined {
    return undefined;
  }

  /** @returns this.isSome() ? this.value : fallback */
  unwrapOr(fallback: A): A {
    return fallback;
  }
}

/** @returns Some(value) */
function some<A>(value: A): Some<A> {
  if (value === null || typeof value === "undefined")
    throw new TypeError(
      "Some<A> must be initialized with a non-empty and non-null value."
    );
  return new Some<A>(value);
}

const none: None<never> = new None();

export type Option<A> = Some<A> | None<A>;
export { some as Some, none as None };

/** (fn) => (option) => option.isSome() & fn(option.value).isSome() ? Some(fn(option.value).value) : None */
function flatMap<A, B>(fn: (value: A) => Option<B>) {
  return function (option: Option<A>): Option<B> {
    return option.flatMap(fn);
  };
}

/** (predicate) => (option) => option.isSome() & fn(option.value) ? Some(option.value) : None */
function filter<A>(predicate: (value: A) => boolean) {
  return function (option: Option<A>): Option<A> {
    if (option.isSome() && predicate(option.unwrap())) return option;
    return none;
  };
}

/** (option) => option instanceof Some : true : false */
function isSome<A>(option: Option<A>): option is Some<A> {
  return option instanceof Some;
}

/** (option) => option instanceof None : true : false */
function isNone<A = unknown>(option: Option<A>): option is None<A> {
  return option instanceof None;
}

/** (fn) => (option) => option.isSome() ? Some(fn(option.value)) : None */
function map<A, B>(fn: (value: A) => B) {
  return function (option: Option<A>): Option<B> {
    return option.map(fn);
  };
}

/** (matcher) => (option) => option.isSome() ? matcher.some(option.value) : matcher.none() */
function match<A, B>(matcher: IMatcher<A, B>) {
  return function (option: Option<A>): B {
    if (option.isSome()) return matcher.some(option.unwrap());
    else return matcher.none();
  };
}

/** value NonNullable ? Some(value) : None */
function of<A>(value?: A | null | void): Option<NonNullable<A>> {
  return value === null || typeof value === "undefined" ? none : some(value);
}

/** (option) => option.isSome() ? option.value : undefined */
function unwrap<A>(some: Some<A>): A;
function unwrap<A>(none: None<A>): undefined;
function unwrap<A>(option: Option<A>): A | undefined {
  return option.unwrap();
}

/** (fallback) => (option) => option.isSome() ? option.value : fallback */
function unwrapOr<A>(fallback: A) {
  return function (option: Option<A>): A {
    return option.unwrapOr(fallback);
  };
}

/** array.some(isNone) ? None : Some(array.map(unwrap)) */
function sequence<A>(array: Option<A>[]): Option<A[]> {
  const output: A[] = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].isNone()) return none;
    output.push(array[i].unwrap()!);
  }
  return some(output);
}

/** (fn) => (array) => array.some(isNone) ? None : Some<array.map(fn)> */
function traverse<A, B>(fn: (value: A) => B) {
  /** (array) => array.some(isNone) ? None : Some<array.map(fn)> */
  return function (array: Option<A>[]): Option<B[]> {
    const output: B[] = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i].isNone()) return none;
      output.push(fn(array[i].unwrap()!));
    }
    return some(output);
  };
}

export const Option = {
  flatMap,
  filter,
  isSome,
  isNone,
  map,
  match,
  of,
  unwrap,
  unwrapOr,
  sequence,
  traverse,
  /** (fn) => fn() throws || fn() Nullable ? None : Some(fn()) */
  try<A, B>(fn: (value: A) => B) {
    return function (value: A): Option<B> {
      try {
        return Option.of(fn(value));
      } catch {
        return none;
      }
    };
  },
};
