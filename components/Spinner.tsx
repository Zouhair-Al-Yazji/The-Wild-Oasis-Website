import { cn } from "@/lib/utils";

export default function Spinner({
  size = "default",
  className = "",
}: {
  size?: "sm" | "default" | "lg";
  className?: string;
}) {
  const sizeClasses = {
    sm: "w-6 h-6 border-2",
    default: "w-16 h-16 border-4",
    lg: "w-24 h-24 border-6",
  };

  return (
    <div className="relative flex items-center justify-center">
      <div
        className={cn(
          `border-accent-200 border-r-accent-500 relative animate-spin rounded-full border-solid`,
          sizeClasses[size],
          className,
        )}
      >
        <div className="from-accent-500/20 absolute inset-0 rounded-full bg-gradient-to-r to-transparent blur-sm"></div>
      </div>

      <div
        className={`border-accent-500/30 absolute animate-ping rounded-full border ${size === "sm" ? "h-8 w-8" : size === "lg" ? "h-32 w-32" : "h-20 w-20"} `}
      ></div>
    </div>
  );
}
