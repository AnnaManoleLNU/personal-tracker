"use client";
import { Calendar } from "@nextui-org/calendar";
import {today, getLocalTimeZone} from "@internationalized/date";

export default function Home() {
  return (
    <section>
      <Calendar
        aria-label="Date (Uncontrolled)"
        defaultValue={today(getLocalTimeZone())}
        color="primary"
      />
    </section>
  );
}
