"use client";

export type MailToProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const MailTo = ({ className }: MailToProps) => {
  return (
    <button className={className} onClick={() => (window.location.href = "mailto:leo.mercier@efrei.net")}>
      leo.mercier@efrei.net
    </button>
  );
};
