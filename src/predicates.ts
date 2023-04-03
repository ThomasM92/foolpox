import { TConstructor } from "./types";

export const not =
  <T>(fn: (_: T) => boolean) =>
  (_: T) =>
    !fn(_);

export const isUndefined = (_: unknown) => typeof _ === "undefined";

export const isNull = (_: unknown) => _ === null;

export const isNullOrUndefined = (_: unknown) =>
  _ === null || typeof _ === "undefined";

/**
 * Returns true if the value passed is a number, false otherwise.
 * @param _ A numeric value.
 */
export const isNumber = (_: unknown) => typeof _ === "number";

/**
 * Returns a Boolean value that indicates whether a value is the reserved value NaN (not a
 * number). Unlike the global isNaN(), Number.isNaN() doesn't forcefully convert the parameter
 * to a number. Only values of the type number, that are also NaN, result in true.
 * @param _ A numeric value.
 */
export const isNaN = (_: unknown) => Number.isNaN(_);

export const isFunction = (f: unknown) => typeof f === "function";

/**
 * Returns true if passed value is finite.
 * Unlike the global isFinite, Number.isFinite doesn't forcibly convert the parameter to a
 * number. Only finite values of the type number, result in true.
 * @param _ A numeric value.
 */
export const isFiniteNumber = (_: unknown) => Number.isFinite(_);

/**
 * Returns true if passed value is a finite positive number.
 * @param _ A numeric value.
 */
export const isPositiveNumber = (_: unknown) =>
  typeof _ === "number" && (_ as number) >= 0;

export const isPositiveFiniteNumber = (_: unknown) =>
  Number.isFinite(_) && (_ as number) >= 0;

/**
 * Returns true if passed value is a finite positive number.
 * @param _ A numeric value.
 */
export const isNegativeNumber = (_: unknown) =>
  typeof _ === "number" && (_ as number) < 0;

export const isNegativeFiniteNumber = (_: unknown) =>
  Number.isFinite(_) && (_ as number) < 0;

/**
 * Returns true if the value passed is an integer, false otherwise.
 * @param number A numeric value.
 */
export const isInteger = (number: unknown) => Number.isInteger(number);

/**
 * Returns true if the value passed is a string, false otherwise.
 * @param string A string value.
 */
export const isString = (string: unknown) => typeof string === "string";

export const isEmptyString = <T>(string: T) => string == "";

/**
 * Returns true if the value passed is an array, false otherwise.
 * @param array An array value.
 */
export const isArray = (array: unknown) => Array.isArray(array);

/**
 * Returns true if the value passed is strictly an object, false otherwise. Array value will return false.
 * @param object An object value.
 */
export const isObjectStrict = (object: unknown) =>
  Object.prototype.toString.call(object) === "[object Object]";

/**
 * Returns true if the value passed is an object, false otherwise. Array value will return true.
 * @param object An object value.
 */
export const isObject = (object: unknown) => object instanceof Object;

export const isInstanceOf =
  (constructor: TConstructor) => (instance: unknown) =>
    instance instanceof constructor;

export const isEqualTo = (a: any) => (b: any) => a === b;

export const isEmpty = <T extends Object>(object: T) =>
  Object.keys(object).length === 0;

export const isBoolean = (object: unknown) =>
  object === false || object === true;

export const isSmallerOrEqualThan =
  (number: number) =>
  (_: number): boolean =>
    _ <= number;

export const isGreaterOrEqualThan =
  (number: number) =>
  (_: number): boolean =>
    _ >= number;
