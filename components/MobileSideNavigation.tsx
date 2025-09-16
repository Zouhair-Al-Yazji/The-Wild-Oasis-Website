"use client";

import {
  Dock,
  DockIcon,
  DockItem,
  DockLabel,
} from "@/components/motion-primitives/dock";
import Link from "next/link";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    title: "Home",
    icon: <HomeIcon className="text-primary-100 h-full w-full" />,
    href: "/account",
  },
  {
    title: "Reservations",
    icon: <CalendarDaysIcon className="text-primary-100 h-full w-full" />,
    href: "/account/reservations",
  },
  {
    title: "Guest profile",
    icon: <UserIcon className="text-primary-100 h-full w-full" />,
    href: "/account/profile",
  },
];

export default function MobileSideNavigation() {
  const pathname = usePathname();

  return (
    <div>
      <Dock className="from-primary-700/95 to-primary-850 items-end bg-gradient-to-br pb-3 shadow-md backdrop-blur-md">
        {navLinks.map((navLink, idx) => (
          <Link href={navLink.href} key={idx}>
            <DockItem
              className={`aspect-square rounded-full bg-gradient-to-br ${navLink.href === pathname ? "from-accent-600/95 to-accent-900" : "from-primary-600/95 to-primary-850"}`}
            >
              <DockLabel>{navLink.title}</DockLabel>
              <DockIcon>{navLink.icon}</DockIcon>
            </DockItem>
          </Link>
        ))}
      </Dock>
    </div>
  );
}
