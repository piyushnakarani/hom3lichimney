// src/components/HeroTitle.tsx
import { oswald } from "@/app/fonts";

interface HeroTitleProps {
  title: string;
  className?: string;
}

export default function HeroTitle({ title, className }: HeroTitleProps) {
  return (
    <h1
      className={`${oswald.className}
      leading-none 
      tracking-[-0.02em] 
      uppercase
      bg-gradient-to-b from-white/15 to-black/15
      bg-clip-text text-transparent
      ${className ?? ""}
    `}
    >
      {title}
    </h1>
  );
}
