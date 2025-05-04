import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  // clsx combines the imputs into a string
  // twMerge resolves style conflicts, last wins
  return twMerge(clsx(inputs));
}
