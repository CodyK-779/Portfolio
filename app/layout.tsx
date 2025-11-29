import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "remixicon/fonts/remixicon.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import DVContainer from "@/components/DVContainer";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "KZT's Portfolio | Full-Stack Developer",
  description: "Portfolio Website Created With Next.js 16",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} text-white bg-black`}>
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <DVContainer />
          <Navbar />
          <TooltipProvider>
            <main className="overflow-hidden pb-10">{children}</main>
          </TooltipProvider>
          <TooltipProvider>
            <Footer />
          </TooltipProvider>
        </div>
      </body>
    </html>
  );
}
