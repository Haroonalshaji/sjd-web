import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  buildMetadata,
  JsonLd,
  breadcrumbSchema,
} from "@/lib/seo";
import {
  Breadcrumbs,
  CtaBanner,
  SectionHeading,
} from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import {
  caseStudies,
  getCaseStudyBySlug,
} from "@/data/case-studies";

type Props = { params: Promise<{ slug: string }> };

export const dynamic = "force-static";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};
  return buildMetadata({
    title: study.metaTitle,
    description: study.metaDescription,
    path: `/portfolio/${study.slug}`,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const sections = [
    { title: "Problem", body: study.problem },
    { title: "Research", body: study.research },
    { title: "Strategy", body: study.strategy },
    { title: "Implementation", body: study.implementation },
    { title: "Results", body: study.results.join(" · ") },
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Portfolio", path: "/portfolio" },
          { name: study.title, path: `/portfolio/${study.slug}` },
        ])}
      />

      <section className="hero-grid border-b border-border pt-28 pb-16 md:pt-32">
        <div className="container-site">
          <Breadcrumbs
            items={[
              { label: "Portfolio", href: "/portfolio" },
              { label: study.client },
            ]}
          />
          <Reveal>
            <p className="text-sm text-accent">
              {study.category} · {study.industry}
            </p>
            <h1 className="mt-3 max-w-4xl font-heading text-4xl font-semibold tracking-tight md:text-5xl">
              {study.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted">{study.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {study.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-border bg-card px-4 py-3"
                >
                  <p className="font-heading text-2xl font-semibold text-accent">
                    {m.value}
                  </p>
                  <p className="text-xs text-muted">{m.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site space-y-12">
          <Reveal>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="font-heading text-lg font-semibold">Challenge</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {study.challenge}
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="font-heading text-lg font-semibold">Solution</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {study.solution}
                </p>
              </div>
            </div>
          </Reveal>

          {sections.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <SectionHeading title={s.title} />
              <p className="mt-4 leading-relaxed text-muted">{s.body}</p>
            </Reveal>
          ))}

          <Reveal>
            <SectionHeading title="Key metrics" />
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {study.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-border bg-card p-5 text-center"
                >
                  <p className="font-heading text-3xl font-semibold text-accent">
                    {m.value}
                  </p>
                  <p className="mt-2 text-sm text-muted">{m.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <SectionHeading title="Tools used" />
            <div className="mt-4 flex flex-wrap gap-2">
              {study.tools.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-4 py-2 text-sm text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <SectionHeading title="Screenshots" />
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[1, 2].map((n) => (
                <div
                  key={n}
                  className="flex aspect-video items-center justify-center rounded-2xl border border-dashed border-border bg-background-secondary text-sm text-muted"
                >
                  Screenshot placeholder {n}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <blockquote className="glass rounded-2xl p-8">
              <p className="text-lg leading-relaxed">
                &ldquo;{study.testimonial.quote}&rdquo;
              </p>
              <footer className="mt-6 text-sm text-muted">
                <span className="text-foreground">
                  {study.testimonial.author}
                </span>{" "}
                — {study.testimonial.role}
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
