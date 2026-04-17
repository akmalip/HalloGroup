"use client";

import StickyScroll from "@/components/StickyScroll";
import SlideHero from "@/components/slides/SlideHero";
import SlideAbout from "@/components/slides/SlideAbout";
import SlideNetworks from "@/components/slides/SlideNetworks";
import SlideCTA from "@/components/slides/SlideCTA";

export default function HomeClient() {
  const slides = [
    <SlideHero key="hero" />,
    <SlideAbout key="about" />,
    <SlideNetworks key="networks" />,
    <SlideCTA key="cta" />,
  ];

  return <StickyScroll slides={slides} />;
}
