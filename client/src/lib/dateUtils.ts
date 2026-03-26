/**
 * dateUtils.ts — Auto-updating date helpers for TideReview.co.uk
 *
 * All "Updated Month Year" strings across the site use these helpers
 * so the site always shows the current month/year without manual edits.
 */

/**
 * Returns the current month name and year, e.g. "March 2026"
 */
export function currentMonthYear(): string {
  return new Date().toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });
}

/**
 * Returns "Updated Month Year", e.g. "Updated March 2026"
 */
export function updatedLabel(): string {
  return `Updated ${currentMonthYear()}`;
}

/**
 * Returns "Last reviewed: Month Year", e.g. "Last reviewed: March 2026"
 */
export function lastReviewedLabel(): string {
  return `Last reviewed: ${currentMonthYear()}`;
}

/**
 * Returns the current year as a number, e.g. 2026
 */
export function currentYear(): number {
  return new Date().getFullYear();
}

/**
 * Returns a formatted date string for blog posts, e.g. "26 March 2026"
 */
export function formattedDate(date?: Date): string {
  return (date ?? new Date()).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Returns the current month name only, e.g. "March"
 */
export function currentMonth(): string {
  return new Date().toLocaleDateString("en-GB", { month: "long" });
}
