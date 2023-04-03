import { None, Option, Some } from "./option";

/**
 * Returns the Option<item> located at the specified index.
 * @param index The zero-based index of the desired code unit. A negative index will count back from the last item.
 */
export const at =
  (index: number) =>
  /**
   * Returns the Option<item> located at the specified index.
   * @param array The array to apply at() to.
   */
  <T>(array: T[]): Option<T> =>
    Option.of(array.at(index));

/**
 * Combines two or more arrays.
 * This method returns a new array without modifying any existing arrays.
 * @param left The array to add additional items to.
 */
export const concat =
  <T>(left: T[]) =>
  /**
   * Combines two or more arrays.
   * This method returns a new array without modifying any existing arrays.
   * @param right Additional arrays and/or items to add to the end of the array.
   */
  (right: T[]) =>
    left.concat(right);

// a.copyWithin

// a.entries

/**
 * Determines whether all the members of an array satisfy the specified test.
 * @param predicate A function that accepts up to three arguments. The every method calls
 * the predicate function for each element in the array until the predicate returns a value
 * which is coercible to the Boolean value false, or until the end of the array.
 * @param thisArg An object to which the this keyword can refer in the predicate function.
 * If thisArg is omitted, undefined is used as the this value.
 */
export const every =
  <T>(
    predicate: (value: T, index: number, array: T[]) => unknown,
    thisArg?: any
  ) =>
  /**
   * Determines whether all the members of an array satisfy the specified test.
   * @param array The array to apply every() to.
   */
  (array: T[]) =>
    array.every(predicate, thisArg);

/**
 * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
 * @param value value to fill array section with
 * @param start index to start filling the array at. If start is negative, it is treated as
 * length+start where length is the length of the array.
 * @param end index to stop filling the array at. If end is negative, it is treated as
 * length+end.
 */
export const fill =
  <T>(value: T, start?: number, end?: number) =>
  /**
   * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
   * @param array The array to apply fill() to.
   */
  (array: T[]) =>
    array.slice().fill(value, start, end);

/**
 * Returns the elements of an array that meet the condition specified in a callback function.
 * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
 * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
 */
export const filter =
  <T, U = T>(
    predicate: (value: T | U, index: number, array: (T | U)[]) => unknown,
    thisArg?: any
  ) =>
  /**
   * Returns the elements of an array that meet the condition specified in a callback function.
   * @param array The array to apply filter() to.
   */
  (array: (T | U)[]): T[] =>
    array.filter(predicate, thisArg) as T[];

/**
 * Returns the Option<value> of the first element in the array where predicate is true.
 * @param predicate find calls predicate once for each element of the array, in ascending
 * order, until it finds one where predicate returns true.
 * @param thisArg If provided, it will be used as the this value for each invocation of
 * predicate. If it is not provided, undefined is used instead.
 */
export const find =
  <T>(
    predicate: (value: T, index: number, array: T[]) => unknown,
    thisArg?: any
  ) =>
  /**
   * Returns the Option<value> of the first element in the array where predicate is true.
   * @param array The array to apply find() to.
   */
  (array: T[]) =>
    Option.of(array.find(predicate, thisArg));

/**
 * Returns the Option<index> of the first element in the array where predicate is true, and None otherwise
 * @param predicate find calls predicate once for each element of the array, in ascending
 * order, until it finds one where predicate returns true. If such an element is found,
 * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
 * @param thisArg If provided, it will be used as the this value for each invocation of
 * predicate. If it is not provided, undefined is used instead.
 */
export const findIndex =
  <T>(
    predicate: (value: T, index: number, array: T[]) => unknown,
    thisArg?: any
  ) =>
  /**
   * Returns the Option<index> of the first element in the array where predicate is true, and None otherwise
   * @param array The array to apply findIndex() to.
   */
  (array: T[]) =>
    array.findIndex(predicate, thisArg);

/**
 * Returns a new array with all sub-array elements concatenated once into it.
 * @param array The array to apply flat() to.
 */
export const flat = <T>(array: T[][]): T[] => array.flat();

/**
 * Calls a defined callback function on each element of an array. Then, flattens the result into
 * a new array. This is identical to a map followed by flat with depth 1.
 * @param callbackfn A function that accepts up to three arguments. The flatMap method calls the
 * callback function one time for each element in the array.
 * @param thisArg An object to which the this keyword can refer in the callback function. If
 * thisArg is omitted, undefined is used as the this value.
 */
export const flatMap =
  <T, U>(
    callbackfn: (value: T, index: number, array: T[]) => U[],
    thisArg?: any
  ) =>
  /**
   * Calls a defined callback function on each element of an array. Then, flattens the result into
   * a new array. This is identical to a map followed by flat with depth 1.
   * @param array The array to apply flatMap() to.
   */
  (array: T[]) =>
    array.flatMap(callbackfn, thisArg);

/**
 * Performs the specified action for each element in an array.
 * @deprecated impure function
 * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
 * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
 */
export const forEach =
  <T>(
    callbackfn: (value: T, index: number, array: T[]) => void,
    thisArg?: any
  ) =>
  /**
   * Performs the specified action for each element in an array.
   * @deprecated impure function
   * @param array The array to apply forEach() to.
   */
  (array: T[]) =>
    array.forEach(callbackfn, thisArg);

/**
 * Determines whether an array includes a certain element, returning true or false as appropriate.
 * @param searchElement The element to search for.
 * @param fromIndex The position in this array at which to begin searching for searchElement.
 */
export const includes =
  <T>(searchElement: T, fromIndex?: number) =>
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param array The array to apply includes() to.
   */
  (array: T[]) =>
    array.includes(searchElement, fromIndex);

/**
 * Returns the Option<index> of the first occurrence of a value in an array, or None if it is not present.
 * @param searchElement The value to locate in the array.
 * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
 */
export const indexOf =
  <T>(searchElement: T, fromIndex?: number) =>
  /**
   * Returns the Option<index> of the first occurrence of a value in an array, or None if it is not present.
   * @param array The array to apply indexOf() to.
   */
  (array: T[]) => {
    const index = array.indexOf(searchElement, fromIndex);
    return index < 0 ? None : Some(index);
  };

/**
 * Adds all the elements of an array into a string, separated by the specified separator string.
 * @param separator A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.
 */
export const join =
  (separator?: string) =>
  /**
   * Adds all the elements of an array into a string, separated by the specified separator string.
   * @param array The array to apply join() to.
   */
  <T>(array: T[]) =>
    array.join(separator);

// a.keys

/**
 * Returns Some(index) of the last occurrence of a specified value in an array, or None if it is not present.
 * @param searchElement The value to locate in the array.
 * @param fromIndex The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.
 */
export const lastIndexOf =
  <T>(searchElement: T, fromIndex?: number) =>
  /**
   * Returns the Some(index) of the last occurrence of a specified value in an array, or None if it is not present.
   * @param array The array to apply lastIndexOf() to.
   */
  (array: T[]) => {
    const index = array.lastIndexOf(searchElement, fromIndex);
    return index < 0 ? None : Some(index);
  };

/**
 * Gets the length of the array. This is a number one higher than the highest index in the array.
 */
export const length = <T>(array: T[]) => array.length;

/**
 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
 * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
 * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
 */
export const map =
  <T, U>(
    callbackfn: (value: T, index: number, array: T[]) => U,
    thisArg?: any
  ) =>
  /**
   * Calls a defined callback function on each element of an array, and returns an array that contains the results.
   * @param array The array to apply map() to.
   */
  (array: T[]) =>
    array.map(callbackfn, thisArg);

export const pop = <T>(_: T[]): T[] => {
  const output = _.slice();
  output.pop();
  return output;
};

export const popN =
  (amount: number) =>
  <T>(_: T[]): T[] => {
    const output = _.slice();
    for (let i = 0; i < amount; i++) output.pop();
    return output;
  };

export const push =
  <T>(item: T) =>
  (_: T[]): T[] =>
    [..._, item];

/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
 * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
 */
export const reduce =
  <T, U>(
    callbackfn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => U,
    initialValue: U
  ) =>
  /**
   * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param array The array to apply reduce() to.
   */
  (array: T[]) =>
    array.reduce(callbackfn, initialValue);

/**
 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
 * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
 */
export const reduceRight =
  <T, U>(
    callbackfn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => U,
    initialValue: U
  ) =>
  /**
   * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param array The array to apply reduceRight() to.
   */
  (array: T[]) =>
    array.reduceRight(callbackfn, initialValue);

export const removeAt =
  (index: number) =>
  <T>(array: T[]) => {
    let arrayWithoutElement = array.slice();
    arrayWithoutElement.splice(index, 1);
    return arrayWithoutElement;
  };

export const removeNullables = <T>(array: (T | void)[]): T[] => {
  const arrayWithoutNullables: T[] = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "undefined" || array[i] === null) continue;
    arrayWithoutNullables.push(array[i] as T);
  }
  return arrayWithoutNullables;
};

export const replace =
  <T, U>(predicate: (value: T, index: number) => boolean) =>
  (replacement: (value: T, index: number) => U) =>
  (array: T[]) => {
    const output: (T | U)[] = [];
    for (let i = 0; i < array.length; i++) {
      output[i] = predicate(array[i], i) ? replacement(array[i], i) : array[i];
    }
    return output;
  };

/**
 * Returns a copy of the array with its elements order reversed.
 * @param array The array to reverse.
 */
export const reverse = <T>(array: T[]) => array.slice().reverse();

export const shift = <T>(_: T[]) => {
  const output = _.slice();
  output.shift();
  return output;
};

/**
 * Returns a copy of a section of an array.
 * For both start and end, a negative index can be used to indicate an offset from the end of the array.
 * For example, -2 refers to the second to last element of the array.
 * @param start The beginning index of the specified portion of the array.
 * If start is undefined, then the slice begins at index 0.
 * @param end The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.
 * If end is undefined, then the slice extends to the end of the array.
 */
export const slice =
  (start?: number, end?: number) =>
  /**
   * Returns a copy of a section of an array.
   * For both start and end, a negative index can be used to indicate an offset from the end of the array.
   * For example, -2 refers to the second to last element of the array.
   * @param array The array to apply slice() to.
   */
  <T>(array: T[]): T[] =>
    array.slice(start, end);

/**
 * Determines whether the specified callback function returns true for any element of an array.
 * @param predicate A function that accepts up to three arguments. The some method calls
 * the predicate function for each element in the array until the predicate returns a value
 * which is coercible to the Boolean value true, or until the end of the array.
 * @param thisArg An object to which the this keyword can refer in the predicate function.
 * If thisArg is omitted, undefined is used as the this value.
 */
export const some =
  <T>(
    predicate: (value: T, index: number, array: T[]) => unknown,
    thisArg: any
  ) =>
  /**
   * Determines whether the specified callback function returns true for any element of an array.
   * @param array The array to apply some() to.
   */
  (array: T[]) =>
    array.some(predicate, thisArg);

/**
 * Sorts an array in place.
 * This method mutates the array and returns a reference to the same array.
 * @param compareFn Function used to determine the order of the elements. It is expected to return
 * a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
 * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
 * ```ts
 * [11,2,22,1].sort((a, b) => a - b)
 * ```
 */
export const sort =
  <T>(compareFn: ((a: T, b: T) => number) | undefined) =>
  /**
   * Sorts an array in place.
   * This method mutates the array and returns a reference to the same array.
   * @param array The array to sort.
   */
  (array: T[]) =>
    array.slice().sort(compareFn);

// a.toLocaleString

// a.toString

// a.unshift

// a.values

// * ================================================================================= *
// * ================================================================================= *
// * ================================================================================= *
// * ================================================================================= *
// * ================================================================================= *

/**
 * Append given elements to a given array. Returns the result as a new array.
 * @param elements The elements to append.
 * @returns [...array, ...elements]
 */
export const append =
  <T>(...elements: T[]) =>
  /**
   * Append given elements to a given array. Returns the result as a new array.
   * @param array The array to apply append() to.
   * @returns [...array, ...elements]
   */
  (array: T[]) =>
    [...array, ...elements];

/**
 * Prepend given elements to a given array. Returns the result as a new array.
 * @param elements The elements to prepend.
 * @returns [...elements, ...array]
 */
export const prepend =
  <T>(...elements: T[]) =>
  /**
   * Prepend given elements to a given array. Returns the result as a new array.
   * @param array The array to apply prepend() to.
   * @returns [...elements, ...array]
   */
  (array: T[]) =>
    [...elements, ...array];

export const clone = <T>(_: T[]) => [..._];

/** Returns the first Option<element> of an array.
 * @param array The array from which the first element is retreived.
 */
export const first = <T>(array: T[]) => Option.of(array[0]);

/**
 * Returns the last Option<element> of an array.
 * @param array The array from which the last element is retreived.
 */
export const last = <T>(array: T[]) => Option.of(array[array.length - 1]);

/**
 * Chunks an array into multiple arrays, each containing size or fewer items.
 * @param size the size of the chunk
 */
export const chunk =
  (size: number) =>
  /**
   * Chunks an array into multiple arrays, each containing size or fewer items.
   * @param array the array to chunk
   */
  <T>(array: T[]): T[][] => {
    const output: T[][] = [];
    for (let i = 0, l = array.length; i < l; i += size) {
      output.push(array.slice(i, i + size));
    }
    return output;
  };

/**
 * Returns the first n elements of an array. If amount >= length, returns a copy of the given array.
 * If amount is not defined, return a copy of the array without the last element.
 * @param amount The number of element to retrieve.
 */
export const head =
  (amount?: number) =>
  /**
   * Returns the first n elements of an array. If amount >= length, returns a copy of the given array.
   * If amount is not defined, return a copy of the array without the last element.
   * @param array The array from which the elements are retrieve.
   */
  <T>(array: T[]) =>
    array.slice(0, amount ?? array.length - 1);

/**
 * Returns the last n elements of an array. If amount >= length, returns a copy of the given array.
 * If amount is not defined, return a copy of the array without the first element.
 * @param amount The number of element to retrieve.
 */
export const tail =
  (amount?: number) =>
  <T>(array: T[]) =>
    array.slice(amount ? -amount : -1);

/**
 * Computes the union of the passed-in arrays:
 * the list of unique items, in order,
 * that are present in one or more of the arrays.
 */
export const union = <T>(...arrays: T[][]) => {
  const array: T[] = [];
  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      if (array.includes(arrays[i][j])) continue;
      array.push(arrays[i][j]);
    }
  }
  return array;
};

/**
 * Convert an array of object to a record of object
 * identified with the result of the provided callback
 * @param fn the function that returns an identifier string
 */
export const toRecord =
  <T>(fn: (value: T, index: number) => string) =>
  /**
   * Convert an array of object to a record of object
   * identified with the result of the provided callback
   * @param array The array to apply toCollection() to.
   */
  (array: T[]): Record<string, T> => {
    const collection: Record<string, T> = {};
    for (let i = 0; i < array.length; i++) {
      collection[fn(array[i], i)] = array[i];
    }
    return collection;
  };

/**
 * Convert an array of object to a map of object
 * identified with the result of the provided callback
 * @param fn the function that returns an identifier
 */
export const toMap =
  <K, V>(fn: (value: V, index: number) => K) =>
  /**
   * Convert an array of object to a map of object
   * identified with the result of the provided callback
   * @param array The array to apply toCollection() to.
   */
  (array: V[]): Map<K, V> => {
    const map = new Map<K, V>();
    for (let i = 0; i < array.length; i++) {
      map.set(fn(array[i], i), array[i]);
    }
    return map;
  };

export const toSet = <T>(array: T[]) => new Set(array);

export const transpose = <T>(mat: T[][]): T[][] => {
  const r = mat.length;
  if (r === 0) return [];

  const l = mat[0].length;
  if (l === 0) return mat.map((_) => []);

  const output: T[][] = [];
  for (let i = 0; i < l; i++) {
    output.push([]);
  }

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < l; j++) {
      output[j].push(mat[i][j]);
    }
  }

  return output;
};

/** Wrap any value inside an array */
export const wrap = <T>(value: T) => [value];

// Statistics

export const product = (array: number[]) => {
  let product = 1;
  for (let i = 0; i < array.length; i++) product *= array[i];
  return product;
};

export const sum = (array: number[]) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) sum += array[i];
  return sum;
};

export const mean = (array: number[]) => sum(array) / array.length;

export const median = (array: number[]) => {
  const mid = array.length / 2;
  const sorted = array.slice().sort((a, b) => a - b);
  return mid % 1 ? sorted[mid - 0.5] : (sorted[mid - 1] + sorted[mid]) / 2;
};

export const variance = (array: number[]) => {
  const mu = mean(array);
  let sum = 0;
  for (let i = 0; i < array.length; i++) sum += (array[i] - mu) ** 2;
  return sum / (array.length - 1);
};

export const standardDeviation = (array: number[]) =>
  Math.sqrt(variance(array));
