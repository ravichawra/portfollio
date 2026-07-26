import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { getCaseStudyBySlug, getAllCaseStudySlugs, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const revalidate = 60; // Revalidate static generation every minute

export async function generateStaticParams() {
  const slugs = await getAllCaseStudySlugs();
  return slugs.map((item: any) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) {
    return {
      title: "Case Study Not Found | RAVI CHAWRA",
    };
  }

  return {
    title: `${study.title} | Case Study | RAVI CHAWRA`,
    description: study.excerpt || study.title,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const coverUrl = study.coverImage ? urlFor(study.coverImage).url() : null;

  return (
    <>
      <Navbar backLink={{ href: "/case-studies", label: "Case Studies" }} />
      <main className="pt-24 pb-20 bg-bg-base text-text-primary min-h-screen">
        <article className="max-w-[1000px] mx-auto px-6">
          {/* Back link */}
          <div className="mb-8 font-mono text-micro text-lime">
            <Link href="/case-studies" className="hover:underline">
              ← BACK_TO_CASE_STUDIES
            </Link>
          </div>

          {/* Category & Client */}
          <div className="font-mono text-micro text-lime uppercase tracking-widest mb-3">
            {study.client ? `${study.client} // ` : ""}{study.category}
          </div>

          {/* Title */}
          <h1
            className="font-bold mb-6 text-text-primary tracking-tight leading-tight"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
            }}
          >
            {study.title}
          </h1>

          {/* Excerpt / Summary */}
          {study.excerpt && (
            <p className="text-body-lg text-text-muted leading-relaxed mb-8 max-w-3xl border-l-2 border-lime pl-4 italic">
              {study.excerpt}
            </p>
          )}

          {/* Key Metrics */}
          {study.metrics && study.metrics.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-bg-surface border border-border-subtle mb-10">
              {study.metrics.map((m: any, idx: number) => (
                <div key={idx}>
                  <div className="font-sans font-extrabold text-2xl lg:text-3xl text-lime">
                    {m.value}
                  </div>
                  <div className="font-mono text-micro text-text-faint uppercase tracking-widest mt-1">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Cover Image */}
          {coverUrl && (
            <div className="relative w-full h-[360px] md:h-[500px] mb-12 border border-border-subtle overflow-hidden">
              <Image
                src={coverUrl}
                alt={study.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Testimonial */}
          {study.testimonialQuote && (
            <div className="my-10 p-8 bg-bg-surface border-l-4 border-lime text-text-primary">
              <p className="text-body-lg italic mb-3">"{study.testimonialQuote}"</p>
              {study.testimonialAuthor && (
                <div className="font-mono text-micro text-lime uppercase tracking-widest">
                  — {study.testimonialAuthor}
                </div>
              )}
            </div>
          )}

          {/* Portable Text Body */}
          {study.body && (
            <div className="prose prose-invert max-w-none prose-lime leading-relaxed text-body-md text-text-muted">
              <PortableText value={study.body} />
            </div>
          )}
        </article>
      </main>
      <CTA />
      <Footer />
    </>
  );
}
