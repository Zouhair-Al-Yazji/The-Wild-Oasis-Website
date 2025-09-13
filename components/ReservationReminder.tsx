"use client";

import { XMarkIcon, CalendarDaysIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import { useReservation } from "./ContextReservation";

export default function ReservationReminder() {
  const { range, resetRange } = useReservation();

  if (!range.from || !range.to) return null;

  return (
    <div className="fixed bottom-4 z-50 w-[calc(100%-2rem)] md:left-1/2 md:w-fit md:-translate-x-1/2 md:transform lg:bottom-6">
      <div className="border-accent-400/20 from-accent-500 via-accent-400 to-accent-500 shadow-accent-500/25 relative overflow-hidden rounded-lg border bg-gradient-to-r shadow-2xl">
        <div className="relative flex items-center justify-between gap-4 px-4 py-5 lg:gap-6 lg:px-8 lg:py-6">
          <div className="flex items-center justify-center rounded-full bg-white/20 p-2 backdrop-blur-sm lg:p-2.5">
            <CalendarDaysIcon className="text-primary-900 h-5 w-5 lg:h-6 lg:w-6" />
          </div>

          <div className="flex flex-1 items-center justify-center">
            <div>
              <div className="flex items-center gap-2">
                <span className="animate-bounce text-xl lg:text-2xl">👋</span>
                <p className="text-primary-900 mb-1 text-base font-bold lg:text-lg">
                  Don&apos;t forget to reserve!
                </p>
              </div>
              <div className="text-primary-800 flex flex-wrap items-center gap-1 text-sm font-semibold lg:gap-2">
                <span className="rounded-full bg-white/30 px-2 py-1 text-xs whitespace-nowrap backdrop-blur-sm lg:px-3 lg:text-sm">
                  {format(new Date(range.from), "MMM dd, yyyy")}
                </span>
                <span className="text-primary-700 hidden lg:block">→</span>
                <span className="text-primary-700 block lg:hidden">-</span>
                <span className="rounded-full bg-white/30 px-2 py-1 text-xs whitespace-nowrap backdrop-blur-sm lg:px-3 lg:text-sm">
                  {format(new Date(range.to), "MMM dd, yyyy")}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={resetRange}
            className="group flex cursor-pointer items-center justify-center rounded-full bg-white/20 p-2 backdrop-blur-sm transition-colors duration-200 hover:rotate-90 hover:bg-white/30 focus:ring-2 focus:ring-white/50 focus:outline-none lg:p-2.5"
            aria-label="Clear selected dates"
          >
            <XMarkIcon className="text-primary-900 h-5 w-5 lg:h-6 lg:w-6" />
          </button>
        </div>

        <div className="absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
      </div>

      <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform">
        <div className="bg-primary-900 text-primary-100 rounded-full px-3 py-1 text-xs font-medium shadow-lg backdrop-blur-sm">
          Your selected dates
        </div>
      </div>
    </div>
  );
}
