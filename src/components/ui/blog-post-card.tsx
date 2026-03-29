"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "group relative flex flex-col overflow-hidden rounded-xl border border-border bg-white text-dark transition-colors duration-200 hover:border-accent",
  {
    variants: {
      variant: {
        default: "p-6",
        featured: "flex-col md:flex-row",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface BlogPostCardProps extends VariantProps<typeof cardVariants> {
  tag: string;
  date: string;
  title: string;
  description: string;
  imageUrl?: string;
  href: string;
  className?: string;
}

export function BlogPostCard({
  className,
  variant,
  tag,
  date,
  title,
  description,
  imageUrl,
  href,
}: BlogPostCardProps) {
  return (
    <motion.div
      className={cn(cardVariants({ variant, className }))}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <a href={href} className="absolute inset-0 z-10" aria-label={`Mehr lesen: ${title}`}>
        <span className="sr-only">Mehr lesen</span>
      </a>

      <div className="relative z-0 flex h-full w-full flex-col md:flex-row">
        {variant === "featured" && imageUrl && (
          <div className="relative w-full overflow-hidden md:w-1/2 lg:w-3/5">
            <img
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
        )}

        <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
          <div>
            <div className="mb-4 flex items-center gap-4 text-xs font-semibold uppercase text-muted">
              <span className="rounded-full bg-tint px-3 py-1 text-accent">{tag}</span>
              <span>{date}</span>
            </div>

            <h3 className="mb-3 text-xl font-heading font-semibold leading-tight text-dark lg:text-2xl">
              <span className="bg-gradient-to-r from-accent to-accent bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_2px]">
                {title}
              </span>
            </h3>

            <p className="text-sm text-muted leading-relaxed">{description}</p>
          </div>

          {variant === "featured" && (
            <div className="mt-8">
              <span className="inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue">
                Artikel lesen
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
