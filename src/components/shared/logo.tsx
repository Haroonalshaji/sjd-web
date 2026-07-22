import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";

type LogoProps = {
  className?: string;
  priority?: boolean;
  href?: string;
};

export function Logo({ className, priority = false, href = "/" }: LogoProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex shrink-0 items-center transition opacity-95 hover:opacity-100",
        className
      )}
      aria-label={`${siteConfig.fullName} home`}
    >
      <Image
        src="/logo.png"
        alt={`${siteConfig.name} — ${siteConfig.title}`}
        width={342}
        height={121}
        priority={priority}
        className="h-9 w-auto sm:h-10 md:h-11"
      />
    </Link>
  );
}
