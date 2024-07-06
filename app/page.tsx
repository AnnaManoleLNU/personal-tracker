"use client";
import { Calendar } from "@nextui-org/calendar";
import {today, getLocalTimeZone} from "@internationalized/date";

export default function Home() {
  const fullDate = new Date();
  const date = fullDate.getDate();
  return (
    <section>
      <Calendar
        aria-label="Date (Uncontrolled)"
        defaultValue={today(getLocalTimeZone())}
      />
    </section>
  );
}
