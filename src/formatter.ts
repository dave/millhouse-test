import { capitalize } from './utils/string';

/**
 * Formats a name by capitalizing the first letter
 * @param name - The name to format
 * @returns The formatted name with the first letter capitalized
 */
export function formatName(name: string): string {
  return capitalize(name);
}

/**
 * Formats a title by capitalizing the first letter and adding a period at the end
 * @param title - The title to format
 * @returns The formatted title with the first letter capitalized and a period at the end
 */
export function formatTitle(title: string): string {
  const capitalizedTitle = capitalize(title);

  // Add period if title doesn't already end with punctuation
  if (capitalizedTitle && !capitalizedTitle.match(/[.!?]$/)) {
    return capitalizedTitle + '.';
  }

  return capitalizedTitle;
}