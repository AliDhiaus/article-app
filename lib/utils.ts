import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  const d = new Date(date)
  const options: Intl.DateTimeFormatOptions = { month: "long", year: 'numeric', day: 'numeric' }
  const formattedDate = d.toLocaleDateString("en-US", options)
  const formattedTime = d.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  })
  return `${formattedDate} ${formattedTime}`;
} 

export const getValueTabel = (obj: string, path: string) => {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
};

