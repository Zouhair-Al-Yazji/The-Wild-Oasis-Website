"use client";

import { useState, useEffect, useCallback, memo } from "react";
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
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Image from "next/image";

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/cabins", label: "Cabins", icon: Building2 },
  { href: "/about", label: "About", icon: Info },
  { href: "/account", label: "Guest Area", icon: User },
] as const;

const NavItem = memo(
  ({
    item,
    user,
    onClose,
  }: {
    item: (typeof NAV_ITEMS)[number];
    user?: { name?: string | null; image?: string | null };
    onClose: () => void;
  }) => {
    const Icon = item.icon;
    const isAccount = item.href === "/account";
    const displayName =
      user && isAccount ? (user.name ?? item.label) : item.label;

    return (
      <SheetClose asChild>
        <Link
          href={item.href}
          onClick={onClose}
          className="group hover:bg-primary-800/50 flex items-center gap-4 rounded-lg px-4 py-3 transition-colors duration-200"
        >
          <div className="bg-primary-800/40 group-hover:bg-accent-400/20 flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-200">
            <Icon className="text-primary-300 group-hover:text-accent-400 h-5 w-5 transition-colors duration-200" />
          </div>

          {isAccount && user?.image && (
            <Image
              src={user.image}
              alt="User avatar"
              width={28}
              height={28}
              className="rounded-full"
            />
          )}

          <span className="text-primary-100 group-hover:text-accent-400 flex-1 text-base font-medium transition-colors duration-200">
            {displayName}
          </span>

          <ChevronRight className="text-primary-500 group-hover:text-accent-400 h-4 w-4 opacity-0 transition-all duration-200 group-hover:opacity-100" />
        </Link>
      </SheetClose>
    );
  },
);

NavItem.displayName = "NavItem";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  const handleClose = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="bg-primary-950/90 hover:bg-primary-900 border-primary-800/50 text-primary-100 hover:text-accent-400 cursor-pointer rounded-lg border backdrop-blur-sm transition-colors duration-200 hover:scale-105 active:scale-95"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="border-primary-800/50 bg-primary-950/95 w-80 border-l p-0 backdrop-blur-xl"
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="border-primary-800/30 bg-primary-950/80 flex items-center justify-between border-b p-6">
            <SheetTitle>
              <div>
                <h3 className="from-accent-400 to-accent-300 bg-gradient-to-r bg-clip-text text-xl font-bold text-transparent">
                  The Wild Oasis
                </h3>
                <p className="text-primary-400 mt-1 text-sm">
                  Luxury mountain retreat
                </p>
              </div>
            </SheetTitle>
          </div>

          {/* Navigation */}
          <nav className="flex-1 pt-6">
            <ul className="space-y-1 px-4">
              {NAV_ITEMS.map((item) => (
                <NavItem
                  key={item.href}
                  item={item}
                  user={session?.user}
                  onClose={handleClose}
                />
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="border-primary-800/30 bg-primary-950/80 border-t p-6">
            <p className="text-primary-500 text-center text-xs">
              © {new Date().getFullYear()} The Wild Oasis. All rights reserved.
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
