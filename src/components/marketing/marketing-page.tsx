import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqList } from "@/components/shared/faq-list";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { Breadcrumbs, SectionHeading } from "@/components/shared/section";
import type { MarketingPageData, MarketingSection } from "@/data/marketing-pages";

function CtaLink({
  cta,
  variant = "default",
}: {
  cta: { label: string; href: string };
  variant?: "default" | "secondary";
}) {
  return (
    <Button asChild size="lg" variant={variant}>
      <Link href={cta.href}>
        {cta.label}
        {variant === "default" ? <ArrowRight className="h-4 w-4" /> : null}
      </Link>
    </Button>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm text-muted">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function SectionBody({ section }: { section: MarketingSection }) {
  if (section.type === "hero") return null;

  const alt = section.type === "cards" || section.type === "steps" || section.type === "faq";

  return (
    <section
      id={section.id || undefined}
      className={`section-pad scroll-mt-24 ${alt ? "bg-background-secondary" : ""}`}
    >
      <div className="container-site">
        {section.type === "cta" ? (
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card blue-glow px-8 py-14 md:px-14">
              <div className="relative max-w-3xl">
                {section.eyebrow ? (
                  <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
                    {section.eyebrow}
                  </p>
                ) : null}
                <h2 className="font-heading text-3xl font-semibold md:text-4xl">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-muted">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.trust.length > 0 ? <BulletList items={section.trust} /> : null}
                <div className="mt-8 flex flex-wrap gap-3">
                  {section.primaryCta ? <CtaLink cta={section.primaryCta} /> : null}
                  {section.secondaryCta ? (
                    <CtaLink cta={section.secondaryCta} variant="secondary" />
                  ) : null}
                </div>
              </div>
            </div>
          </Reveal>
        ) : (
          <>
            <Reveal>
              <SectionHeading
                eyebrow={section.eyebrow}
                title={section.title}
                description={section.paragraphs[0]}
              />
              {section.paragraphs.slice(1).length > 0 ? (
                <div className="mt-4 max-w-3xl space-y-4 text-muted">
                  {section.paragraphs.slice(1).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : null}
            </Reveal>

            {section.type === "steps" ? (
              <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item) => (
                  <StaggerItem key={item.step || item.title}>
                    <div className="h-full rounded-2xl border border-border bg-card p-6">
                      {item.step ? (
                        <span className="font-heading text-sm text-accent">{item.step}</span>
                      ) : null}
                      <h3 className="mt-3 font-heading text-xl font-semibold">{item.title}</h3>
                      {item.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="mt-3 text-sm leading-relaxed text-muted">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            ) : null}

            {section.type === "cards" ? (
              <Stagger className="mt-12 grid gap-5 sm:grid-cols-2">
                {section.items.map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="h-full rounded-2xl border border-border bg-card p-6">
                      <h3 className="font-heading text-xl font-semibold">{item.title}</h3>
                      {item.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="mt-3 text-sm leading-relaxed text-muted">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            ) : null}

            {section.type === "details" ? (
              <div className="mt-12 grid gap-5 lg:grid-cols-2">
                {section.items.map((item) => (
                  <article
                    key={item.title}
                    className="flex h-full flex-col rounded-2xl border border-border bg-card p-6"
                  >
                    {item.step ? (
                      <span className="font-heading text-sm text-accent">{item.step}</span>
                    ) : null}
                    <h3 className="mt-2 font-heading text-xl font-semibold">{item.title}</h3>
                    {item.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="mt-3 text-sm leading-relaxed text-muted">
                        {paragraph}
                      </p>
                    ))}
                    {item.meta ? (
                      <p className="mt-4 text-sm font-medium text-foreground">{item.meta}</p>
                    ) : null}
                    {item.groups.map((group) => (
                      <div key={group.label} className="mt-4">
                        <p className="text-sm font-medium">{group.label}</p>
                        <BulletList items={group.items} />
                      </div>
                    ))}
                    {item.cta ? (
                      <Link
                        href={item.cta.href}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                      >
                        {item.cta.label}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    ) : null}
                  </article>
                ))}
              </div>
            ) : null}

            {section.type === "accordion" ? (
              <Accordion type="single" collapsible className="mx-auto mt-12 max-w-3xl">
                {section.items.map((item, index) => (
                  <AccordionItem key={item.title} value={`item-${index}`}>
                    <AccordionTrigger>{item.title}</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 text-sm leading-relaxed text-muted">
                        {item.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                      {item.groups.map((group) => (
                        <div key={group.label} className="mt-4">
                          <p className="text-sm font-medium text-foreground">{group.label}</p>
                          <BulletList items={group.items} />
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : null}

            {section.type === "faq" ? (
              <div className="mx-auto mt-12 max-w-3xl">
                <FaqList
                  items={section.items.map((item) => ({
                    question: item.title,
                    answer: item.paragraphs.join(" "),
                  }))}
                />
              </div>
            ) : null}

            {section.closing ? (
              <p className="mt-10 max-w-3xl text-base leading-relaxed text-muted">
                {section.closing}
              </p>
            ) : null}
          </>
        )}
      </div>
    </section>
  );
}

export function MarketingPage({
  page,
  crumbs,
}: {
  page: MarketingPageData;
  crumbs: { label: string; href?: string }[];
}) {
  const hero = page.sections.find((section) => section.type === "hero");
  const rest = page.sections.filter((section) => section.type !== "hero");

  return (
    <>
      {hero ? (
        <section className="hero-grid border-b border-border pt-28 pb-16 md:pt-32 md:pb-20">
          <div className="container-site">
            <Breadcrumbs items={crumbs} />
            <Reveal>
              {hero.eyebrow ? (
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-accent">
                  {hero.eyebrow}
                </p>
              ) : null}
              <h1 className="max-w-4xl font-heading text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                {hero.title}
              </h1>
              <div className="mt-5 max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
                {hero.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {hero.primaryCta ? <CtaLink cta={hero.primaryCta} /> : null}
                {hero.secondaryCta ? (
                  <CtaLink cta={hero.secondaryCta} variant="secondary" />
                ) : null}
              </div>
              {hero.trust.length > 0 ? (
                <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6">
                  {hero.trust.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-muted">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              ) : null}
            </Reveal>
          </div>
        </section>
      ) : null}
      {rest.map((section) => (
        <SectionBody key={`${section.type}-${section.title}`} section={section} />
      ))}
    </>
  );
}
