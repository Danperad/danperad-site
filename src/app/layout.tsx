import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Danperad site",
  description: "Danperad site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={"min-h-screen bg-gray-100 font-mono"}>
        {children}
      </body>
    </html>
  );
}
