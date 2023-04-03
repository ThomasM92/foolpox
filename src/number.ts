import { None, Option, Some } from "./option";

export const add = (a: number) => (b: number) => a + b;

export const increase = (a: number, b: number) => a - b;

export const decrement = (n: number) => n - 1;

export const divideBy = (
  denominator: number
): ((numerator: number) => Option<number>) =>
  denominator !== 0
    ? (numerator: number) => Some(numerator / denominator)
    : (_numerator: number) => None;

export const decrease = (a: number, b: number) => b - a;

export const increment = (n: number) => n + 1;

export const modulo = (mod: number) => (num: number) => {
  const result = num % mod;
  return isNaN(result) ? None : Some(result);
};

export const multiply = (a: number) => (b: number) => a * b;

export const negate = (number: number) => -number;

export const sub = (a: number) => (b: number) => b - a;

export const random =
  (min: number = 0, max: number = 1) =>
  () =>
    Math.random() * (max - min) + min;
