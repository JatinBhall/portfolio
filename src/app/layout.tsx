import type { Metadata } from "next";
import { Gaegu, } from "next/font/google";
import "./globals.css";

const gaegu = Gaegu({
  variable: "--font-gaegu-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"], // Include weights you want to use
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jatin Bhall | Full-Stack Developer Portfolio",
  description: "Welcome to the portfolio of Jatin Bhall — a passionate full-stack developer showcasing projects, skills, and experience in modern web development.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gaegu.className} antialiased bg-repeat bg-[url(/images/bg-image.svg)]`}>
        {children}
      </body>
    </html>
  );
}

