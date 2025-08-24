"use client";
import { Button } from "@/components/ui/button";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <Button
        className="bg-accent-500 text-primary-800 hover:bg-accent-600 inline-block cursor-pointer px-6 py-3 text-lg transition-colors disabled:cursor-not-allowed disabled:opacity-50"
        onClick={() => reset()}
      >
        Try again
      </Button>
    </main>
  );
}
