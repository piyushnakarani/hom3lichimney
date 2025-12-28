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

interface CornerShapeProps {
  className?: string;
  color?: string;
  IsBottom?: boolean;
}
export default function CornerShape({
  className,
  color,
  IsBottom,
}: CornerShapeProps) {
  return (
    <>
      {IsBottom ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          viewBox="0 0 108 108"
          fill="none"
        >
          <path
            d="M108 108H0C16.5685 108 30 94.5685 30 78V60C30 43.4315 43.4315 30 60 30H78C94.5685 30 108 16.5685 108 0V108Z"
            fill={color}
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          viewBox="0 0 108 108"
          fill="none"
        >
          <path
            d="M108 0H0C16.5685 0 30 13.4315 30 30V48C30 64.5685 43.4315 78 60 78H78C94.5685 78 108 91.4315 108 108V0Z"
            fill={color}
          />
        </svg>
      )}
    </>
  );
}

export const services = [
  {
    /* =========================
       🔹 REQUIRED (ALWAYS)
       Used for:
       - Homepage cards
       - Routing
       - SEO basics
    ========================= */
    slug: "chimney-cap-installation",
    title: "CHIMNEY CAP INSTALLATION",
    desc: "Stop animals, rain, and debris from damaging your chimney with professionally installed chimney caps.",
    image: "/Service/chimney.png",

    /* =========================
       🔹 SERVICE HERO
       Used in: <ServiceHero />
    ========================= */
    hero: {
      bgImage: "/ServiceDetails/ChimneyCap.png",
      badge: "Service Details",
      headingPrimary: "Chimney Cap",
      headingSecondary: "Installation",
      shortDesc:
        "The #1 Way to Stop Animals, Rain, and Debris from Destroying Your Chimney. An open flue is an open invitation to costly damage.",
      bigText: "Chimney Cap",
    },

    /* =========================
       🔹 SERVICE ABOUT
       Used in: <ServiceAbout />
    ========================= */
    about: {
      titlePrimary: "The #1 Way to Stop Animals, Rain, and",
      titleHighlight: "Debris from Destroying Your Chimney",
      paragraphs: [
        "An open flue is an open invitation: squirrels, birds, raccoons, leaves, and gallons of rainwater pour straight in. That means ruined dampers, rusted liners, cracked crowns, and thousands in repairs.",
        "A properly fitted chimney cap ends all of that—permanently.",
      ],
      images: {
        main: "/ServiceDetails/ChimneyCap1.png",
        overlay: "/ServiceDetails/ChimneyCap2.png",
      },
    },

    /* =========================
       🔹 SERVICE DETAILS
       Used in: <ServiceDetails />
    ========================= */
    details: {
      leftCard: {
        title:
          "Hom3li installs only heavy-duty, American-made stainless steel or copper caps built to last a lifetime:",
        points: [
          "Custom-measured and fabricated for your exact flue size and shape (single-flue, multi-flue, oval, or round)",
          'Animal-proof ¾" mesh that still allows perfect drafting',
          "Lifetime warranty caps available",
          "Includes professional mounting with stainless screws and sealant—no cheap clamps that loosen in the wind",
          "Same-day or next-day installation in most cases",
        ],
      },
      rightCard: {
        title: "What We Served?",
        points: [
          "We serve Lakewood, Brick, Toms River, Howell, Jackson, Manalapan, and all of Ocean & Monmouth Counties.",
          "CSIA-Certified Installers",
          "Fully Licensed & Insured",
          "10-Year Installation Warranty",
          "One small investment today prevents thousands in damage tomorrow.",
          "Call Hom3li or book online — open 7 days.",
          "Keep wildlife out, keep water out, keep your chimney safe.",
        ],
      },
    },
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
