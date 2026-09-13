import { Reveal } from "@/components/ui/Reveal";

type SectionHeadingProps = { eyebrow?: string; title: React.ReactNode; copy?: string; align?: "left" | "center"; className?: string };

export function SectionHeading({ eyebrow, title, copy, align = "left", className = "" }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={`${centered ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow ? <p className={`eyebrow ${centered ? "justify-center" : ""}`}>{eyebrow}</p> : null}
      <h2 className={`section-title ${centered ? "mx-auto" : ""}`}>{title}</h2>
      {copy ? <p className={`section-copy ${centered ? "mx-auto" : ""}`}>{copy}</p> : null}
    </Reveal>
  );
}
