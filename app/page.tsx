import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import FeaturedWork from "@/components/FeaturedWork";
import Process from "@/components/Process";
import WhyMe from "@/components/WhyMe";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Capabilities />
        <FeaturedWork />
        <Process />
        <WhyMe />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
