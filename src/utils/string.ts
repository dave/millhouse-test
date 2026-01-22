/**
 * Capitalizes the first letter of a string
 * @param str - The string to capitalize
 * @returns The string with the first letter capitalized
 */
export function capitalize(str: string): string {
  if (!str || str.length === 0) {
    return str;
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Reverses a string
 * @param str - The string to reverse
 * @returns The reversed string
 */
export function reverse(str: string): string {
  if (!str || str.length === 0) {
    return str;
  }

  return str.split('').reverse().join('');
}