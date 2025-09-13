"use client";

import type { Booking } from "@/lib/data-service";
import ReservationCard from "./ReservationCard";
import { useOptimistic } from "react";
import { deleteBookingAction } from "@/lib/actions";

export default function ReservationsList({
  bookings,
}: {
  bookings: Booking[];
}) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) =>
      curBookings.filter((booking) => booking.id !== bookingId),
  );

  async function handleDelete(bookingId: number) {
    optimisticDelete(bookingId);
    await deleteBookingAction(bookingId);
  }

  return (
    <ul className="space-y-4">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          key={booking.id}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}
