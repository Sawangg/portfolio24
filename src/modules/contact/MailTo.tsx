"use client";

import { email } from "@lib/constants";

export type MailToProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const MailTo = ({ className }: MailToProps) => {
  return (
    <button className={className} onClick={() => (window.location.href = `mailto:${email}`)}>
      {email}
    </button>
  );
};
