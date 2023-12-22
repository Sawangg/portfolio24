"use client";

import { useEffect, useState } from "react";

export type ClockProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Clock: React.FC<ClockProps> = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <p className="pt-4 font-serif tracking-wider lg:text-xl 3xl:text-2xl">
      {date.getHours()}:{date.getMinutes().toString().padStart(2, "0")}
    </p>
  );
};
