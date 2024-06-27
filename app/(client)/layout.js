import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import CollegeVideo from "@/components/CollegeVideo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <CollegeVideo />
        {children}
      </body>
    </html>
  );
}