/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Format currency into Indian Rupee format (₹)
 */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);
}

/**
 * Simple text truncator for descriptions
 */
export function truncateText(text: string, length = 100): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
}

/**
 * Scroll page smoothly to an HTML element ID
 */
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
