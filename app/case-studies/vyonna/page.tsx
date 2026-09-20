import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyContent from "@/components/CaseStudyContent";
import CTA from "@/components/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vyonnastore Case Study | Ravi Chawra — Solo Systems Builder",
  description:
    "How Ravi Chawra engineered Vyonnastore's Shopify store, automated checkout recovery with n8n, and scaled revenue with Meta Ads.",
  alternates: {
    canonical: "https://ravichawra.com/case-studies/vyonna",
  },
  authors: [{ name: "Ravi Chawra (Ravi Prakash Chawra)", url: "https://ravichawra.com" }],
  openGraph: {
    title: "Vyonnastore Case Study | Ravi Chawra",
    description: "Shopify store build, abandoned cart automations via n8n, and high-converting Meta Ads.",
    url: "https://ravichawra.com/case-studies/vyonna",
    images: ["/images/vyonna-case-study-featured.png"],
  },
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
