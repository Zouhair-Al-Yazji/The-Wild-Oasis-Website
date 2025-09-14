import SideNavigation from "@/components/SideNavigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="w-64 lg:w-72 xl:w-80">
        <SideNavigation />
      </div>

      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
