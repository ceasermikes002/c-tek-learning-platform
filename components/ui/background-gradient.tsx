"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const mouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!animate) return;
    
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
    e.currentTarget.style.setProperty("--mouse-opacity", "1");
  };

  return (
    <div
      className={cn(
        "group relative rounded-[22px] p-1 transition-all duration-300 hover:scale-[1.02]",
        containerClassName
      )}
      onMouseMove={mouseEnter}
      onMouseLeave={(e) => {
        e.currentTarget.style.setProperty("--mouse-opacity", "0");
      }}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[22px] opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          "bg-[radial-gradient(circle_at_var(--mouse-x,_0px)_var(--mouse-y,_0px),rgba(247,153,32,0.15),transparent_40%)]"
        )}
        style={{
          opacity: "var(--mouse-opacity, 0)",
        }}
      />
      <div className={cn("relative", className)}>{children}</div>
    </div>
  );
}; 