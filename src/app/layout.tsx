import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const kanit = Kanit({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-kanit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Innovative Landing Page",
  description: "A minimal and innovative landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className={`${kanit.variable} font-kanit bg-white`}>
        {children}
      </body>
    </html>
  );
}
