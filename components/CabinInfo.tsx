import {
  MapPinIcon,
  UsersIcon,
  WifiIcon,
  FireIcon,
  EyeSlashIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

type CabinInfoProps = {
  name: string;
  maxCapacity: number;
  discount: number;
  regularPrice: number;
};

export default function CabinInfo({
  name,
  maxCapacity,
  discount,
  regularPrice,
}: CabinInfoProps) {
  const discountPercentage =
    discount > 0 ? Math.round((discount / regularPrice) * 100) : 0;

  const features = [
    { icon: ShieldCheckIcon, label: "Private" },
    { icon: WifiIcon, label: "WiFi" },
    { icon: FireIcon, label: "Fireplace" },
    { icon: EyeSlashIcon, label: "Hot Tub" },
  ];

  return (
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
            <span className="font-medium">Italian Dolomites, Italy</span>
          </div>
          <div className="flex items-center gap-2">
            <UsersIcon className="text-accent-400 h-5 w-5" />
            <span>Up to {maxCapacity} guests</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          {features.map((feature, index) => (
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
  );
}
