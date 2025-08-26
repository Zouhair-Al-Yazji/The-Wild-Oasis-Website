import type { Metadata } from "next";
import { getCabin, getCabins } from "@/lib/data-service";
import CabinHeader from "@/components/CabinHeader";
import CabinHeroSection from "@/components/CabinHeroSection";
import CabinDescription from "@/components/CabinDescription";
import CabinAmenitiesSection from "@/components/CabinAmenitiesSection";
import CallToActionSection from "@/components/CallToActionSection";

type Props = {
  params: Promise<{ cabinId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { cabinId } = await params;
  const { name } = await getCabin(cabinId);

  return {
    title: `Cabin ${name}`,
  };
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  return cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
}

export default async function CabinPage({ params }: Props) {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);
  const { name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="min-h-screen">
      <CabinHeader />

      <CabinHeroSection
        name={name}
        maxCapacity={maxCapacity}
        regularPrice={regularPrice}
        discount={discount}
        image={image}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="space-y-12">
          <CabinDescription description={description} />
          <CabinAmenitiesSection maxCapacity={maxCapacity} />
          <CallToActionSection cabinName={name} />
        </div>
      </div>
    </div>
  );
}
