import Footer from "@/components/Footer";
import Mainscroll from "@/components/Mainscroll";
import { FAQSection } from "@/components/faq-section";
import RibbonSection from "@/components/ribbon-section";
import { BentoGridDemo } from "@/components/Bento";
import React from "react";
import { InfiniteMovingCardsDemo } from "@/components/Infinite-card";
import { StickyScrollRevealDemo } from "@/components/Sticky-scroll";
import { AnimatedTestimonialsDemo } from "@/components/Testimoni";
import { Blog } from "@/components/Blog";
import { Background } from "@/components/Background";
import { Nav } from "@/components/Nav";
import Container from "@/components/Container";

const page = () => {
  return (
    <div id="home" className="container px-4 md:px-10 mx-auto max-w-screen">
      <Container>
        <Background />
        <Mainscroll />
        <RibbonSection />
        <BentoGridDemo />
        <StickyScrollRevealDemo />
        <AnimatedTestimonialsDemo />
        <InfiniteMovingCardsDemo />
        {/* <Blog /> */}
        <FAQSection />
      </Container>
    </div>
  );
};

export default page;
