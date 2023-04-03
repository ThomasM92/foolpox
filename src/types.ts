export type TConstructor<
  Arguments extends ReadonlyArray<unknown> = ReadonlyArray<never>,
  Instance = unknown
> = new (...args: Arguments) => Instance;

export type TFunction<
  Arguments extends ReadonlyArray<unknown> = ReadonlyArray<never>,
  Output = unknown
> = (...args: Arguments) => Output;

export type TObject = { [_: string]: any };

export type Tuple<T, N extends number> = N extends 1
  ? [T]
  : N extends 2
  ? [T, T]
  : N extends 3
  ? [T, T, T]
  : N extends 4
  ? [T, T, T, T]
  : N extends 5
  ? [T, T, T, T, T]
  : N extends 6
  ? [T, T, T, T, T, T]
  : N extends 7
  ? [T, T, T, T, T, T, T]
  : N extends 8
  ? [T, T, T, T, T, T, T, T]
  : N extends 9
  ? [T, T, T, T, T, T, T, T, T]
  : never;
