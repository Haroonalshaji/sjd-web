import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

/** Site-wide content width — same max-width + gutters on every breakpoint. */
export function Container({ children, className }: ContainerProps) {
  return <div className={cn("container-site", className)}>{children}</div>;
}
