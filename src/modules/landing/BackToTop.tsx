"use client";

export const BackToTop: React.FC = () => {
  return <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Back To Top</button>;
};
