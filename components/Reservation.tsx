import {
  getBookedDatesByCabinId,
  getSettings,
  type Cabin,
} from "@/lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import { auth } from "@/lib/auth";
import LoginMessage from "./LoginMessage";

export default async function Reservation({ cabin }: { cabin: Cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(String(cabin.id)),
  ]);

  const session = await auth();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-accent-400 mb-4 text-3xl font-bold sm:text-4xl">
          Reserve Your Stay
        </h2>
        <p className="text-primary-300 mx-auto max-w-2xl text-lg">
          Select your preferred dates and complete your reservation for an
          unforgettable mountain retreat.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        <DateSelector
          cabin={cabin}
          settings={settings}
          bookedDates={bookedDates}
        />
        {session?.user ? <ReservationForm cabin={cabin} /> : <LoginMessage />}
      </div>
    </div>
  );
}
