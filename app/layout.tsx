import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Walmart Clone",
  description: "App for education porpuses",
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
