'use client';

import "./globals.css";
import { ThemeContextProvider } from './context/ThemeContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Dashboard</title>
      </head>
      <body>
        <ThemeContextProvider>
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  );
}
