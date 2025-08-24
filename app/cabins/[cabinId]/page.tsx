import Link from "next/link";
import type { Metadata } from "next";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import Image from "next/image";
import {
  EyeSlashIcon,
  MapPinIcon,
  UsersIcon,
  WifiIcon,
  FireIcon,
  HomeIcon,
  SparklesIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";
import { ArrowLeftIcon, CheckIcon } from "@heroicons/react/24/outline";
import { SnowflakeIcon, UtensilsIcon } from "lucide-react";

type Props = {
  params: { cabinId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await getCabin(params.cabinId);
  return {
    title: `Cabin ${name}`,
  };
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  return cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
}

export default async function Page({ params }: Props) {
  const cabin = await getCabin(params.cabinId);
  const { name, maxCapacity, regularPrice, discount, image, description } =
    cabin;
  const discountedPrice = regularPrice - discount;
  const discountPercentage =
    discount > 0 ? Math.round((discount / regularPrice) * 100) : 0;

  return (
    <div className="bg-primary-950 min-h-screen">
      <div className="bg-primary-950/95 border-primary-800/30 sticky top-0 z-50 border-b backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16">
            <Link
              href="/cabins"
              className="group text-primary-300 hover:text-accent-400 flex items-center gap-3 transition-all duration-200"
            >
              <div className="bg-primary-800/50 group-hover:bg-accent-500/20 rounded-full p-2 transition-colors">
                <ArrowLeftIcon className="h-4 w-4 transition-transform" />
              </div>
              <span className="hidden font-medium sm:inline">
                Back to Cabins
              </span>
              <span className="font-medium sm:hidden">Back</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh]">
          <Image
            src={image}
            fill
            alt={`Cabin ${name}`}
            className="object-cover"
            priority
            quality={95}
            sizes="100vw"
          />

          <div className="from-primary-950/20 to-primary-950/90 absolute inset-0 bg-gradient-to-b via-transparent" />
        </div>

        <div className="relative z-10 -mt-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="from-primary-900/95 via-primary-900/90 to-primary-800/95 border-primary-700/50 rounded-3xl border bg-gradient-to-br shadow-2xl backdrop-blur-xl">
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
                  <div className="space-y-4 lg:col-span-2">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-4">
                        <h1 className="from-accent-400 via-accent-300 to-accent-500 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl xl:text-6xl">
                          Cabin {name}
                        </h1>
                        {discount > 0 && (
                          <div className="from-accent-500 to-accent-400 text-primary-900 rounded-full bg-gradient-to-r px-4 py-2 text-sm font-bold shadow-lg">
                            -{discountPercentage}% OFF
                          </div>
                        )}
                      </div>

                      <div className="text-primary-200 flex flex-wrap items-center gap-6">
                        <div className="flex items-center gap-2">
                          <MapPinIcon className="text-accent-400 h-5 w-5" />
                          <span className="font-medium">
                            Italian Dolomites, Italy
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <UsersIcon className="text-accent-400 h-5 w-5" />
                          <span>Up to {maxCapacity} guests</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 pt-2">
                        {[
                          { icon: ShieldCheckIcon, label: "Private" },
                          { icon: WifiIcon, label: "WiFi" },
                          { icon: FireIcon, label: "Fireplace" },
                          { icon: EyeSlashIcon, label: "Hot Tub" },
                        ].map((feature, index) => (
                          <div
                            key={index}
                            className="bg-primary-800/50 text-primary-200 flex items-center gap-2 rounded-full px-3 py-1.5 text-sm"
                          >
                            <feature.icon className="text-accent-400 h-3 w-3" />
                            <span>{feature.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-1">
                    <div className="from-primary-950/80 to-primary-800/80 border-primary-700/30 flex h-full flex-col justify-between rounded-2xl border bg-gradient-to-br p-6">
                      <div className="space-y-4">
                        <div className="text-center">
                          {discount > 0 ? (
                            <div className="space-y-2">
                              <div className="flex items-baseline justify-center gap-2">
                                <span className="text-primary-50 text-3xl font-bold sm:text-4xl">
                                  ${discountedPrice}
                                </span>
                                <span className="text-primary-400 text-lg line-through">
                                  ${regularPrice}
                                </span>
                              </div>
                              <p className="text-primary-300 text-sm">
                                per night
                              </p>
                              <div className="text-accent-400 text-sm font-semibold">
                                Save ${discount} per night!
                              </div>
                            </div>
                          ) : (
                            <div>
                              <div className="text-primary-50 text-3xl font-bold sm:text-4xl">
                                ${regularPrice}
                              </div>
                              <p className="text-primary-300 text-sm">
                                per night
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      <Link
                        href="/account/reservations"
                        className="from-accent-600 via-accent-500 to-accent-600 hover:from-accent-500 hover:via-accent-400 hover:to-accent-500 text-primary-900 hover:shadow-accent-500/25 group mt-4 w-full transform rounded-xs bg-gradient-to-r py-4 font-bold transition-all duration-300 hover:shadow-lg active:scale-95"
                      >
                        <span className="flex items-center justify-center gap-2">
                          Reserve Now
                          <CheckIcon className="h-4 w-4 transition-transform group-hover:scale-110" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="space-y-12">
          <div className="from-primary-900/60 to-primary-800/40 border-primary-700/30 rounded-2xl border bg-gradient-to-br p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="bg-accent-500/20 rounded-xl p-3">
                <HomeIcon className="text-accent-400 h-6 w-6" />
              </div>
              <h2 className="text-accent-400 text-2xl font-bold sm:text-3xl">
                About This Cabin
              </h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-primary-200 text-lg leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          <div className="from-primary-900/60 to-primary-800/40 border-primary-700/30 rounded-2xl border bg-gradient-to-br p-6 sm:p-8">
            <div className="mb-8 flex items-center gap-3">
              <div className="bg-accent-500/20 rounded-xl p-3">
                <SparklesIcon className="text-accent-400 h-6 w-6" />
              </div>
              <h2 className="text-accent-400 text-2xl font-bold sm:text-3xl">
                Amenities & Features
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[
                {
                  icon: UsersIcon,
                  title: "Capacity",
                  desc: `Up to ${maxCapacity} guests`,
                  color: "text-blue-400",
                },
                {
                  icon: MapPinIcon,
                  title: "Location",
                  desc: "Heart of Dolomites",
                  color: "text-green-400",
                },
                {
                  icon: ShieldCheckIcon,
                  title: "Privacy",
                  desc: "100% guaranteed",
                  color: "text-emerald-400",
                },
                {
                  icon: WifiIcon,
                  title: "Wi-Fi",
                  desc: "High-speed internet",
                  color: "text-purple-400",
                },
                {
                  icon: FireIcon,
                  title: "Fireplace",
                  desc: "Cozy wood burning",
                  color: "text-orange-400",
                },
                {
                  icon: EyeSlashIcon,
                  title: "Hot Tub",
                  desc: "Private outdoor spa",
                  color: "text-cyan-400",
                },
                {
                  icon: SnowflakeIcon,
                  title: "Air Conditioning",
                  desc: "Climate control",
                  color: "text-blue-300",
                },
                {
                  icon: UtensilsIcon,
                  title: "Kitchen",
                  desc: "Fully equipped",
                  color: "text-yellow-400",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group from-primary-950/80 to-primary-900/60 border-primary-700/30 hover:border-accent-400/50 hover:shadow-accent-500/10 rounded-2xl border bg-gradient-to-br p-5 transition-all duration-300 hover:scale-105 hover:transform hover:shadow-xl"
                >
                  <div className="flex flex-col items-center space-y-3 text-center">
                    <div className="from-accent-500/20 to-accent-400/10 rounded-xl bg-gradient-to-br p-4 transition-transform duration-300 group-hover:scale-110">
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <div>
                      <h3 className="group-hover:text-accent-300 text-primary-50 mb-1 font-bold transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-primary-300 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="from-accent-900/20 via-accent-800/10 to-accent-900/20 border-accent-700/30 rounded-2xl border bg-gradient-to-r p-8 text-center">
            <h3 className="text-primary-50 mb-4 text-2xl font-bold sm:text-3xl">
              Ready for Your Mountain Retreat?
            </h3>
            <p className="text-primary-300 mx-auto mb-6 max-w-2xl text-lg">
              Book your stay at Cabin {name} and experience the magic of the
              Italian Dolomites.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/account/reservations"
                className="from-accent-600 to-accent-500 hover:from-accent-500 hover:to-accent-400 text-primary-900 rounded-xs bg-gradient-to-r px-8 py-3 font-bold transition-all duration-300"
              >
                Reserve Now
              </Link>
              <Link
                href="/cabins"
                className="border-accent-500/50 text-accent-400 hover:bg-accent-500/10 rounded-xs border px-8 py-3 font-semibold transition-all duration-300"
              >
                View Availability
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
