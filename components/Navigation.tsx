"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Navigation() {
  const { data: session, status } = useSession();

  return (
    <nav className="z-10 text-lg md:text-xl">
      <ul className="flex items-center gap-8 md:gap-16">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {status === "loading" ? (
            <span className="hover:text-accent-400 transition-colors">
              Guest area
            </span>
          ) : session?.user ? (
            <Link
              href="/account"
              className="hover:text-accent-400 flex items-center gap-3 transition-colors"
            >
              <Image
                src={session?.user.image ?? ""}
                width={32}
                height={32}
                className="rounded-full"
                alt={`${session?.user.name} Image`}
              />
              <span>{session?.user.name}</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
