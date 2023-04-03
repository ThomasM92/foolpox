export const indentity = <T>(_: T): T => _;

export const log =
  (message: string = "") =>
  <T>(_: T) => {
    console.log(message, _);
    return _;
  };

export const debug = <T>(_: T): T => {
  debugger;
  return _;
};

export const linearMapping =
  (minFrom: number, maxFrom: number, minTo: number, maxTo: number) =>
  (value: number): number =>
    ((value - minFrom) / (maxFrom - minFrom)) * (maxTo - minTo) + minTo;

/**
 * Szudzik pairing function, maps 2 16bit ints to a 32bit int
 * @param a positive integer
 * @param b positive integer
 * @returns the mapped index
 */
export const pair = (a: number, b: number): number =>
  a >= b ? a * a + a + a + b : a + b * b;
