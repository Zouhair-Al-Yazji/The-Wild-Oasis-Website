import Link from "next/link";
import LinkButton from "./LinkButton";

type CallToActionSectionProps = {
  cabinName: string;
};

export default function CallToActionSection({
  cabinName,
}: CallToActionSectionProps) {
  return (
    <div className="from-accent-900/20 via-accent-800/10 to-accent-900/20 border-accent-700/30 rounded-xs border bg-gradient-to-r p-8 text-center">
      <h3 className="text-primary-50 mb-4 text-2xl font-bold sm:text-3xl">
        Ready for Your Mountain Retreat?
      </h3>
      <p className="text-primary-300 mx-auto mb-6 max-w-2xl text-lg">
        Book your stay at Cabin {cabinName} and experience the magic of the
        Italian Dolomites.
      </p>
      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <LinkButton href="/account/reservations" variant="gradient" size="md">
          Reserve Now
        </LinkButton>
        <LinkButton href="/cabins" size="md" variant="secondary">
          View Availability
        </LinkButton>
      </div>
    </div>
  );
}
