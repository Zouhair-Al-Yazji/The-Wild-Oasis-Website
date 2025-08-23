import Logo from "@/app/_components/Logo";
import MobileNavigation from "@/app/_components/MobileNavigation";
import Navigation from "@/app/_components/Navigation";

export default function Header() {
  return (
    <header className="border-primary-900 border-b px-4 py-3 md:px-8 md:py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <div className="hidden md:block">
          <Navigation />
        </div>
        <div className="block md:hidden">
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
