import type { Metadata } from "next";

//  Fonts & Styles
import { Nunito } from "next/font/google";
import "./globals.css";

//  Components
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Next Stay",
  description: "Your Next Destination Awaits",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
