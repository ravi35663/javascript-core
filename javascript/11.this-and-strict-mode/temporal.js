/* ===================== TEMPORAL (INTERVIEW-READY NOTES) =====================

=> What is Temporal?
- Temporal is a modern JavaScript date & time API
- Designed to replace the old and error-prone `Date` object
- Provides clear, immutable, and timezone-safe date/time handling
- Solves common issues like timezone bugs, DST problems, and mutability

------------------------------------------------------------
=> Why was Temporal introduced?
Problems with JavaScript Date:
    1) Mutable (can change unexpectedly)
    2) Confusing timezone handling
    3) DST (Daylight Saving Time) bugs
    4) Poor date calculations
    5) Hard to reason about formatting & parsing

👉 Temporal fixes all of these problems.

------------------------------------------------------------
==> Key Concepts in Temporal

1) Immutability
- Temporal objects are immutable
- Any change returns a NEW object

2) Explicit Time Handling
- Separates date, time, timezone, and duration clearly

3) Timezone Safety
- Built-in timezone awareness
- Prevents DST-related bugs

------------------------------------------------------------
=> Core Temporal Types (VERY IMPORTANT)

1) Temporal.Now
- Gets current date/time safely

2) Temporal.PlainDate
- Date only (no time, no timezone)
- Example: birthday, holidays

3) Temporal.PlainTime
- Time only (no date, no timezone)
- Example: alarm time

4) Temporal.PlainDateTime
- Date + time (no timezone)

5) Temporal.ZonedDateTime
- Date + time + timezone (most powerful)

6) Temporal.Instant
- Exact point in time (UTC-based)

7) Temporal.Duration
- Represents time difference (days, hours, etc.)

------------------------------------------------------------

==> Basic Examples

// Current date & time
const now = Temporal.Now.zonedDateTimeISO();
console.log(now.toString());

// Date only
const date = Temporal.PlainDate.from("2026-01-20");

// Time only
const time = Temporal.PlainTime.from("10:30");

// Date + Time (no timezone)
const dateTime = Temporal.PlainDateTime.from("2026-01-20T10:30");

// Exact timestamp
const instant = Temporal.Instant.from("2026-01-20T05:00Z");

------------------------------------------------------------
==> Duration & Calculations (Big Advantage)

// Duration
const duration = Temporal.Duration.from({ days: 5 });

// Add duration
const futureDate = date.add(duration);
console.log(futureDate.toString());

// Difference between dates
const diff = date.until(futureDate);
console.log(diff.days); // 5

------------------------------------------------------------

==> Timezone Handling Example

const zoned = Temporal.ZonedDateTime.from(
  "2026-01-20T10:30[Asia/Kolkata]"
);

console.log(zoned.timeZoneId); // Asia/Kolkata

------------------------------------------------------------

==> Comparison: Date vs Temporal

| Feature            | Date ❌           | Temporal ✅        |
|--------------------|------------------|-------------------|
| Mutability         | Mutable          | Immutable         |
| Timezone safety    | Poor             | Excellent         |
| DST handling       | Bug-prone        | Safe              |
| Readability        | Confusing        | Clear & explicit  |
| API design         | Old              | Modern            |

------------------------------------------------------------

==> Real-World Use Cases
- Scheduling systems
- Booking & reservation apps
- Global applications with timezones
- Finance & reporting systems
- Calendar & reminder apps

------------------------------------------------------------

==> Interview One-Liners (VERY IMPORTANT)

1️⃣ What is Temporal?
👉 “Temporal is a modern JavaScript API for handling dates and times safely, fixing the flaws of the Date object.”

2️⃣ Why use Temporal instead of Date?
👉 “Temporal is immutable, timezone-aware, and avoids DST and mutation bugs.”

3️⃣ Biggest advantage?
👉 “Clear separation of date, time, timezone, and duration.”

------------------------------------------------------------

==> When should you use Temporal?
- When working with timezones
- When accuracy matters
- When building global applications
- When you want predictable date/time logic

*/