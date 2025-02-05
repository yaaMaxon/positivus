import searchImg from "@assets/img/search.webp";
import payPerClickImg from "@assets/img/payPerClick.webp";
import socialMediaImg from "@assets/img/socialMedia.webp";
import emailImg from "@assets/img/email.webp";
import contentImg from "@assets/img/content.webp";
import analyticsImg from "@assets/img/analytics.webp";
import ArrowBlackIcon from "@assets/icons/arrowBlack.svg";

export const servicesList = [
  {
    src: analyticsImg,
    alt: "Analytics",
    firstText: "Analytics and",
    secondText: "Tracking",
    icon: <ArrowBlackIcon />,
  },
  {
    src: payPerClickImg,
    alt: "Pay-per-click",
    firstText: "Pay-per-click",
    secondText: "advertising",
    icon: <ArrowBlackIcon />,
  },
  {
    src: socialMediaImg,
    alt: "Social Media",
    firstText: "Social Media",
    secondText: "Marketing",
    icon: <ArrowBlackIcon />,
  },
  {
    src: emailImg,
    alt: "Email",
    firstText: "Email",
    secondText: "Marketing",
    icon: <ArrowBlackIcon />,
  },
  {
    src: contentImg,
    alt: "Content",
    firstText: "Content",
    secondText: "Creation",
    icon: <ArrowBlackIcon />,
  },
  {
    src: searchImg,
    alt: "Search engine",
    firstText: "Search engine",
    secondText: "optimization",
    icon: <ArrowBlackIcon />,
  },
];
