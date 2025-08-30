import Image from "next/image";
import { UsersIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { ArrowRight } from "lucide-react";
import type { Cabin } from "@/lib/data-service";
import LinkButton from "./LinkButton";

export default function CabinCard({ cabin }: { cabin: Cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;
  const discountedPrice = regularPrice - discount;
  const discountPercentage =
    discount > 0 ? Math.round((discount / regularPrice) * 100) : 0;

  return (
    <div className="group border-primary-800/50 from-primary-950 via-primary-900 to-primary-950 hover:border-accent-500/30 hover:shadow-accent-500/10 relative overflow-hidden rounded-xs border bg-gradient-to-br shadow-lg transition-all duration-300 hover:shadow-2xl">
      <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10]">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          priority
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        <div className="from-primary-900/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />

        {discount > 0 && (
          <div className="bg-accent-500 text-primary-900 absolute top-3 right-3 rounded-xs px-3 py-1.5 text-xs font-bold shadow-lg sm:top-4 sm:right-4 sm:px-4 sm:py-2 sm:text-sm">
            -{discountPercentage}%
          </div>
        )}

        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
          <div className="bg-primary-900/90 text-primary-100 border-primary-700/50 flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs backdrop-blur-sm sm:text-sm">
            <UsersIcon className="text-accent-400 h-3 w-3 sm:h-4 sm:w-4" />
            <span className="font-medium">{maxCapacity} guests</span>
          </div>
        </div>
      </div>

      <div className="space-y-4 p-4 sm:p-6">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-accent-400 group-hover:text-accent-300 text-xl font-bold transition-colors duration-300 sm:text-2xl">
              Cabin {name}
            </h3>
          </div>

          <div className="text-primary-300 flex items-center gap-2 text-sm">
            <MapPinIcon className="text-accent-500 h-4 w-4" />
            <span>Italian Dolomites</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-baseline justify-between">
            <div className="space-y-1">
              {discount > 0 ? (
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-primary-50 text-2xl font-semibold sm:text-3xl">
                    ${discountedPrice}
                  </span>
                  <span className="text-primary-400 text-sm font-medium line-through sm:text-base">
                    ${regularPrice}
                  </span>
                  <span className="text-accent-400 bg-accent-500/10 rounded-full px-2 py-0.5 text-xs font-semibold sm:text-sm">
                    Save ${discount}{" "}
                    <span className="text-primary-200 text-sm">
                      / per night
                    </span>
                  </span>
                </div>
              ) : (
                <span className="text-primary-50 text-2xl font-semibold sm:text-3xl">
                  ${regularPrice}{" "}
                  <span className="text-primary-300 text-sm">/ per night</span>
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="pt-2">
          <LinkButton
            href={`/cabins/${id}`}
            variant="gradient-with-hover-effect"
            size="md"
            iconDirection="right"
            icon={
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 sm:h-5 sm:w-5" />
            }
            fullWidth
          >
            View Details & Reserve
          </LinkButton>
        </div>
      </div>

      {/* Card border glow effect */}
      <div className="from-accent-500/0 via-accent-500/5 to-accent-500/0 pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
    </div>
  );
}
