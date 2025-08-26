import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Discover our collection of luxury cabins nestled in the heart of the Italian Dolomites. Perfect for peaceful getaways with stunning mountain views.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 flex min-h-screen flex-col antialiased`}
        suppressHydrationWarning
      >
        <Header />
        <div className="grid flex-1 px-4 py-8 md:px-8 md:py-12">
          <main className="mx-auto w-full max-w-7xl">{children}</main>
        </div>
      </body>
    </html>
  );
}
