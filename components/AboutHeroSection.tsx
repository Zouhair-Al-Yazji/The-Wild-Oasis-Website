import { SparklesIcon } from "@heroicons/react/24/solid";

export default function AboutHeroSection() {
  return (
    <div className="from-primary-900 via-primary-950 to-primary-900 relative overflow-hidden bg-gradient-to-br">
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="text-center">
          <div className="bg-accent-500/10 ring-accent-500/20 mb-8 inline-flex items-center gap-3 rounded-full px-6 py-3 ring-1">
            <SparklesIcon className="text-accent-400 h-5 w-5" />
            <span className="text-accent-300 text-sm font-medium">
              Family-Owned Since 1962
            </span>
          </div>
          <h1 className="from-accent-300 via-accent-200 to-accent-400 mx-auto max-w-4xl bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl xl:text-7xl">
            Welcome to The Wild Oasis
          </h1>
          <p className="text-primary-200 mx-auto mt-6 max-w-2xl text-lg sm:text-xl">
            Where nature&apos;s beauty and comfortable living blend seamlessly
            in the heart of the Italian Dolomites
          </p>
        </div>
      </div>
    </div>
  );
}
