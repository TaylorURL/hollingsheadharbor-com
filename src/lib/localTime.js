/**
 * The harbour's clock.
 *
 * The marina is in Dickinson and everything a visitor reads a date off is a
 * date there. Read on the visitor's own clock, the line naming the company
 * turns the year over hours before the company does.
 */
const ZONE = 'America/Chicago';

/** The year here. */
export function currentYear() {
  return Number(
    new Intl.DateTimeFormat('en-CA', { timeZone: ZONE, year: 'numeric' }).format(new Date())
  );
}
