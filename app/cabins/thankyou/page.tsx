import LinkButton from "@/components/LinkButton";
import { ArrowRight, Calendar, CheckCircle, Home } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="w-full max-w-2xl space-y-8 text-center">
        <div className="relative">
          <div className="mx-auto flex h-24 w-24 animate-pulse items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/25">
            <CheckCircle className="h-12 w-12 text-white" />
          </div>
          <div className="absolute inset-0 mx-auto h-24 w-24 animate-ping rounded-full border-4 border-emerald-400/30"></div>
          <div className="absolute inset-0 mx-auto -mt-4 h-32 w-32 animate-pulse rounded-full border-2 border-emerald-300/20"></div>
        </div>

        <div className="space-y-4">
          <h1 className="text-accent-400 text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
            Reservation Confirmed!
          </h1>
          <p className="text-text-400 mx-auto max-w-lg text-lg leading-relaxed md:text-xl">
            Thank you for choosing our luxury cabins. Your booking has been
            successfully confirmed and you&apos;re all set for an amazing
            getaway!
          </p>
        </div>

        <div className="flex-co mt-8 flex flex-wrap items-center justify-center gap-4 sm:flex-row">
          <LinkButton
            href="/account/reservations"
            icon={<Calendar className="h-6 w-6" />}
            variant="gradient-with-hover-effect"
            className="align-middle"
          >
            Manage Reservations
          </LinkButton>

          <Link
            href="/cabins"
            className="bg-primary-800/50 hover:bg-primary-700/50 border-primary-700 hover:border-accent-400/30 text-text-100 flex items-center justify-center gap-3 rounded-xs border px-8 py-2.5"
          >
            <Home className="text-accent-400 h-6 w-6" />
            <span className="text-lg font-semibold">Browse More Cabins</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
