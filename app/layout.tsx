import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Fira_Sans } from 'next/font/google'

const fira = Fira_Sans({
  style: "normal",
  weight: "400",
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: 'Supportlyz',
  description: 'AI Support for your business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fira.className}>{children}</body>
    </html>
  );
}
