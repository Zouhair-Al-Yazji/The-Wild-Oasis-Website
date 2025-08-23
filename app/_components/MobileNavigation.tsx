// app/_components/MobileNavigation.tsx
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Home,
  Building2,
  Info,
  User,
  ChevronRight,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/cabins", label: "Cabins", icon: Building2 },
  { href: "/about", label: "About", icon: Info },
  { href: "/account", label: "Guest Area", icon: User },
];

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);

  useEffect(function () {
    function handleResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="bg-primary-950 hover:bg-primary-900 border-primary-800/50 hover:border-primary-700/60 text-primary-100 hover:text-accent-400 relative cursor-pointer rounded-md border shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="from-primary-950 via-primary-950 to-primary-900 border-primary-800/50 text-primary-100 w-80 overflow-hidden border-l bg-gradient-to-br p-0 backdrop-blur-xl"
      >
        <div className="relative flex h-full flex-col">
          <div className="from-accent-400/5 to-primary-800/10 pointer-events-none absolute inset-0 bg-gradient-to-br via-transparent" />
          <div className="bg-accent-400/10 pointer-events-none absolute top-20 -right-20 h-40 w-40 rounded-full blur-3xl" />
          <div className="bg-primary-600/20 pointer-events-none absolute bottom-20 -left-20 h-32 w-32 rounded-full blur-2xl" />

          <div className="border-primary-800/30 bg-primary-950/50 relative z-10 flex items-center justify-between border-b p-6 backdrop-blur-sm">
            <div>
              <SheetTitle className="from-accent-400 to-accent-300 bg-gradient-to-r bg-clip-text text-xl font-bold text-transparent">
                The Wild Oasis
              </SheetTitle>
              <SheetDescription className="text-primary-400 mt-1 text-sm">
                Luxury mountain retreat
              </SheetDescription>
            </div>
            <SheetClose asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary-800/40 text-primary-400 hover:text-primary-100 h-8 w-8 cursor-pointer rounded-lg transition-colors"
                aria-label="Close navigation menu"
              >
                <X className="h-4 w-4" />
              </Button>
            </SheetClose>
          </div>

          <nav className="relative z-10 flex-1 pt-8">
            <ul className="space-y-2 px-4">
              {navigationItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.href}
                    style={{ animationDelay: `${index * 50}ms` }}
                    className="animate-in slide-in-from-right-10 fade-in duration-300"
                  >
                    <SheetClose asChild>
                      <Link
                        href={item.href}
                        className="group hover:bg-primary-800/30 hover:border-primary-700/30 hover:shadow-accent-400/5 flex items-center gap-4 rounded-2xl border border-transparent px-4 py-4 transition-all duration-300 hover:translate-x-1 hover:shadow-lg active:scale-95"
                        onClick={() => setOpen(false)}
                      >
                        <div className="bg-primary-800/40 group-hover:bg-accent-400/20 flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110">
                          <Icon className="text-primary-300 group-hover:text-accent-400 h-5 w-5 transition-colors duration-300" />
                        </div>
                        <span className="text-primary-100 group-hover:text-accent-400 flex-1 text-base font-medium transition-colors duration-300">
                          {item.label}
                        </span>
                        <ChevronRight className="text-primary-500 group-hover:text-accent-400 h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                      </Link>
                    </SheetClose>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="border-primary-800/30 bg-primary-950/50 relative z-10 mt-auto border-t backdrop-blur-sm">
            <div className="p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="from-accent-400 to-accent-500 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br">
                  <span className="text-sm font-bold text-white">W</span>
                </div>
                <div>
                  <p className="text-primary-200 text-sm font-medium">
                    The Wild Oasis
                  </p>
                  <p className="text-primary-500 text-xs">Mountain Retreat</p>
                </div>
              </div>
              <div className="via-primary-700/50 mb-3 h-px bg-gradient-to-r from-transparent to-transparent" />
              <p className="text-primary-500 text-center text-xs">
                © {new Date().getFullYear()} All rights reserved
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
