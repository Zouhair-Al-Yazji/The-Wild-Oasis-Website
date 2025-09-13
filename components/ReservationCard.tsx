import type { Booking } from "@/lib/data-service";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import { Calendar, Clock, DollarSign, Edit3, Users } from "lucide-react";
import Image from "next/image";
import DeleteReservation from "./DeleteReservation";
import LinkButton from "./LinkButton";

export const formatDistanceFromNow = (dateStr: string) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

export default function ReservationCard({
  booking,
  onDelete,
}: {
  booking: Booking;
  onDelete: (bookingId: number) => void;
}) {
  const {
    id,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    created_at,
    cabins,
  } = booking;

  const cabinName = cabins?.name;
  const cabinImage = cabins?.image;
  const isPastBooking = isPast(new Date(startDate));

  return (
    <div className="group bg-primary-900/50 border-primary-800 hover:border-accent-400/30 hover:shadow-accent-400/10 overflow-hidden rounded-xs border backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col lg:flex-row">
        <div className="relative h-48 w-full flex-shrink-0 lg:h-auto lg:w-80">
          <Image
            src={cabinImage ?? ""}
            alt={`Cabin ${cabinName}`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

          <div className="absolute top-4 right-4">
            {isPastBooking ? (
              <span className="rounded-xs border border-amber-500/30 bg-amber-600/90 px-3 py-1 text-xs font-semibold tracking-wide text-amber-100 uppercase backdrop-blur-sm">
                Completed
              </span>
            ) : (
              <span className="rounded-xs border border-emerald-500/30 bg-emerald-600/90 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-100 uppercase backdrop-blur-sm">
                Upcoming
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6 lg:p-8">
          <div className="mb-4">
            <h3 className="text-accent-400 mb-2 text-xl font-bold lg:text-2xl">
              {numNights} night{numNights !== 1 ? "s" : ""} in Cabin {cabinName}
            </h3>
            <div className="text-text-400 flex flex-wrap items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="text-sm lg:text-base">
                {format(new Date(startDate), "MMM dd")} -{" "}
                {format(new Date(endDate), "MMM dd, yyyy")}
              </span>
              <span className="text-text-600">•</span>
              <span className="text-accent-400 text-sm font-medium">
                {isToday(new Date(startDate))
                  ? "Starting today"
                  : isPastBooking
                    ? `Completed ${formatDistanceFromNow(endDate)}`
                    : `Starts ${formatDistanceFromNow(startDate)}`}
              </span>
            </div>
          </div>

          <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-3">
            <div className="bg-primary-800/30 border-primary-700/50 rounded-xs border p-3">
              <div className="mb-1 flex items-center gap-2">
                <DollarSign className="text-accent-400 h-4 w-4" />
                <span className="text-text-400 text-sm tracking-wide uppercase">
                  Total
                </span>
              </div>
              <span className="text-accent-400 text-lg font-bold">
                ${totalPrice}
              </span>
            </div>

            <div className="bg-primary-800/30 border-primary-700/50 rounded-xs border p-3">
              <div className="mb-1 flex items-center gap-2">
                <Users className="text-primary-300 h-4 w-4" />
                <span className="text-text-400 text-xs tracking-wide uppercase">
                  Guests
                </span>
              </div>
              <span className="text-text-100 text-lg font-bold">
                {numGuests} {numGuests === 1 ? "guest" : "guests"}
              </span>
            </div>

            <div className="bg-primary-800/30 border-primary-700/50 col-span-2 rounded-xs border p-3 lg:col-span-1">
              <div className="mb-1 flex items-center gap-2">
                <Clock className="text-primary-300 h-4 w-4" />
                <span className="text-text-400 text-xs tracking-wide uppercase">
                  Booked
                </span>
              </div>
              <span className="text-text-100 text-sm font-medium">
                {format(new Date(created_at), "MMM dd, yyyy")}
              </span>
            </div>
          </div>

          {!isPastBooking && (
            <div className="mt-auto flex gap-3">
              <LinkButton
                href={`/account/reservations/edit/${id}`}
                variant="gradient-with-hover-effect"
                icon={<Edit3 className="h-4 w-4" />}
                className="flex-1"
              >
                Edit Booking
              </LinkButton>

              <div className="overflow-hidden rounded-xs border border-red-600/20 bg-red-600/10">
                <DeleteReservation bookingId={+id} onDelete={onDelete} />
              </div>
            </div>
          )}

          {isPastBooking && (
            <div className="border-primary-800 mt-auto border-t pt-4">
              <p className="text-text-400 text-center text-sm">
                Thank you for staying with us! We hope you had a wonderful
                experience.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
