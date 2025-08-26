import { getCabins } from "@/lib/data-service";
import { Metadata } from "next";
import AboutHeroSection from "@/components/AboutHeroSection";
import AboutStatsSection from "@/components/AboutStatsSection";
import AboutContentSection from "@/components/AboutContentSection";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "About",
};

export default async function Page() {
  const cabins = await getCabins();

  return (
    <div className="bg-primary-950 min-h-screen">
      <AboutHeroSection />
      <AboutStatsSection cabinsCount={cabins.length} />
      <AboutContentSection cabinsCount={cabins.length} />
    </div>
  );
}
