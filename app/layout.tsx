import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BeastGYM - 50+ Years of Fitness Excellence",
  description: "Welcome to BeastGYM - Transforming lives through fitness excellence. Join us for premium gym facilities, expert trainers, and a supportive community.",
  keywords: "BeastGYM, gym, fitness, workout, personal training, yoga, wellness, Bhiwani, Haryana",
  authors: [{ name: "BeastGYM" }],
  openGraph: {
    title: "BeastGYM - 50+ Years of Fitness Excellence",
    description: "Welcome to R-Zone Fitness Gym - Transforming lives through fitness excellence.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BeastGYM - 50+ Years of Fitness Excellence",
    description: "Welcome to R-Zone Fitness Gym - Transforming lives through fitness excellence.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
