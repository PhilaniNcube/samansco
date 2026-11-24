import { ArrowDownIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/samansco/page-hero";
import { Button } from "@/components/ui/button";

export function GroupHero() {
  return (
    <PageHero
      image="/images/home-hero-source.webp"
      imageAlt="Aerial view of a multi-storey institutional building with a large rooftop solar array above the surrounding high-density suburb."
      priority
      eyebrow="ESTABLISHED 1982 • SOUTHERN AFRICA"
      title="The Future of Power, Delivered."
      description="A vertically integrated energy and electricity group shaping Africa's clean energy future through heavy infrastructure execution, commercial power trading, and enduring operational stewardship."
      actions={
        <>
          <Button
            size="lg"
            render={<a href="#operating-companies" />}
          >
            Explore Our Companies
            <ArrowDownIcon aria-hidden="true" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 bg-transparent text-white hover:border-white/60 hover:bg-white/10 hover:text-white"
            render={<Link href="/contact" />}
          >
            Contact Group HQ
            <ArrowRightIcon aria-hidden="true" />
          </Button>
        </>
      }
    />
  );
}
