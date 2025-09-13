import type { Metadata } from "next";
import { Suspense } from "react";
import Spinner from "@/components/Spinner";
import CabinsList from "@/components/CabinsList";
import ReservationReminder from "@/components/ReservationReminder";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Cabins",
};

type Props = {
  searchParams: Promise<{
    capacity?: "small" | "medium" | "large" | "all";
  }>;
};

export default async function Page({ searchParams }: Props) {
  const { capacity } = await searchParams;
  const filter = capacity ?? "all";

  return (
    <div className="space-y-8 sm:space-y-12">
      <div className="space-y-6 text-center">
        <div className="space-y-4">
          <h1 className="from-accent-400 via-accent-300 to-accent-500 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl xl:text-6xl">
            Our Luxury Cabins
          </h1>
          <div className="from-accent-500 to-accent-400 mx-auto h-1 w-24 rounded-full bg-gradient-to-r sm:w-32"></div>
        </div>

        <p className="text-primary-200 mx-auto max-w-4xl text-base leading-relaxed sm:text-lg lg:text-xl">
          Cozy yet luxurious cabins, located right in the heart of the Italian
          Dolomites. Imagine waking up to beautiful mountain views, spending
          your days exploring the dark forests around, or just relaxing in your
          private hot tub under the stars. Enjoy nature&apos;s beauty in your
          own little home away from home. The perfect spot for a peaceful, calm
          vacation.
        </p>

        <div className="text-primary-300 flex items-center justify-center gap-3 pt-4 text-sm sm:gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-accent-500 h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2"></div>
            <span className="text-xs sm:text-base">Mountain Views</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-accent-500 h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2"></div>
            <span className="text-xs sm:text-base">Private Hot Tubs</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-accent-500 h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2"></div>
            <span className="text-xs sm:text-base">Forest Access</span>
          </div>
        </div>
      </div>

      <Suspense
        fallback={
          <div className="py-16">
            <Spinner />
            <p className="text-primary-300 mt-6 text-center">
              Loading our beautiful cabins...
            </p>
          </div>
        }
        key={filter}
      >
        <CabinsList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
