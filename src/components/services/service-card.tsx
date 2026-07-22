import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  featured = false,
}: {
  service: Service;
  featured?: boolean;
}) {
  const Icon = service.icon;

  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_40px_-18px_rgba(0,114,214,0.45)]",
        featured && "md:p-8"
      )}
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-accent transition group-hover:bg-primary/20">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h3 className="font-heading text-xl font-semibold tracking-tight">
        {service.shortTitle}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {service.description}
      </p>
      <ul className="mt-5 space-y-2">
        {service.benefits.slice(0, 3).map((b) => (
          <li key={b} className="flex gap-2 text-sm text-muted">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {b}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <span className="text-sm text-accent">
          {service.pricing ?? "Custom pricing"}
        </span>
        <span className="inline-flex items-center gap-1 text-sm text-foreground transition group-hover:text-accent">
          Learn more
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
