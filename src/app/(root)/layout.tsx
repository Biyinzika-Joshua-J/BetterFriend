import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Better Friend",
  description:
    "We use AI to help you become the best friend that everyone admires!!",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar/>
      <div className="flex-1">{children}</div>
      <Footer/>
    </main>
  );
}
