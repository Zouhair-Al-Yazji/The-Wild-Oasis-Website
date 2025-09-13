// import ReservationsList from "@/components/ReservationsList";
// import { auth } from "@/lib/auth";
// import { getBookings } from "@/lib/data-service";
// import Link from "next/link";

// export const metadata = {
//   title: "Reservations",
// };

// export default async function Page() {
//   const session = await auth();

//   if (!session?.user?.guestId) {
//     return (
//       <div>
//         <h2 className="text-accent-400 mb-7 text-2xl font-semibold">
//           Your reservations
//         </h2>
//         <p className="text-lg">Please sign in to view your reservations.</p>
//       </div>
//     );
//   }

//   const bookings = await getBookings(Number(session.user.guestId));

//   return (
//     <div>
//       <h2 className="text-accent-400 mb-7 text-2xl font-semibold">
//         Your reservations
//       </h2>

//       {bookings.length === 0 ? (
//         <p className="text-lg">
//           You have no reservations yet. Check out our{" "}
//           <Link className="text-accent-500 underline" href="/cabins">
//             luxury cabins &rarr;
//           </Link>
//         </p>
//       ) : (
//         <ReservationsList bookings={bookings} />
//       )}
//     </div>
//   );
// }

import ReservationsList from "@/components/ReservationsList";
import { auth } from "@/lib/auth";
import { getBookings } from "@/lib/data-service";
import Link from "next/link";
import { Calendar, ArrowRight, Home } from "lucide-react";
import LinkButton from "@/components/LinkButton";

export const metadata = {
  title: "Reservations",
};

export default async function Page() {
  const session = await auth();

  if (!session?.user?.guestId) {
    return (
      <div className="space-y-6">
        <div className="mb-8 flex items-center gap-3">
          <Calendar className="text-accent-400 h-8 w-8" />
          <h1 className="text-accent-400 text-2xl font-bold md:text-3xl">
            Your Reservations
          </h1>
        </div>

        <div className="from-accent-400/10 to-accent-500/10 border-accent-400/20 rounded-2xl border bg-gradient-to-br p-8 text-center md:p-12">
          <div className="mx-auto max-w-md space-y-4">
            <div className="bg-accent-400/20 mx-auto flex h-16 w-16 items-center justify-center rounded-full">
              <Calendar className="text-accent-400 h-8 w-8" />
            </div>
            <h2 className="text-accent-400 text-xl font-semibold">
              Sign In Required
            </h2>
            <p className="text-text-400 leading-relaxed">
              Please sign in to view and manage your reservations. Your booking
              history and upcoming stays will be displayed here.
            </p>
            <Link
              href="/login"
              className="bg-accent-500 hover:bg-accent-600 text-primary-900 inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold transition-colors"
            >
              Sign In
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const bookings = await getBookings(Number(session.user.guestId));

  return (
    <div className="space-y-6">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <Calendar className="text-accent-400 h-8 w-8" />
          <div>
            <h1 className="text-accent-400 text-2xl font-bold md:text-3xl">
              Your Reservations
            </h1>
            <p className="text-text-400 text-sm">
              {bookings.length}{" "}
              {bookings.length === 1 ? "reservation" : "reservations"} found
            </p>
          </div>
        </div>

        {bookings.length > 0 && (
          <div className="bg-primary-800/50 border-primary-700 rounded-xs border px-4 py-2">
            <span className="text-accent-400 text-sm font-semibold">
              {bookings.length} Total
            </span>
          </div>
        )}
      </div>

      {bookings.length === 0 ? (
        <div className="bg-primary-900/50 border-primary-800 rounded-xs border p-8 text-center md:p-12">
          <div className="mx-auto max-w-md space-y-6">
            <div className="bg-primary-800 mx-auto flex h-20 w-20 items-center justify-center rounded-full">
              <Home className="text-primary-400 h-10 w-10" />
            </div>
            <div className="space-y-2">
              <h2 className="text-text-100 text-xl font-semibold">
                No Reservations Yet
              </h2>
              <p className="text-text-400 leading-relaxed">
                You haven't made any reservations yet. Discover our luxury
                cabins and book your perfect getaway.
              </p>
            </div>

            <LinkButton
              href="/cabins"
              variant="gradient-with-hover-effect"
              icon={<ArrowRight className="h-4 w-4" />}
              iconDirection="right"
            >
              Browse Cabins
            </LinkButton>
          </div>
        </div>
      ) : (
        /* Reservations List */
        <ReservationsList bookings={bookings} />
      )}
    </div>
  );
}
