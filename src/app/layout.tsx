import { Inter as FontSans } from "next/font/google"
import type { Metadata } from "next";

import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/ui/navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Xposefinder - Real-Time Data Exposure Detection & Remediation for Brands, Employees & Customers",
  description: "Discover and fix exposed data before it becomes a breach. Xposefinder scans billions of records to pinpoint leaks linked to your domain, workforce, or customers - providing actionable insights, automated fixes, and enterprise-grade protection in real time.",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="description" content="Discover and fix exposed data before it becomes a breach. Xposefinder scans billions of records to pinpoint leaks linked to your domain, workforce, or customers - providing actionable insights, automated fixes, and enterprise-grade protection in real time." />
        <link rel="canonical" href="https://xposefinder.com/" />
        <meta property="og:title" content="Xposefinder - Real-Time Data Exposure Detection & Remediation for Brands, Employees & Customers" />
        <meta property="og:description" content="Discover and fix exposed data before it becomes a breach. Xposefinder scans billions of records to pinpoint leaks linked to your domain, workforce, or customers - providing actionable insights, automated fixes, and enterprise-grade protection in real time." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xposefinder.com/" />
        <meta property="og:image" content="/touchicon.png" />
        <meta property="og:image:width" content="768" />
        <meta property="og:image:height" content="768" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Xposefinder - Real-Time Data Exposure Detection & Remediation for Brands, Employees & Customers" />
        <meta name="twitter:description" content="Discover and fix exposed data before it becomes a breach. Xposefinder scans billions of records to pinpoint leaks linked to your domain, workforce, or customers - providing actionable insights, automated fixes, and enterprise-grade protection in real time." />
        <meta name="twitter:image" content="/touchicon.png" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main>
        {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
