import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function CabinHeader() {
  return (
    <div className="bg-primary-950/95 border-primary-800/30 sticky top-0 z-50 border-b backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16">
          <Link
            href="/cabins"
            className="group text-primary-300 hover:text-accent-400 flex items-center gap-3 transition-all duration-200"
          >
            <div className="bg-primary-800/50 group-hover:bg-accent-500/20 rounded-full p-2 transition-colors">
              <ArrowLeftIcon className="h-4 w-4 transition-transform" />
            </div>
            <span className="hidden font-medium sm:inline">Back to Cabins</span>
            <span className="font-medium sm:hidden">Back</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
