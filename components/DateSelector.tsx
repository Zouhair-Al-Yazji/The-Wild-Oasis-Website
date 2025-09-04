"use client";
import { Calendar } from "@/components/ui/calendar";
import type { Cabin, Settings } from "@/lib/data-service";
import { CalendarDaysIcon, ClockIcon } from "@heroicons/react/24/outline";
import { type DateRange } from "react-day-picker";
import { useReservation } from "./ContextReservation";
import LinkButton from "./LinkButton";
import { Button } from "./ui/button";

type DateSelectorProps = {
  cabin: Cabin;
  settings: Settings;
  bookedDates: Date[];
};

export default function DateSelector({
  cabin,
  settings,
  bookedDates,
}: DateSelectorProps) {
  const { range, setRange, resetRange } = useReservation();

  const formatDateRange = (range: DateRange | undefined) => {
    if (!range?.from) return "Select dates";
    if (!range.to) return range.from.toLocaleDateString();
    return `${range.from.toLocaleDateString()} - ${range.to.toLocaleDateString()}`;
  };

  const calculateNights = (range: DateRange | undefined) => {
    if (!range?.from || !range?.to) return 0;
    const diffTime = Math.abs(range.to.getTime() - range.from.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className="space-y-6">
      <div className="from-primary-900/60 to-primary-800/40 border-primary-700/30 rounded-xs border bg-gradient-to-br p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="bg-accent-500/20 rounded-xs p-2">
              <CalendarDaysIcon className="text-accent-400 h-5 w-5" />
            </div>
            <h3 className="text-primary-50 text-xl font-semibold">
              Select Dates
            </h3>
          </div>

          {range.from && (
            <Button
              size="sm"
              variant={"destructive"}
              className="cursor-pointer"
              onClick={resetRange}
            >
              Clear dates
            </Button>
          )}
        </div>

        {/* Selected Date Display */}
        <div className="bg-primary-950/50 border-primary-700/30 rounded-xs border p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-primary-400 mb-1 text-sm">Selected Period</p>
              <p className="text-primary-100 font-medium">
                {formatDateRange(range)}
              </p>
            </div>
            {calculateNights(range) > 0 && (
              <div className="text-right">
                <p className="text-primary-400 mb-1 text-sm">Duration</p>
                <div className="flex items-center gap-1">
                  <ClockIcon className="text-accent-400 h-4 w-4" />
                  <p className="text-primary-100 font-medium">
                    {calculateNights(range)}{" "}
                    {calculateNights(range) === 1 ? "night" : "nights"}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="from-primary-900/60 to-primary-800/40 border-primary-700/30 rounded-xs border bg-gradient-to-br p-6">
        <Calendar
          mode="range"
          defaultMonth={range?.from}
          min={minBookingLength ?? 0 + 1}
          max={maxBookingLength}
          selected={range}
          onSelect={setRange}
          numberOfMonths={2}
          disabled={bookedDates}
          className="mx-auto"
          required
        />

        <div className="bg-primary-950/50 border-primary-700/30 mt-6 rounded-xs border p-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="bg-accent-500 h-3 w-3 rounded"></div>
              <span className="text-primary-300">Selected</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-primary-700 h-3 w-3 rounded"></div>
              <span className="text-primary-300">Today</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded bg-red-500/70"></div>
              <span className="text-primary-300">Unavailable</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Summary (if dates selected) */}
      {calculateNights(range) > 0 && (
        <div className="from-accent-900/20 to-accent-800/10 border-accent-700/30 rounded-xs border bg-gradient-to-br p-6">
          <h4 className="text-primary-50 mb-4 text-lg font-semibold">
            Pricing Summary
          </h4>
          <div className="space-y-3">
            <div className="text-primary-200 flex justify-between">
              <span>
                ${cabin.regularPrice} × {calculateNights(range)} nights
              </span>
              <span>${cabin.regularPrice * calculateNights(range)}</span>
            </div>
            {cabin.discount > 0 && (
              <div className="flex justify-between text-green-400">
                <span>Discount</span>
                <span>-${cabin.discount * calculateNights(range)}</span>
              </div>
            )}
            <div className="border-primary-700/30 border-t pt-3">
              <div className="text-primary-50 flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>
                  $
                  {(cabin.regularPrice - cabin.discount) *
                    calculateNights(range)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
