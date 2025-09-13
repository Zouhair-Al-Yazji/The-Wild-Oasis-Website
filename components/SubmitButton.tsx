"use client";

import { useFormStatus } from "react-dom";
import SpinnerMini from "./SpinnerMini";

export default function SubmitButton({
  pendingLabel,
  children,
}: {
  pendingLabel: string;
  children: React.ReactNode;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="group group/btn from-accent-600 via-accent-500 to-accent-600 hover:from-accent-500 hover:via-accent-400 hover:to-accent-500 text-primary-900 hover:shadow-accent-500/25 relative inline-block transform cursor-pointer overflow-hidden rounded-xs bg-gradient-to-r px-5 py-3 text-center text-sm font-semibold transition-all duration-300 hover:shadow-lg active:scale-95 disabled:pointer-events-none disabled:cursor-not-allowed md:px-8 md:py-3 md:text-base"
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {pending ? (
          <span className="flex items-center gap-2">
            <SpinnerMini />
            {pendingLabel}
          </span>
        ) : (
          children
        )}
      </span>
      <div className="absolute inset-0 -left-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 group-hover/btn:left-full"></div>
    </button>
  );
}
