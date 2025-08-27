import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentPropsWithoutRef, ReactNode } from "react";

interface LinkButtonProps extends ComponentPropsWithoutRef<"button"> {
  href?: string;
  variant?:
    | "primary"
    | "secondary"
    | "gradient"
    | "gradient-with-icon"
    | "gradient-with-hover-effect";
  size?: "sm" | "md" | "lg" | "xl";
  icon?: ReactNode;
  iconDirection?: "left" | "right";
  fullWidth?: boolean;
}

export default function LinkButton({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  className = "",
  fullWidth = false,
  iconDirection = "left",
  onClick,
}: LinkButtonProps) {
  const baseClasses =
    "inline-block transform rounded-xs font-semibold transition-all duration-300 active:scale-95";

  const variantClasses = {
    primary:
      "bg-accent-500 hover:bg-accent-600 active:bg-accent-700 text-primary-900 hover:shadow-accent-500/25 hover:shadow-lg",
    secondary:
      "border border-accent-500 text-accent-500 hover:bg-accent-500/10",
    gradient:
      "from-accent-600 to-accent-500 hover:from-accent-500 hover:to-accent-400 text-primary-900 bg-gradient-to-r",
    "gradient-with-icon":
      "group from-accent-600 via-accent-500 to-accent-600 text-primary-900 hover:from-accent-500 hover:via-accent-400 hover:to-accent-500 hover:shadow-accent-500/25 inline-flex items-center gap-3 bg-gradient-to-r shadow-lg transition-all duration-300 hover:shadow-xl",
    "gradient-with-hover-effect":
      "group group/btn cursor-pointer from-accent-600 via-accent-500 to-accent-600 hover:from-accent-500 hover:via-accent-400 hover:to-accent-500 text-primary-900 hover:shadow-accent-500/25 relative overflow-hidden bg-gradient-to-r text-center transition-all duration-300 hover:shadow-lg",
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

  if (href) {
    if (variant === "gradient-with-hover-effect") {
      return (
        <Link href={href} className={combinedClasses}>
          <span className="relative z-10 flex items-center justify-center gap-2">
            {iconDirection === "left" && icon}
            {children}
            {iconDirection === "right" && icon}
          </span>
          <div className="absolute inset-0 -left-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 group-hover/btn:left-full"></div>
        </Link>
      );
    }

    return (
      <Link href={href} className={combinedClasses}>
        {variant === "gradient-with-icon" ? (
          <span className="flex items-center gap-3">
            {iconDirection === "left" && icon}
            {children}
            {iconDirection === "right" && icon}
          </span>
        ) : (
          children
        )}
      </Link>
    );
  }

  if (variant === "gradient-with-hover-effect") {
    return (
      <button onClick={onClick} className={combinedClasses}>
        <span className="relative z-10 flex items-center justify-center gap-2">
          {iconDirection === "left" && icon}
          {children}
          {iconDirection === "right" && icon}
        </span>
        <div className="absolute inset-0 -left-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700 group-hover/btn:left-full"></div>
      </button>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {variant === "gradient-with-icon" ? (
        <span className="flex items-center gap-3">
          {iconDirection === "left" && icon}
          {children}
          {iconDirection === "right" && icon}
        </span>
      ) : (
        children
      )}
    </button>
  );
}
