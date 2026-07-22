import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";
import { getServiceImage } from "@/data/services";
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
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_40px_-18px_rgba(0,114,214,0.45)]",
        featured && "md:p-0"
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-background-secondary">
        <Image
          src={getServiceImage(service.slug)}
          alt={`${service.shortTitle} — visual overview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/80 text-accent backdrop-blur-sm">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
      </div>

      <div className={cn("flex flex-1 flex-col p-6", featured && "md:p-8")}>
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
          <div>
            <span className="text-sm text-accent">
              {service.pricing ?? "Custom pricing"}
            </span>
            <span className="mt-0.5 block text-[11px] text-muted">
              INR · GST extra
            </span>
          </div>
          <span className="inline-flex items-center gap-1 text-sm text-foreground transition group-hover:text-accent">
            Learn more
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
