import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Decimal } from "decimal.js";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//Convert prisma object into a regular JS object

export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

//Format number with decimal places

export function formatNumberWithDecimal(num: number): string {
  const [int, decimal] = num.toString().split(".");
  return decimal ? `${int}.${decimal.padEnd(2, "0")}` : `${int}.00`;
}

// Convert string values back to Decimal
export function convertToDecimal<
  T extends { price: string | number; rating: string | number }
>(data: T): T & { price: Decimal; rating: Decimal } {
  return {
    ...data,
    price: new Decimal(data.price), // Convert price to Decimal
    rating: new Decimal(data.rating), // Convert rating to Decimal
  };
}
