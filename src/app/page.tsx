import { Hero } from "@/components/Hero";
import { Leistungen } from "@/components/Leistungen";
import { Ergebnisse } from "@/components/Ergebnisse";
import { Integrationen } from "@/components/Integrationen";
import { TrustedBy } from "@/components/TrustedBy";
import { Rezensionen } from "@/components/Rezensionen";
import { Showcase } from "@/components/Showcase";
import { FAQ } from "@/components/FAQ";
import { Blog } from "@/components/Blog";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Leistungen />
      <Ergebnisse />
      <Showcase />
      <Integrationen />
      <Rezensionen />
      <FAQ />
      <Blog />
    </>
  );
}
