import CabinAmenitiesSection from "@/components/CabinAmenitiesSection";
import CabinDescription from "@/components/CabinDescription";
import CabinHeader from "@/components/CabinHeader";
import CabinHeroSection from "@/components/CabinHeroSection";
import Reservation from "@/components/Reservation";
import Spinner from "@/components/Spinner";
import { getCabin, getCabins } from "@/lib/data-service";
import type { Metadata } from "next";
import { Suspense } from "react";

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
        name={name ?? ""}
        maxCapacity={maxCapacity ?? 0}
        regularPrice={regularPrice ?? 0}
        discount={discount ?? 0}
        image={image ?? ""}
      />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="space-y-8 lg:space-y-12">
          <CabinDescription description={description ?? ""} />
          <CabinAmenitiesSection maxCapacity={maxCapacity ?? 0} />
          <Suspense fallback={<Spinner />}>
            <Reservation cabin={cabin} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
