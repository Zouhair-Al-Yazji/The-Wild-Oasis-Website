import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "gradient"
    | "gradient-with-icon"
    | "gradient-with-hover-effect";
  size?: "sm" | "md" | "lg" | "xl";
  icon?: ReactNode;
  className?: string;
  fullWidth?: boolean;
};

export default function LinkButton({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  className = "",
  fullWidth = false,
}: LinkButtonProps) {
  const baseClasses =
    "inline-block transform rounded-xs font-semibold transition-all duration-300 active:scale-95";

  const variantClasses = {
    primary:
      "bg-accent-500 hover:bg-accent-600 active:bg-accent-700 text-primary-900 hover:shadow-accent-500/25 hover:shadow-lg",
    secondary:
      "border border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-primary-900",
    gradient:
      "from-accent-600 to-accent-500 hover:from-accent-500 hover:to-accent-400 text-primary-900 bg-gradient-to-r",
    "gradient-with-icon":
      "group from-accent-600 via-accent-500 to-accent-600 text-primary-900 hover:from-accent-500 hover:via-accent-400 hover:to-accent-500 hover:shadow-accent-500/25 inline-flex items-center gap-3 bg-gradient-to-r shadow-lg transition-all duration-300 hover:shadow-xl",
    "gradient-with-hover-effect":
      "group/btn from-accent-600 via-accent-500 to-accent-600 hover:from-accent-500 hover:via-accent-400 hover:to-accent-500 text-primary-900 hover:shadow-accent-500/25 relative overflow-hidden bg-gradient-to-r text-center transition-all duration-300 hover:shadow-lg",
  };

  const sizeClasses = {
    sm: "px-5 py-3 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-6 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";

  const combinedClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    widthClass,
    className,
  );

  if (variant === "gradient-with-hover-effect") {
    return (
      <Link href={href} className={combinedClasses}>
        <span className="relative z-10 flex items-center justify-center gap-2">
          <span className="text-sm sm:text-base">{children}</span>
          {icon}
        </span>
        <div className="absolute inset-0 -left-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 group-hover/btn:left-full"></div>
      </Link>
    );
  }

  return (
    <Link href={href} className={combinedClasses}>
      {variant === "gradient-with-icon" ? (
        <span className="flex items-center gap-3">
          {children}
          {icon}
        </span>
      ) : (
        children
      )}
    </Link>
  );
}
