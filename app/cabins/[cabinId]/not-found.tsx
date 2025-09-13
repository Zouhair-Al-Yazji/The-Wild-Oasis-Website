import { Home } from "lucide-react";
import LinkButton from "@/components/LinkButton";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="mx-auto max-w-2xl text-center">
        <div className="relative mb-8">
          <h1 className="from-accent-400 via-accent-500 to-accent-700 animate-pulse bg-gradient-to-br bg-clip-text text-8xl font-bold text-transparent md:text-9xl">
            404
          </h1>
          <div className="text-accent-200 absolute inset-0 -z-10 animate-bounce text-8xl font-bold opacity-30 blur-sm md:text-9xl">
            404
          </div>
        </div>

        <div className="mb-8 space-y-4">
          <h2 className="text-primary-100 text-2xl font-semibold md:text-3xl">
            Oops! Cabin Not Found
          </h2>
          <p className="text-primary-300 mx-auto max-w-md text-lg leading-relaxed">
            The cabin you&apos;re looking for seems to have wandered off into
            the digital void.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <LinkButton
            href="/"
            variant="gradient-with-hover-effect"
            icon={<Home className="h-5 w-5" />}
          >
            Back to all cabins
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
