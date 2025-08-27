import { HomeIcon } from "@heroicons/react/24/solid";

type CabinDescriptionProps = {
  description: string;
};

export default function CabinDescription({
  description,
}: CabinDescriptionProps) {
  return (
    <div className="from-primary-900/60 to-primary-800/40 border-primary-700/30 rounded-xs border bg-gradient-to-br p-6 sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="bg-accent-500/20 rounded-xs p-3">
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
  );
}
