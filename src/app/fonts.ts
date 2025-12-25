import { Manrope, Oswald } from "next/font/google";

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500"],
});
