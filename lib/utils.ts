import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine class names with conditional logic + Tailwind merge.
 * Used by shadcn-style components.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
