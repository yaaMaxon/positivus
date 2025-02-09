import searchImg from "@assets/img/search.webp";
import payPerClickImg from "@assets/img/payPerClick.webp";
import socialMediaImg from "@assets/img/socialMedia.webp";
import emailImg from "@assets/img/email.webp";
import contentImg from "@assets/img/content.webp";
import analyticsImg from "@assets/img/analytics.webp";
import LinkIcon from "@assets/icons/linkIcon.svg";

export const servicesList = [
  {
    src: searchImg,
    alt: "Search engine",
    firstText: "Search engine",
    secondText: "optimization",
    bgColor: "bg-gray",
    bgTextColor: "bg-green",
    learnMore: "text-black",
    icon: <LinkIcon className="fill-dark text-green" />,
    path: "/services#search-engine",
  },
  {
    src: payPerClickImg,
    alt: "Pay-per-click",
    firstText: "Pay-per-click",
    secondText: "advertising",
    bgColor: "bg-green",
    bgTextColor: "bg-white",
    learnMore: "text-black",
    icon: <LinkIcon className="fill-dark text-green" />,
    path: "/pricing",
  },
  {
    src: socialMediaImg,
    alt: "Social Media",
    firstText: "Social Media",
    secondText: "Marketing",
    bgColor: "bg-dark",
    bgTextColor: "bg-white",
    learnMore: "text-white",
    icon: <LinkIcon className="fill-white text-dark" />,
    path: "/about-us#awards",
  },
  {
    src: emailImg,
    alt: "Email",
    firstText: "Email",
    secondText: "Marketing",
    bgColor: "bg-gray",
    bgTextColor: "bg-green",
    learnMore: "text-black",
    icon: <LinkIcon className="fill-dark text-green" />,
    path: "/#testimonials",
  },
  {
    src: contentImg,
    alt: "Content",
    firstText: "Content",
    secondText: "Creation",
    bgColor: "bg-green",
    bgTextColor: "bg-white",
    learnMore: "text-black",
    icon: <LinkIcon className="fill-dark text-green" />,
    path: "/blog",
  },
  {
    src: analyticsImg,
    alt: "Analytics",
    firstText: "Analytics and",
    secondText: "Tracking",
    bgColor: "bg-dark",
    bgTextColor: "bg-green",
    learnMore: "text-white",
    icon: <LinkIcon className="fill-white text-dark" />,
    path: "/services#seo-process",
  },
];
