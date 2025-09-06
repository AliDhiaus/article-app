import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  const d = new Date(date)
  return d.toLocaleDateString();
} 

export const getValueTabel = (obj: string, path: string) => {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
};

