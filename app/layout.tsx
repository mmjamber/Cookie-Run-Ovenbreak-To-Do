import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CookieRun OvenBreak",
  description: "A pastel CookieRun OvenBreak homepage mockup.",
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
