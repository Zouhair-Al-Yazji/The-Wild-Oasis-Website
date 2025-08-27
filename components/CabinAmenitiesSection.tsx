import {
  UsersIcon,
  MapPinIcon,
  ShieldCheckIcon,
  WifiIcon,
  FireIcon,
  EyeSlashIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import { SnowflakeIcon, UtensilsIcon } from "lucide-react";

type AmenitiesSectionProps = {
  maxCapacity: number;
};

type Amenity = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  color: string;
};

export default function CabinAmenitiesSection({
  maxCapacity,
}: AmenitiesSectionProps) {
  const amenities: Amenity[] = [
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
  ];

  return (
    <div className="from-primary-900/60 to-primary-800/40 border-primary-700/30 rounded-xs border bg-gradient-to-br p-6 sm:p-8">
      <div className="mb-8 flex items-center gap-3">
        <div className="bg-accent-500/20 rounded-xs p-3">
          <SparklesIcon className="text-accent-400 h-6 w-6" />
        </div>
        <h2 className="text-accent-400 text-2xl font-bold sm:text-3xl">
          Amenities & Features
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {amenities.map((feature, index) => (
          <div
            key={index}
            className="group from-primary-950/80 to-primary-900/60 border-primary-700/30 hover:border-accent-400/50 hover:shadow-accent-500/10 rounded-xs border bg-gradient-to-br p-5 transition-all duration-300 hover:scale-105 hover:transform hover:shadow-xl"
          >
            <div className="flex flex-col items-center space-y-3 text-center">
              <div className="from-accent-500/20 to-accent-400/10 rounded-xs bg-gradient-to-br p-4 transition-transform duration-300 group-hover:scale-110">
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
  );
}
