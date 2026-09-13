import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type BaseProps = { children: ReactNode; variant?: "primary" | "secondary" | "quiet"; className?: string };
type LinkButtonProps = BaseProps & { href: string; external?: boolean };
type NativeButtonProps = BaseProps & ComponentProps<"button">;

const classFor = (variant: NonNullable<BaseProps["variant"]>, className?: string) =>
  `${variant === "primary" ? "button-primary" : variant === "secondary" ? "button-secondary" : "button-quiet"} ${className ?? ""}`;

export function LinkButton({ href, external, children, variant = "primary", className }: LinkButtonProps) {
  const styles = classFor(variant, className);
  if (external) return <a href={href} target="_blank" rel="noreferrer" className={styles}>{children}</a>;
  return <Link href={href} className={styles}>{children}</Link>;
}

export function Button({ children, variant = "primary", className, ...props }: NativeButtonProps) {
  return <button {...props} className={classFor(variant, className)}>{children}</button>;
}
