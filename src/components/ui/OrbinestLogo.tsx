import React from "react";
import { cn } from "@/lib/utils";

interface OrbinestLogoProps {
  className?: string;
  size?: number | string;
  strokeWidth?: number;
}

export function OrbinestLogo({
  className,
  size = 24,
  strokeWidth = 16,
}: OrbinestLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-label="Orbinest Logo"
    >
      <circle
        cx="50"
        cy="50"
        r="34"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export default OrbinestLogo;
