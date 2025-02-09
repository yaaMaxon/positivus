import { StaticImageData } from "next/image";

export interface ServicesItems {
  src: string | StaticImageData;
  alt: string;
  firstText: string;
  secondText: string;
  bgColor?: string;
  bgTextColor?: string;
  learnMore?: string;
  icon: React.ReactNode;
  path: string;
}