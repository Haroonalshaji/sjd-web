import { buildMetadata, JsonLd, breadcrumbSchema } from "@/lib/seo";
import { PageHero, CtaBanner, Breadcrumbs } from "@/components/shared/section";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section";
import { aboutContent, tools } from "@/data/content";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

export const metadata = buildMetadata({
  title: "About Sajad — Digital Marketing Consultant in India",
  description:
    "Meet Sajad — freelance digital marketing consultant in India with 8+ years in SEO, Google Ads, Meta Ads, analytics, and growth for startups and SMEs.",
  path: "/about",
  keywords: ["about Sajad digital marketer", "digital marketing consultant India"],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        eyebrow="About"
        title="Senior marketing expertise. Personal accountability."
        description={aboutContent.intro}
      />

      <section className="section-pad">
        <div className="container-site">
          <Breadcrumbs items={[{ label: "About" }]} />
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                eyebrow="Experience"
                title="Built in agencies. Proven in-house. Sharpened as an independent."
              />
              <p className="mt-6 leading-relaxed text-muted">
                {aboutContent.experience}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="glass rounded-2xl p-6">
                  <h3 className="font-heading text-lg font-semibold">Mission</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {aboutContent.mission}
                  </p>
                </div>
                <div className="glass rounded-2xl p-6">
                  <h3 className="font-heading text-lg font-semibold">Vision</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {aboutContent.vision}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-background-secondary">
        <div className="container-site">
          <Reveal>
            <SectionHeading eyebrow="Values" title="What I optimize for" />
          </Reveal>
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aboutContent.values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-heading text-lg font-semibold">{v.title}</h3>
                  <p className="mt-3 text-sm text-muted">{v.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <Reveal>
            <SectionHeading eyebrow="Journey" title="Timeline" />
          </Reveal>
          <div className="relative mt-12 space-y-0">
            {aboutContent.timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.05}>
                <div className="grid gap-4 border-l border-border py-6 pl-8 md:grid-cols-[100px_1fr]">
                  <span className="font-heading text-accent">{item.year}</span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-background-secondary">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionHeading eyebrow="Skills" title="Capabilities" />
            </Reveal>
            <div className="mt-8 flex flex-wrap gap-2">
              {aboutContent.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <Reveal>
              <SectionHeading eyebrow="Certifications" title="Credentials" />
            </Reveal>
            <ul className="mt-8 space-y-3">
              {aboutContent.certifications.map((c) => (
                <li
                  key={c}
                  className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <Reveal>
            <SectionHeading eyebrow="Stack" title="Tools I use daily" />
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool.name}
                className="rounded-xl border border-border bg-card px-4 py-2 text-sm"
              >
                <span className="text-foreground">{tool.name}</span>
                <span className="ml-2 text-xs text-muted">{tool.category}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-background-secondary">
        <div className="container-site">
          <Reveal>
            <SectionHeading eyebrow="Fun facts" title={`Beyond the ${siteConfig.stats[0].value}+ projects`} />
          </Reveal>
          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2">
            {aboutContent.funFacts.map((fact) => (
              <StaggerItem key={fact}>
                <p className="rounded-2xl border border-border bg-card p-5 text-muted">
                  {fact}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
