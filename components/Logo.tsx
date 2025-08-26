import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="z-10 flex items-center gap-2 md:gap-4">
      <Image
        src={logo}
        quality={100}
        priority
        width={40}
        height={40}
        alt="The Wild Oasis Logo"
      />
      <span className="text-primary-100 text-lg font-semibold md:text-xl">
        The Wild Oasis
      </span>
    </Link>
  );
}
