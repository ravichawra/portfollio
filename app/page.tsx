import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ResultsTicker from "@/components/ResultsTicker";
import Capabilities from "@/components/Capabilities";
import TechStack from "@/components/TechStack";
import FeaturedWork from "@/components/FeaturedWork";
import Process from "@/components/Process";
import WhyMe from "@/components/WhyMe";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ResultsTicker />
        <Capabilities />
        <TechStack />
        <FeaturedWork />
        <Process />
        <WhyMe />
        <FAQ />
        <Newsletter />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
