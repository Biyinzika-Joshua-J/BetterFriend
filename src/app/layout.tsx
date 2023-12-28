import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/context/ThemeProvider";
import { ModalProvider } from "@/context/ModalProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Better Friend",
  description:
    "We use AI to help you become the best friend that everyone admires!!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <ThemeProvider>
            <ModalProvider>{children}</ModalProvider>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
