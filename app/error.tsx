"use client";

import LinkButton from "@/components/LinkButton";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="mx-auto max-w-2xl text-center">
        <div className="relative mb-8 flex justify-center">
          <div className="relative">
            <AlertTriangle className="h-24 w-24 animate-pulse text-red-500" />
            <div className="absolute inset-0 h-24 w-24 animate-ping text-red-300 opacity-50 blur-sm">
              <AlertTriangle className="h-24 w-24" />
            </div>
          </div>
        </div>
        <div className="mb-8 space-y-6">
          <div className="space-y-2">
            <h1 className="text-primary-100 text-3xl font-bold md:text-4xl">
              Something Went Wrong
            </h1>
            <p className="text-primary-300 text-lg">
              We encountered an unexpected error
            </p>
          </div>

          <div className="bg-primary-900/50 mx-4 rounded-xs border border-red-500/20 p-4 backdrop-blur-sm">
            <p className="font-mono text-sm break-words text-red-400">
              {error.message || "An unexpected error occurred"}
            </p>
            {error.digest && (
              <p className="text-primary-400 mt-2 text-xs">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <LinkButton
            onClick={reset}
            variant="gradient-with-hover-effect"
            icon={
              <RefreshCw className="h-5 w-5 transition-transform duration-500 group-hover:rotate-180" />
            }
          >
            Try Again
          </LinkButton>

          <LinkButton
            href="/"
            icon={<Home className="h-4 w-4" />}
            variant="secondary"
          >
            Back to Home
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
