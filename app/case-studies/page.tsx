import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyListing from "@/components/CaseStudyListing";
import { getAllCaseStudies } from "@/lib/sanity";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | RAVI CHAWRA — Independent Systems Builder",
  description:
    "Explore case studies of e-commerce store builds, AI automation workflows, and high-ROAS performance marketing systems.",
};

export const revalidate = 60; // Revalidate every minute

export default async function CaseStudiesPage() {
  const sanityStudies = await getAllCaseStudies();

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-bg-base">
        <CaseStudyListing initialStudies={sanityStudies} />
      </main>
      <Footer />
    </>
  );
}
