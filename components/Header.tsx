import Logo from "@/components/Logo";
import MobileNavigation from "@/components/MobileNavigation";
import Navigation from "@/components/Navigation";

export default function Header() {
  return (
    <header className="border-primary-900 border-b px-4 py-3 md:px-8 md:py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <div className="z-10 hidden md:block">
          <Navigation />
        </div>
        <div className="z-10 block md:hidden">
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
