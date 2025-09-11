import ReservationsList from "@/components/ReservationsList";
import { auth } from "@/lib/auth";
import { getBookings } from "@/lib/data-service";
import Link from "next/link";

export const metadata = {
  title: "Reservations",
};

export default async function Page() {
  const session = await auth();

  if (!session?.user?.guestId) {
    return (
      <div>
        <h2 className="text-accent-400 mb-7 text-2xl font-semibold">
          Your reservations
        </h2>
        <p className="text-lg">Please sign in to view your reservations.</p>
      </div>
    );
  }

  const bookings = await getBookings(Number(session.user.guestId));

  return (
    <div>
      <h2 className="text-accent-400 mb-7 text-2xl font-semibold">
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no reservations yet. Check out our{" "}
          <Link className="text-accent-500 underline" href="/cabins">
            luxury cabins &rarr;
          </Link>
        </p>
      ) : (
        <ReservationsList bookings={bookings} />
      )}
    </div>
  );
}
