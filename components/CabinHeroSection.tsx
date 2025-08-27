import Image from "next/image";
import CabinInfo from "@/components/CabinInfo";
import PricingCard from "@/components/PricingCard";

type CabinHeroSectionProps = {
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string;
};

export default function CabinHeroSection({
  name,
  maxCapacity,
  regularPrice,
  discount,
  image,
}: CabinHeroSectionProps) {
  return (
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
          <div className="from-primary-900/95 via-primary-900/90 to-primary-800/95 border-primary-700/50 rounded-xs border bg-gradient-to-br shadow-2xl backdrop-blur-xl">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
                <CabinInfo
                  name={name}
                  maxCapacity={maxCapacity}
                  discount={discount}
                  regularPrice={regularPrice}
                />
                <PricingCard regularPrice={regularPrice} discount={discount} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
