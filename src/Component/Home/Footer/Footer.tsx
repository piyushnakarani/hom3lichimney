import Container from "@/Custom/Container";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaXTwitter, FaRss, FaPinterestP } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-[#031b2a] text-white overflow-hidden">
      {/* YELLOW BORDER (TOP MOST) */}
      <div className="absolute top-0.1 left-0 w-full h-1 lg:h-[6px] bg-yellow-400 z-10" />

      {/* WHITE SHAPE (BELOW BORDER) */}
      <div className="absolute top-0 left-0 w-[60%] h-[20px] lg:h-[70px] z-20 pointer-events-none">
        <Image
          src="/Hero/FooterShape.png"
          alt="Footer Shape"
          fill
          className="object-contain object-left"
          priority
        />
      </div>

      {/* CONTENT */}
      <Container className="relative z-10 py-14 lg:pt-26 lg:pb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Image src="/Hero/logo.png" alt="Hom3li" width={150} height={50} />
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4">
            {[FaFacebookF, FaXTwitter, FaRss, FaPinterestP].map((Icon, i) => (
              <span
                key={i}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black hover:bg-primary transition"
              >
                <Icon />
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="text-center md:text-right space-y-2 text-sm">
            <div className="flex justify-center md:justify-end gap-3">
              <Link
                href="/privacy-policy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>

              <span>|</span>

              <Link
                href="/terms-and-conditions"
                className="hover:text-primary transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>

            <p className="text-white/80">© 2025. All Rights Reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
