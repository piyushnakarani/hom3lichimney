export const NavLinks = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "About Us",
    url: "/#aboutus",
  },
  {
    id: 3,
    name: "What We Offer",
    url: "/#work",
  },
  {
    id: 4,
    name: "Why Customers Love Us",
    url: "/#whychoose",
  },
  {
    id: 5,
    name: "How It Works",
    url: "/#howwork",
  },
  {
    id: 6,
    name: "Download App",
    url: "/#download",
  },
];

export const services = [
  {
    slug: "chimney-animal-removal",
    title: "CHIMNEY ANIMAL REMOVAL",
    desc: "Safe and humane animal removal from chimneys.",
    image: "/Service/chimney.png",
  },
  {
    slug: "chimney-bricks-repair",
    title: "CHIMNEY BRICKS REPAIR",
    desc: "Fix cracked or damaged chimney bricks.",
    image: "/Service/chimney.png",
  },
  {
    slug: "chimney-cap-installation",
    title: "CHIMNEY CAP INSTALLATION",
    desc: "The #1 way to stop animals, rain, and debris.",
    image: "/Service/chimney.png",
  },
  {
    slug: "chimney-cap-repair",
    title: "CHIMNEY CAP REPAIR",
    desc: "Restore damaged chimney caps.",
    image: "/Service/chimney.png",
  },
  {
    slug: "chimney-chase-covering",
    title: "CHIMNEY CHASE COVERING",
    desc: "Protect chimney chase from water damage.",
    image: "/Service/chimney.png",
  },
  {
    slug: "chimney-construction",
    title: "CHIMNEY CONSTRUCTION",
    desc: "Full chimney construction services.",
    image: "/Service/chimney.png",
  },
];

interface CornerShapeProps {
  className?: string;
  color?: string;
}
export default function CornerShape({
  className,
  color,
}: CornerShapeProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 108 108"
      fill="none"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        d="M108 0H0C16.5685 0 30 13.4315 30 30V48C30 64.5685 43.4315 78 60 78H78C94.5685 78 108 91.4315 108 108V0Z"
        fill={color}
      />
    </svg>
  );
}
