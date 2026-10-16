import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Standard utility to merge Tailwind CSS classes conditionally without conflicts.
 * Combines clsx with tailwind-merge.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Returns the configured WhatsApp number from environment or fallback
 */
export function getWhatsAppNumber(): string {
  return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "91XXXXXXXXXX";
}

/**
 * Generates a wa.me URL with pre-filled message text
 */
export function getWhatsAppUrl(text?: string): string {
  const number = getWhatsAppNumber();
  if (!text) {
    return `https://wa.me/${number}`;
  }
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
