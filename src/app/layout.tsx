import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "А.Кукрус - Блог",
  description: "Алексей Кукрус. Личный блог",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}
