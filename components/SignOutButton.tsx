"use client";

import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ redirectTo: "/" })}
      title="Sign out"
      className="hover:bg-primary-900 hover:text-primary-100 text-primary-200 flex w-full cursor-pointer items-center gap-4 px-3 py-1.5 font-semibold transition-colors sm:px-5 sm:py-3"
    >
      <ArrowRightStartOnRectangleIcon className="text-primary-600 h-5 w-5" />
      <span className="hidden sm:inline">Sign out</span>
    </button>
  );
}
