"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

function LogoCloud({ className, logos }: { className?: string; logos: Logo[] }) {
  return (
    <div
      className={cn(
        "overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]",
        className
      )}
    >
      <InfiniteSlider gap={42} reverse speed={80} speedOnHover={25}>
        {logos.map((logo) => (
          <img
            alt={logo.alt}
            className="pointer-events-none h-5 select-none md:h-6 opacity-60 hover:opacity-100 transition-opacity"
            height={logo.height || 24}
            key={`logo-${logo.alt}`}
            loading="lazy"
            src={logo.src}
            width={logo.width || 120}
          />
        ))}
      </InfiniteSlider>
    </div>
  );
}

const logos: Logo[] = [
  { src: "https://svgl.app/library/shopify_wordmark.svg", alt: "Shopify" },
  { src: "https://svgl.app/library/amazon_wordmark_light.svg", alt: "Amazon" },
  { src: "https://svgl.app/library/stripe_wordmark_light.svg", alt: "Stripe" },
  { src: "https://svgl.app/library/vercel_wordmark.svg", alt: "Vercel" },
  { src: "https://svgl.app/library/github_wordmark_light.svg", alt: "GitHub" },
  { src: "https://svgl.app/library/google_wordmark_light.svg", alt: "Google" },
  { src: "https://svgl.app/library/slack_wordmark_light.svg", alt: "Slack" },
  { src: "https://svgl.app/library/notion_wordmark_light.svg", alt: "Notion" },
];

export function TrustedBy() {
  return (
    <section className="pt-16 pb-10 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <LogoCloud logos={logos} />
      </div>
    </section>
  );
}
