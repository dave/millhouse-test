import { greet } from './utils/greeting';
import { formatName } from './formatter';

/**
 * Generates a welcome message for a given name
 * @param name - The name to generate a welcome message for
 * @returns A formatted welcome message
 */
export function generateWelcome(name: string): string {
  const formattedName = formatName(name);
  return greet(formattedName);
}