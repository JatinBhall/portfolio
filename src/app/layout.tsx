import type { Metadata } from "next";
import { Poppins, Solway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});
const solway = Solway({
  variable: "--font-solway-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
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
        className={` ${solway.variable}  ${poppins.variable} !font-gaegu antialiased bg-repeat bg-[url(/images/bg-image.svg)]`}>
        {children}
        <Navbar />
      </body>
    </html>
  );
}

