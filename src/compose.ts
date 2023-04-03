/**
 * Performs right-to-left function composition
 *
 * @example
 * const len = (s: string): number => s.length;
 * const double = (n: number): number => n * 2;
 *
 * const f = compose(double, len);
 *
 * assert.strictEqual(f('aaa'), 6);
 */
export function compose<A extends ReadonlyArray<unknown>, B>(
  ab: (...a: A) => B
): (...a: A) => B;
export function compose<A extends ReadonlyArray<unknown>, B, C>(
  ba: (b: B) => C,
  ab: (...a: A) => B
): (...a: A) => C;
export function compose<A extends ReadonlyArray<unknown>, B, C, D>(
  cd: (c: C) => D,
  bc: (b: B) => C,
  ab: (...a: A) => B
): (...a: A) => D;
export function compose<A extends ReadonlyArray<unknown>, B, C, D, E>(
  de: (d: D) => E,
  cd: (c: C) => D,
  bc: (b: B) => C,
  ab: (...a: A) => B
): (...a: A) => E;
export function compose<A extends ReadonlyArray<unknown>, B, C, D, E, F>(
  ef: (e: E) => F,
  de: (d: D) => E,
  cd: (c: C) => D,
  bc: (b: B) => C,
  ab: (...a: A) => B
): (...a: A) => F;
export function compose<A extends ReadonlyArray<unknown>, B, C, D, E, F, G>(
  fg: (f: F) => G,
  ef: (e: E) => F,
  de: (d: D) => E,
  cd: (c: C) => D,
  bc: (b: B) => C,
  ab: (...a: A) => B
): (...a: A) => G;
export function compose<A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H>(
  gh: (g: G) => H,
  fg: (f: F) => G,
  ef: (e: E) => F,
  de: (d: D) => E,
  cd: (c: C) => D,
  bc: (b: B) => C,
  ab: (...a: A) => B
): (...a: A) => H;
export function compose<
  A extends ReadonlyArray<unknown>,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I
>(
  hi: (h: H) => I,
  gh: (g: G) => H,
  fg: (f: F) => G,
  ef: (e: E) => F,
  de: (d: D) => E,
  cd: (c: C) => D,
  bc: (b: B) => C,
  ab: (...a: A) => B
): (...a: A) => I;
export function compose<
  A extends ReadonlyArray<unknown>,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J
>(
  ij: (i: I) => J,
  hi: (h: H) => I,
  gh: (g: G) => H,
  fg: (f: F) => G,
  ef: (e: E) => F,
  de: (d: D) => E,
  cd: (c: C) => D,
  bc: (b: B) => C,
  ab: (...a: A) => B
): (...a: A) => J;
export function compose(
  f1: Function,
  f2?: Function,
  f3?: Function,
  f4?: Function,
  f5?: Function,
  f6?: Function,
  f7?: Function,
  f8?: Function,
  f9?: Function
): unknown {
  switch (arguments.length) {
    case 1:
      return f1;
    case 2:
      return function (this: unknown) {
        return f1(f2!.apply(this, arguments));
      };
    case 3:
      return function (this: unknown) {
        return f1(f2!(f3!.apply(this, arguments)));
      };
    case 4:
      return function (this: unknown) {
        return f1(f2!(f3!(f4!.apply(this, arguments))));
      };
    case 5:
      return function (this: unknown) {
        return f1(f2!(f3!(f4!(f5!.apply(this, arguments)))));
      };
    case 6:
      return function (this: unknown) {
        return f1(f2!(f3!(f4!(f5!(f6!.apply(this, arguments))))));
      };
    case 7:
      return function (this: unknown) {
        return f1(f2!(f3!(f4!(f5!(f6!(f7!.apply(this, arguments)))))));
      };
    case 8:
      return function (this: unknown) {
        return f1(f2!(f3!(f4!(f5!(f6!(f7!(f8!.apply(this, arguments))))))));
      };
    case 9:
      return function (this: unknown) {
        return f1(
          f2!(f3!(f4!(f5!(f6!(f7!(f8!(f9!.apply(this, arguments))))))))
        );
      };
  }
  return;
}
