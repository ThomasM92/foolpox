import { Option } from "./option";

export const property =
  <T, K extends keyof T>(key: K) =>
  (_: T): T[K] =>
    _[key];

export const propertyOf =
  <T, K extends keyof T>(record: T) =>
  (propName: K): T[K] =>
    record[propName];

export const safeProperty =
  (propName: string) =>
  <T>(object: Record<string, T>) =>
    Option.of(object[propName]);

export const safePropertyOf =
  <T>(record: Record<string, T>) =>
  (propName: string) =>
    Option.of(record[propName]);

export const map =
  <T, U>(callbackfn: (value: T, index: number) => U) =>
  (record: Record<string, T>) => {
    const keys = Object.keys(record);
    const output: Record<string, U> = {};
    for (let i = 0; i < keys.length; i++) {
      output[keys[i]] = callbackfn(record[keys[i]], i);
    }
    return output;
  };

export const mapToArray =
  <T, U>(callbackfn: (value: T, index: number) => U) =>
  (record: Record<string, T>) => {
    const keys = Object.keys(record);
    const output: U[] = [];
    for (let i = 0; i < keys.length; i++) {
      output.push(callbackfn(record[keys[i]], i));
    }
    return output;
  };

export const flatMapToArray =
  <T, U>(callbackfn: (value: T, index: number) => U[]) =>
  (record: Record<string, T>): U[] => {
    const keys = Object.keys(record);
    const output: U[][] = [];
    for (let i = 0; i < keys.length; i++) {
      output.push(callbackfn(record[keys[i]], i));
    }
    return output.flat();
  };
