import Image from "next/image";
import bg from "@/public/bg.png";
import Link from "next/link";
import { TextEffect } from "@/components/motion-primitives/text-effect";

export default function Page() {
  return (
    <div className="mt-24">
      <div className="absolute inset-0">
        <Image
          src={bg}
          fill
          placeholder="blur"
          className="object-cover object-top"
          alt="Mountains and forests with two cabins"
          priority
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>

      <div className="relative z-10 px-6 text-center sm:px-8 lg:px-12">
        <TextEffect
          as="h1"
          preset="fade"
          per="char"
          className="text-primary-50 mb-4 text-3xl font-normal tracking-tight sm:mb-6 sm:text-5xl md:mb-8 md:text-6xl lg:mb-10 lg:text-7xl xl:text-8xl"
        >
          Welcome to paradise.
        </TextEffect>

        <Link
          href="/cabins"
          className="bg-accent-500 hover:bg-accent-600 active:bg-accent-700 text-primary-900 hover:shadow-accent-500/25 inline-block transform rounded-xs px-5 py-3 text-sm font-semibold transition-all hover:shadow-lg active:scale-95 sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg lg:px-10 lg:py-6"
        >
          Explore luxury cabins
        </Link>
      </div>
    </div>
  );
}
