import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyContent from "@/components/CaseStudyContent";
import CTA from "@/components/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vyonnastore Case Study | RAVI CHAWRA — Independent Systems Builder",
  description:
    "How we built Vyonnastore's e-commerce platform, automated their cart abandonment workflows with n8n, and scaled their revenue with Meta ads.",
};

export default function VyonnaCaseStudyPage() {
  return (
    <>
      <Navbar backLink={{ href: "/case-studies", label: "Case Studies" }} />
      <main className="pt-20 bg-bg-base text-text-primary min-h-screen">
        <CaseStudyContent />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
