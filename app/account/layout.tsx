import MobileSideNavigation from "@/components/MobileSideNavigation";
import SideNavigation from "@/components/SideNavigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="hidden w-64 sm:block lg:w-72 xl:w-80">
        <SideNavigation />
      </div>

      <div className="fixed bottom-2 left-1/2 z-50 max-w-full -translate-x-1/2 sm:hidden">
        <MobileSideNavigation />
      </div>

      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
