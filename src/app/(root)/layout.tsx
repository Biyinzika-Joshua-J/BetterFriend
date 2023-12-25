import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Better Friend",
  description:
    "We use AI to help you become the best friend that everyone admires!!",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
        <div className="">navbar</div>
        {children}
        <div className="">footer</div>
    </main>
  );
}
