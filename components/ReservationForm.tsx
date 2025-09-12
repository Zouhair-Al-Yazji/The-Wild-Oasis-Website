"use client";

import { createBookingAction } from "@/lib/actions";
import type { Cabin } from "@/lib/data-service";
import {
  ChatBubbleLeftEllipsisIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { useReservation } from "./ContextReservation";
import SubmitButton from "./SubmitButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { differenceInDays } from "date-fns";

export default function ReservationForm({ cabin }: { cabin: Cabin }) {
  const { range, resetRange } = useReservation();
  const startDate = range.from;
  const endDate = range.to;
  const numNights = differenceInDays(
    endDate ?? new Date(),
    startDate ?? new Date(),
  );
  const { maxCapacity, regularPrice, discount, id } = cabin;
  const cabinPrice = numNights * (regularPrice ?? 0 - (discount ?? 0));
  const bookingData = {
    startDate,
    endDate,
    numNights,
    cabinId: id,
    cabinPrice,
  };

  const createBookingWithData = createBookingAction.bind(null, bookingData);

  return (
    <div>
      <form
        action={async (formData) => {
          await createBookingWithData(formData);
          resetRange();
        }}
        className="from-primary-900/60 to-primary-800/40 border-primary-700/30 overflow-hidden rounded-xs border bg-gradient-to-br"
      >
        <div className="space-y-6 p-6">
          <div className="space-y-3">
            <label
              htmlFor="numGuests"
              className="text-primary-100 flex items-center gap-2 font-medium"
            >
              <UserGroupIcon className="text-accent-400 h-5 w-5" />
              Number of Guests
            </label>

            <Select name="numGuests" required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select number of guests..." />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: maxCapacity ?? 0 }, (_, i) => i + 1).map(
                  (x) => (
                    <SelectItem value={x.toString()} key={x}>
                      {x} {x === 1 ? "guest" : "guests"}
                    </SelectItem>
                  ),
                )}
              </SelectContent>
            </Select>

            <p className="text-primary-400 text-sm">
              Maximum capacity: {maxCapacity}{" "}
              {maxCapacity === 1 ? "guest" : "guests"}
            </p>
          </div>

          <div className="space-y-3">
            <label
              htmlFor="observations"
              className="text-primary-100 flex items-center gap-2 font-medium"
            >
              <ChatBubbleLeftEllipsisIcon className="text-accent-400 h-5 w-5" />
              Special Requests
            </label>
            <Textarea
              name="observations"
              className="min-h-24"
              placeholder="Tell us about any special requirements, dietary restrictions, accessibility needs, or preferences for your stay..."
            />
          </div>
        </div>

        <div className="bg-primary-950/50 border-primary-700/30 border-t p-6">
          <div className="flex flex-col items-center justify-end gap-4 sm:flex-row">
            {!startDate && !endDate ? (
              <p className="text-primary-400 text-center text-sm sm:text-left">
                Complete date selection to proceed with booking
              </p>
            ) : (
              <SubmitButton pendingLabel="reserving">Reserve now</SubmitButton>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
