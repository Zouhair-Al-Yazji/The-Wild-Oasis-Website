import { getCabins } from "@/app/_lib/data-service";
import CabinCard from "@/app/_components/CabinCard";

export default async function CabinsList() {
  const cabins = await getCabins();

  if (!cabins.length) {
    return (
      <div className="py-16 text-center sm:py-24">
        <div className="mx-auto max-w-md space-y-4">
          <div className="bg-primary-800 mx-auto flex h-16 w-16 items-center justify-center rounded-full">
            <svg
              className="text-primary-400 h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 8h5a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="text-primary-200 text-xl font-semibold">
            No Cabins Available
          </h3>
          <p className="text-primary-300">
            We're currently updating our cabin listings. Please check back soon
            for available accommodations.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-primary-300 text-sm sm:text-base">
          Showing
          <span className="text-accent-400 font-semibold">
            {" "}
            {cabins.length}{" "}
          </span>
          luxurious cabins
        </p>

        <div className="text-primary-400 flex items-center gap-2 text-sm">
          <span>Sorted by popularity</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 2xl:gap-12">
        {cabins.map((cabin) => (
          <CabinCard cabin={cabin} key={cabin.id} />
        ))}
      </div>
    </div>
  );
}
