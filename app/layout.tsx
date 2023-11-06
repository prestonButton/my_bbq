import type { Metadata } from 'next'
import { GeistSans, GeistMono } from "geist/font";
import './globals.css'

export const metadata: Metadata = {
  title: "Preston's BBQ",
  description: 'A NextJS app of the best food in towm',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className='bg-black text-white w-full h-full'>{children}</body>
    </html>
  )
}
