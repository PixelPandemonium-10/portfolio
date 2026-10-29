import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shubhra Shukla — hii!!",
  description:
    "The playful portfolio of Shubhra Shukla — a curious creator making little internet worlds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
