import { StarIcon } from "@heroicons/react/24/solid";

type StatsSectionProps = {
  cabinsCount: number;
};

export default function StatsSection({ cabinsCount }: StatsSectionProps) {
  const stats = [
    { value: "60+", label: "Years of Excellence" },
    { value: cabinsCount.toString(), label: "Luxury Cabins" },
    { value: "10k+", label: "Happy Guests" },
    { value: "4.9", label: "Rating", icon: StarIcon },
  ];

  return (
    <div className="border-primary-800/50 bg-primary-900/50 border-y backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-accent-400 text-2xl font-bold sm:text-3xl">
                {stat.value}
              </div>
              <div className="text-primary-300 mt-1 flex items-center justify-center gap-1 text-sm">
                {stat.icon && (
                  <stat.icon className="h-3 w-3 fill-current text-yellow-400" />
                )}
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
