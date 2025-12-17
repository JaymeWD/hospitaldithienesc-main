import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark" | "navy";
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className, variant = "dark", size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  const subtextSizes = {
    sm: "text-[8px]",
    md: "text-[10px]",
    lg: "text-xs",
  };

  return (
    <div className={cn("flex items-center", className)}>
      {/* Text (name only) - centered */}
      <div className="flex flex-col items-center text-center">
        <span
          className={cn(
            "font-bold tracking-tight leading-tight",
            textSizes[size],
            variant === "light"
              ? "text-primary-foreground"
              : variant === "dark"
              ? "text-primary"
              : variant === "navy"
              ? "text-[hsl(var(--navy))]"
              : undefined
          )}
        >
          DI THIENE
        </span>
        <span
          className={cn(
            "font-medium tracking-widest uppercase",
            subtextSizes[size],
            variant === "light" ? "text-primary-foreground/80" : variant === "navy" ? "text-[hsl(var(--navy-light))]" : undefined
          )}
        >
          Hospital São Caetano
        </span>
      </div>
    </div>
  );
};

export default Logo;
