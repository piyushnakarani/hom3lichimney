// src/components/HeroTitle.tsx
import { oswald } from "@/app/fonts";

interface HeroTitleProps {
  title: string;
  className?: string;
  TextclassName?: string;
}

export default function HeroTitle({ title, className,TextclassName  }: HeroTitleProps) {
  return (
    <div className={className}>
    <h1 className={`${TextclassName} ${oswald.className} font-bold
               bg-gradient-to-b from-gray-400/20 to-transparent
               bg-clip-text text-transparent uppercase`}>
      {title}
    </h1>
  </div>
  );
}
