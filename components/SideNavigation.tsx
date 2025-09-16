"use client";

import SignOutButton from "@/components/SignOutButton";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="text-primary-600 h-5 w-5" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="text-primary-600 h-5 w-5" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="text-primary-600 h-5 w-5" />,
  },
];

export default function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className="border-primary-900 fixed bottom-0 left-0 h-[calc(100vh-4rem)] w-64 border-r md:h-[calc(100vh-5rem)] lg:w-72 xl:w-80">
      <ul className="flex h-full flex-col gap-2 p-4 text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`hover:bg-primary-900 hover:text-primary-100 text-primary-200 flex items-center gap-4 rounded-xs px-5 py-3 font-semibold transition-colors ${
                pathname === link.href ? "bg-primary-900" : ""
              }`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}
