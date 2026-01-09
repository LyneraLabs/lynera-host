import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lynera Host - Premium Hosting Solutions",
  description: "VPS, cPanel, Minecraft, and Discord Bot Hosting",
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
