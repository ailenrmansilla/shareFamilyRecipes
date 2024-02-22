import Navbar from "@/ui/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Share Family Recipes",
  description: "Share your favorite recipes with your family members.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
            {/* <Logo /> */}
          <Navbar />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}