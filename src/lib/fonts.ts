import { PT_Sans, Bebas_Neue } from "next/font/google";

export const ptSans = PT_Sans({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
});

export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
});
