import searchImg from "@assets/img/search.webp";
import payPerClickImg from "@assets/img/payPerClick.webp";
import socialMediaImg from "@assets/img/socialMedia.webp";
import emailImg from "@assets/img/email.webp";
import contentImg from "@assets/img/content.webp";
import analyticsImg from "@assets/img/analytics.webp";
import LinkIcon from "@assets/icons/linkIcon.svg";

export const servicesList = [
  {
    src: analyticsImg,
    alt: "Analytics",
    firstText: "Analytics and",
    secondText: "Tracking",
    icon: <LinkIcon className="fill-dark text-green" />,
  },
  {
    src: payPerClickImg,
    alt: "Pay-per-click",
    firstText: "Pay-per-click",
    secondText: "advertising",
    icon: <LinkIcon className="fill-dark text-green" />,
  },
  {
    src: socialMediaImg,
    alt: "Social Media",
    firstText: "Social Media",
    secondText: "Marketing",
    icon: <LinkIcon className="fill-dark text-green" />,
  },
  {
    src: emailImg,
    alt: "Email",
    firstText: "Email",
    secondText: "Marketing",
    icon: <LinkIcon className="fill-dark text-green" />,
  },
  {
    src: contentImg,
    alt: "Content",
    firstText: "Content",
    secondText: "Creation",
    icon: <LinkIcon className="fill-dark text-green" />,
  },
  {
    src: searchImg,
    alt: "Search engine",
    firstText: "Search engine",
    secondText: "optimization",
    icon: <LinkIcon className="fill-dark text-green" />,
  },
];
