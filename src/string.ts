import { None, Option, Some } from "./option";

/**
 * Returns a new String consisting of the single UTF-16 code unit located at the specified index.
 * @param index The zero-based index of the desired code unit. A negative index will count back from the last item.
 */
export const at =
  (index: number) =>
  /**
   * Returns a new String consisting of the single UTF-16 code unit located at the specified index.
   * @param string The string to apply at() to.
   */
  (string: string) =>
    Option.of(string.at(index));

/**
 * Returns the character at the specified index.
 * @param pos The zero-based index of the desired character.
 */
export const charAt =
  (pos: number) =>
  /**
   * Returns the character at the specified index.
   * @param string The string to apply charCodeAt() to.
   */
  (string: string): Option<string> => {
    const char = string.charAt(pos);
    return char === "" ? None : Some(char);
  };

export const charCodeAt =
  (pos: number) =>
  /**
   * Returns the Unicode value of the character at the specified location.
   * @param string The string to apply charCodeAt() to.
   */
  (string: string): Option<number> => {
    const charCode = string.charCodeAt(pos);
    return isNaN(charCode) ? None : Some(charCode);
  };

// a.codePointAt()

export const concat = (strings: string[]) =>
  strings[0].concat(...strings.slice(1));

/**
 * Returns true if the sequence of elements of searchString converted to a String is the
 * same as the corresponding elements of this object (converted to a String) starting at
 * endPosition – length(this). Otherwise returns false.
 */
export const endsWith =
  (searchString: string, endPosition?: number) =>
  /**
   * Returns true if the sequence of elements of searchString converted to a String is the
   * same as the corresponding elements of this object (converted to a String) starting at
   * endPosition – length(this). Otherwise returns false.
   */
  (string: string) =>
    string.endsWith(searchString, endPosition);

/**
 * Returns true if searchString appears as a substring of the result of converting this
 * object to a String, at one or more positions that are
 * greater than or equal to position; otherwise, returns false.
 * @param searchString search string
 * @param position If position is undefined, 0 is assumed, so as to search all of the String.
 */
export const includes =
  (searchString: string, position?: number) =>
  /**
   * Returns true if searchString appears as a substring of the result of converting this
   * object to a String, at one or more positions that are
   * greater than or equal to position; otherwise, returns false.
   * @param string The string to apply includes() to.
   */
  (string: string) =>
    string.includes(searchString, position);

/**
 * Returns the position of the first occurrence of a substring.
 * @param searchString The substring to search for in the string
 * @param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
 */
export const indexOf =
  (searchString: string, position?: number) =>
  /**
   * Returns the position of the first occurrence of a substring.
   * @param string The string to apply indexOf() to.
   */
  (string: string) =>
    string.indexOf(searchString, position);

/**
 * Returns the last occurrence of a substring in the string.
 * @param searchString The substring to search for.
 * @param position The index at which to begin searching. If omitted, the search begins at the end of the string.
 */
export const lastIndexOf =
  (searchString: string, position?: number) =>
  /**
   * Returns the last occurrence of a substring in the string.
   * @param string The string to apply lastIndexOf() to.
   */
  (string: string) =>
    string.lastIndexOf(searchString, position);

/**
 * Gets the length of the string.
 */
export const length = (string: string) => string.length;

// a.localeCompare

// a.match

// a.matchAll

// a.normalize

// a.padEnd

// a.padStart

/**
 * Converts a string to a floating-point number.
 * @param string A string that may contain a floating-point number.
 */
export const parseFloat = (string: string): Option<number> => {
  try {
    const number = Number.parseFloat(string);
    return isNaN(number) ? None : Some(number);
  } catch {
    return None;
  }
};

/**
 * Converts a string to an array of floating-point numbers. Numbers shound be separated by whitespace.
 * @param string A string that may contain an array of floating-point numbers.
 */
export const parseArrayOfFloats = (string: string): Option<number[]> => {
  try {
    return Some(Array.from(string.split(/\s+/), Number.parseFloat));
  } catch {
    return None;
  }
};

/**
 * Converts a JavaScript Object Notation (JSON) string into an object.
 * @param text A valid JSON string.
 * @param reviver A function that transforms the results. This function is called for each member of the object.
 * If a member contains nested objects, the nested objects are transformed before the parent object is.
 */
export const parseJSON = (
  text: string,
  reviver?: (this: any, key: string, value: any) => any
): Option<any> => {
  try {
    return Some(JSON.parse(text, reviver));
  } catch {
    return None;
  }
};

/**
 * Returns a String value that is made from count copies appended together. If count is 0,
 * the empty string is returned.
 * @param count number of copies to append
 */
export const repeat =
  (count: number) =>
  /**
   * Returns a String value that is made from count copies appended together. If count is 0,
   * the empty string is returned.
   * @param string The string to apply repeat() to.
   */
  (string: string) =>
    string.repeat(count);

/**
 * Replaces first match with string or all matches with RegExp.
 * @param searchValue A string or RegExp search value.
 * @param replaceValue A string containing the text to replace for match.
 */
export const replace =
  (searchValue: string, replaceValue: string) =>
  /**
   * Replaces first match with string or all matches with RegExp.
   * @param string The string to apply replace() to.
   */
  (string: string) =>
    string.replace(searchValue, replaceValue);

/**
 * Replace all instances of a substring in a string, using a regular expression or search string.
 * @param searchValue A string to search for.
 * @param replaceValue A string containing the text to replace for every successful match of searchValue in this string.
 */
export const replaceAll =
  (searchValue: string | RegExp, replaceValue: string) =>
  /**
   * Replace all instances of a substring in a string, using a regular expression or search string.
   * @param string The string to apply replaceAll() to.
   */
  (string: string) =>
    string.replaceAll(searchValue, replaceValue);

/**
 * Finds the first substring match in a regular expression search.
 * @param searcher An object which supports searching within a string.
 */
export const search =
  (searcher: { [Symbol.search](string: string): number }) =>
  /**
   * Finds the first substring match in a regular expression search.
   * @param string The string to apply search() to.
   */
  (string: string) =>
    string.search(searcher);

/**
 * Returns a section of a string.
 * @param start The index to the beginning of the specified portion of stringObj.
 * @param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
 * If this value is not specified, the substring continues to the end of stringObj.
 */
export const slice =
  (start?: number, end?: number) =>
  /**
   * Returns a section of a string.
   * @param string The string to apply slice() to.
   */
  (string: string) =>
    string.slice(start, end);

/**
 * Split a string into substrings using the specified separator and return them as an array.
 * @param separator An object that can split a string.
 * @param limit A value used to limit the number of elements returned in the array.
 */
export const split =
  (separator: string | RegExp, limit?: number) =>
  /**
   * Split a string into substrings using the specified separator and return them as an array.
   * @param string The string to apply split() to.
   */
  (string: string) =>
    string.split(separator, limit);

/**
 * Returns true if the sequence of elements of searchString converted to a String is the
 * same as the corresponding elements of this object (converted to a String) starting at
 * position. Otherwise returns false.
 */
export const startsWith =
  (searchString: string, position?: number) =>
  /**
   * Returns true if the sequence of elements of searchString converted to a String is the
   * same as the corresponding elements of this object (converted to a String) starting at
   * position. Otherwise returns false.
   */
  (string: string) =>
    string.startsWith(searchString, position);

/**
 * Returns the substring at the specified location within a String object.
 * @param start The zero-based index number indicating the beginning of the substring.
 * @param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
 * If end is omitted, the characters from start through the end of the original string are returned.
 */
export const substring =
  (start: number, end?: number) =>
  /**
   * Returns the substring at the specified location within a String object.
   * @param string The string to apply substring() to.
   */
  (string: string) =>
    string.substring(start, end);

// a.toLocaleLowerCase

// a.toLocaleUpperCase

/** Converts all the alphabetic characters in a string to lowercase. */
export const toLowerCase = (string: string) => string.toLowerCase();

// a.toString

/** Converts all the alphabetic characters in a string to uppercase. */
export const toUpperCase = (string: string) => string.toUpperCase();

/** Removes the leading and trailing white space and line terminator characters from a string. */
export const trim = (string: string) => string.trim();

/** Removes the trailing white space and line terminator characters from a string. */
export const trimEnd = (string: string) => string.trimEnd();

/** Removes the leading white space and line terminator characters from a string. */
export const trimStart = (string: string) => string.trimStart();

// a.valueOf

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
  (_: string): string[] => {
    const output: string[] = [];
    for (let i = 0, l = _.length; i < l; i += size) {
      output.push(_.substring(i, i + size));
    }
    return output;
  };
