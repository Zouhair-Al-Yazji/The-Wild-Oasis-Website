import Image from "next/image";
import about1 from "@/public/about-1.jpg";
import about2 from "@/public/about-2.jpg";
import {
  SparklesIcon,
  HeartIcon,
  HomeIcon,
  MapPinIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import LinkButton from "./LinkButton";

type ContentSectionProps = {
  cabinsCount: number;
};

export default function AboutContentSection({
  cabinsCount,
}: ContentSectionProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        <div className="order-2 lg:order-1">
          <div className="mb-8 flex items-center gap-3">
            <div className="bg-accent-500/20 rounded-full p-3">
              <HomeIcon className="text-accent-400 h-6 w-6" />
            </div>
            <span className="text-accent-300 text-sm font-semibold tracking-wider uppercase">
              Our Story
            </span>
          </div>

          <h2 className="text-primary-50 mb-8 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Your Paradise Away From Home
          </h2>

          <div className="text-primary-200 space-y-6 text-lg leading-relaxed">
            <p className="relative pl-6">
              <span className="bg-accent-400 absolute top-2 left-0 h-2 w-2 rounded-full"></span>
              Where nature's beauty and comfortable living blend seamlessly.
              Hidden away in the heart of the Italian Dolomites, this is your
              paradise away from home. But it's not just about the luxury
              cabins. It's about the experience of reconnecting with nature and
              enjoying simple pleasures with family.
            </p>

            <p className="relative pl-6">
              <span className="bg-accent-400 absolute top-2 left-0 h-2 w-2 rounded-full"></span>
              Our {cabinsCount} luxury cabins provide a cozy base, but the real
              freedom and peace you'll find in the surrounding mountains. Wander
              through lush forests, breathe in the fresh air, and watch the
              stars twinkle above from the warmth of a campfire or your hot tub.
            </p>

            <p className="relative pl-6">
              <span className="bg-accent-400 absolute top-2 left-0 h-2 w-2 rounded-full"></span>
              This is where memorable moments are made, surrounded by nature's
              splendor. It's a place to slow down, relax, and feel the joy of
              being together in a beautiful setting.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="bg-primary-800/30 flex items-center gap-3 rounded-xs p-4">
              <MapPinIcon className="text-accent-400 h-5 w-5" />
              <span className="text-primary-200 text-sm font-medium">
                Italian Dolomites
              </span>
            </div>
            <div className="bg-primary-800/30 flex items-center gap-3 rounded-xs p-4">
              <SparklesIcon className="text-accent-400 h-5 w-5" />
              <span className="text-primary-200 text-sm font-medium">
                Luxury Experience
              </span>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative">
            <div className="from-accent-500/20 to-accent-600/20 absolute -inset-4 rounded-xs bg-gradient-to-r blur-lg"></div>
            <div className="relative overflow-hidden rounded-xs shadow-xs">
              <Image
                src={about1}
                placeholder="blur"
                quality={90}
                alt="Family sitting around a fire pit in front of cabin"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        <div className="order-1">
          <div className="relative">
            <div className="from-accent-600/20 to-accent-500/20 absolute -inset-4 rounded-xs bg-gradient-to-r blur-lg"></div>
            <div className="relative overflow-hidden rounded-xs shadow-xs">
              <Image
                src={about2}
                placeholder="blur"
                quality={90}
                alt="Family that manages The Wild Oasis"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div className="order-2">
          <div className="mb-8 flex items-center gap-3">
            <div className="bg-accent-500/20 rounded-full p-3">
              <HeartIcon className="text-accent-400 h-6 w-6" />
            </div>
            <span className="text-accent-300 text-sm font-semibold tracking-wider uppercase">
              Family Legacy
            </span>
          </div>

          <h2 className="text-primary-50 mb-8 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Managed by Our Family Since 1962
          </h2>

          <div className="text-primary-200 space-y-6 text-lg leading-relaxed">
            <p className="relative pl-6">
              <span className="bg-accent-400 absolute top-2 left-0 h-2 w-2 rounded-full"></span>
              Since 1962, The Wild Oasis has been a cherished family-run
              retreat. Started by our grandparents, this haven has been nurtured
              with love and care, passing down through our family as a testament
              to our dedication to creating a warm, welcoming environment.
            </p>

            <p className="relative pl-6">
              <span className="bg-accent-400 absolute top-2 left-0 h-2 w-2 rounded-full"></span>
              Over the years, we've maintained the essence of The Wild Oasis,
              blending the timeless beauty of the mountains with the personal
              touch only a family business can offer. Here, you're not just a
              guest; you're part of our extended family.
            </p>
          </div>

          <div className="bg-primary-800/30 mt-8 flex items-center gap-3 rounded-xs p-4">
            <CalendarIcon className="text-accent-400 h-5 w-5" />
            <span className="text-primary-200 text-sm font-medium">
              3 Generations of Hospitality Excellence
            </span>
          </div>

          <div className="mt-12">
            <LinkButton
              href="/cabins"
              variant="gradient-with-icon"
              size="lg"
              iconDirection="right"
              icon={
                <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              }
            >
              Explore Luxury Cabins
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}
