import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPopulation = (value: number) => {
  return (value / 1000000).toFixed(2) + "M";
};
