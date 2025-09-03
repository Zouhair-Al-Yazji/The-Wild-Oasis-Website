import type { Cabin } from "@/lib/data-service";
import {
  UserGroupIcon,
  ChatBubbleLeftEllipsisIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import LinkButton from "./LinkButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

export default function ReservationForm({ cabin }: { cabin: Cabin }) {
  const maxCapacity = cabin.maxCapacity;

  return (
    <div>
      <form className="from-primary-900/60 to-primary-800/40 border-primary-700/30 overflow-hidden rounded-xs border bg-gradient-to-br">
        <div className="space-y-6 p-6">
          <div className="space-y-3">
            <label
              htmlFor="numGuests"
              className="text-primary-100 flex items-center gap-2 font-medium"
            >
              <UserGroupIcon className="text-accent-400 h-5 w-5" />
              Number of Guests
            </label>

            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select number of guests..." />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: maxCapacity }, (_, i) => i + 1).map(
                  (x) => (
                    <SelectItem value={x + ""} key={x}>
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
            <Textarea placeholder="Tell us about any special requirements, dietary restrictions, accessibility needs, or preferences for your stay..." />
          </div>
        </div>

        {/* Form Footer */}
        <div className="bg-primary-950/50 border-primary-700/30 border-t p-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-primary-400 text-center text-sm sm:text-left">
              Complete date selection to proceed with booking
            </p>
            <LinkButton variant="gradient-with-hover-effect">
              Reserve now
            </LinkButton>
          </div>
        </div>
      </form>
    </div>
  );
}
