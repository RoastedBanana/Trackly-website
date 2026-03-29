'use client';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FlowButtonProps {
  text?: string;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function FlowButton({ text = "Modern Button", href, variant = "primary", className }: FlowButtonProps) {
  const isPrimary = variant === "primary";

  const inner = (
    <>
      <ArrowRight
        className={cn(
          "absolute w-4 h-4 left-[-25%] fill-none z-[9] transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]",
          "group-hover:left-4 group-hover:stroke-white",
          isPrimary ? "stroke-white" : "stroke-dark"
        )}
      />

      <span className="relative z-[1] -translate-x-3 group-hover:translate-x-3 transition-all duration-[800ms] ease-out">
        {text}
      </span>

      <span
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-[50%] opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]",
          "group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100",
          isPrimary ? "bg-blue" : "bg-dark"
        )}
      />

      <ArrowRight
        className={cn(
          "absolute w-4 h-4 right-4 fill-none z-[9] transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]",
          "group-hover:right-[-25%] group-hover:stroke-white",
          isPrimary ? "stroke-white" : "stroke-dark"
        )}
      />
    </>
  );

  const baseClasses = cn(
    "group relative flex items-center gap-1 overflow-hidden rounded-lg px-8 py-3.5 text-sm font-semibold cursor-pointer transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.95]",
    isPrimary
      ? "bg-navy border-[1.5px] border-navy text-white hover:border-blue hover:text-white"
      : "bg-white border-[1.5px] border-border text-dark hover:border-transparent hover:text-white",
    className
  );

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {inner}
      </a>
    );
  }

  return (
    <button className={baseClasses}>
      {inner}
    </button>
  );
}
