import SubmitButton from "@/components/SubmitButton";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { updateBookingAction } from "@/lib/actions";
import { getBooking, getCabin } from "@/lib/data-service";

type Props = {
  params: Promise<{ bookingId: string }>;
};

export default async function Page({ params }: Props) {
  const { bookingId } = await params;
  const { observations, cabinId } = await getBooking(bookingId);
  const { maxCapacity } = await getCabin(cabinId ?? "");

  return (
    <div>
      <h2 className="text-accent-400 mb-7 text-2xl font-semibold">
        Edit Reservation #{bookingId}
      </h2>

      <form
        action={updateBookingAction}
        className="from-primary-900/60 to-primary-800/40 border-primary-700/30 space-y-6 overflow-hidden rounded-xs border bg-gradient-to-br p-6"
      >
        <Input type="hidden" name="bookingId" value={bookingId} />
        <div className="space-y-3">
          <label htmlFor="numGuests">How many guests?</label>
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
        </div>

        <div className="space-y-3">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <Textarea
            name="observations"
            className="min-h-24"
            defaultValue={observations}
            placeholder="Tell us about any special requirements, dietary restrictions, accessibility needs, or preferences for your stay..."
          />
        </div>

        <div className="flex items-center justify-end gap-6">
          <SubmitButton pendingLabel="Updating">
            Update reservation
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}
