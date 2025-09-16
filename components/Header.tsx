"use client";

import Logo from "@/components/Logo";
import MobileNavigation from "@/components/MobileNavigation";
import Navigation from "@/components/Navigation";
import { usePathname } from "next/navigation";
import SignOutButton from "./SignOutButton";

export default function Header() {
  const pathname = usePathname();
  const isHomeRoute = pathname === "/";

  return (
    <header
      className={`border-b px-4 py-3 backdrop-blur-sm md:px-8 md:py-5 ${
        isHomeRoute
          ? "border-transparent bg-transparent"
          : "bg-primary-950/95 border-primary-900"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <div className="z-10 hidden md:block">
          <Navigation />
        </div>
        <div className="z-10 flex items-center gap-2 md:hidden">
          <div className="sm:hidden">
            <SignOutButton />
          </div>
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
