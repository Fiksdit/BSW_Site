import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Balanced State Wellness - Option 2",
  description:
    "Balancing our physical, mental and emotional state to enhance personal and professional growth.",
};

export default function Bsw2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="size-full" style={{ fontFamily: "Inter, sans-serif" }}>
      {children}
    </div>
  );
}
