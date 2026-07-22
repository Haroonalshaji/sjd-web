import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  buildMetadata,
  JsonLd,
  breadcrumbSchema,
  serviceSchema,
  faqSchema,
} from "@/lib/seo";
import {
  Breadcrumbs,
  CtaBanner,
  SectionHeading,
} from "@/components/shared/section";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { FaqList } from "@/components/shared/faq-list";
import { Button } from "@/components/ui/button";
import {
  getRelatedServices,
  getServiceBySlug,
  services,
} from "@/data/services";
import { ArrowRight } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = service.icon;
  const related = getRelatedServices(service.related);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Services", path: "/services" },
            { name: service.shortTitle, path: `/services/${service.slug}` },
          ]),
          serviceSchema({
            name: service.title,
            description: service.description,
            path: `/services/${service.slug}`,
          }),
          faqSchema(service.faqs),
        ]}
      />

      <section className="hero-grid border-b border-border pt-28 pb-16 md:pt-32">
        <div className="container-site">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: service.shortTitle },
            ]}
          />
          <Reveal>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-accent">
              <Icon className="h-7 w-7" aria-hidden />
            </div>
            <h1 className="max-w-3xl font-heading text-4xl font-semibold tracking-tight md:text-5xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted">
              {service.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/contact">
                  Book consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              {service.pricing && (
                <span className="inline-flex items-center rounded-xl border border-border px-4 text-sm text-muted">
                  {service.pricing}
                </span>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Overview" title="How this drives growth" />
            <p className="mt-6 leading-relaxed text-muted">
              {service.longDescription}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading eyebrow="Benefits" title="What you get" />
            <ul className="mt-6 space-y-3">
              {service.benefits.map((b) => (
                <li
                  key={b}
                  className="flex gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-background-secondary">
        <div className="container-site">
          <Reveal>
            <SectionHeading eyebrow="Process" title="How we work together" />
          </Reveal>
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <StaggerItem key={step.title}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <span className="text-sm text-accent">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionHeading eyebrow="Tools" title="Tools used" />
            </Reveal>
            <div className="mt-6 flex flex-wrap gap-2">
              {service.tools.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <Reveal>
              <SectionHeading eyebrow="Industries" title="Industries served" />
            </Reveal>
            <div className="mt-6 flex flex-wrap gap-2">
              {service.industries.map((ind) => (
                <span
                  key={ind}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-background-secondary">
        <div className="container-site">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Common questions" align="center" />
          </Reveal>
          <div className="mt-10">
            <FaqList items={service.faqs} />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-pad">
          <div className="container-site">
            <Reveal>
              <SectionHeading eyebrow="Related" title="Related services" />
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="rounded-2xl border border-border bg-card p-5 transition hover:border-primary/40"
                >
                  <h3 className="font-heading font-semibold">{r.shortTitle}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted">
                    {r.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
