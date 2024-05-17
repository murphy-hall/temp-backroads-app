import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "Home" },
  { id: 2, href: "#about", text: "About" },
  { id: 3, href: "#services", text: "Services" },
  { id: 4, href: "#tours", text: "Tours" },
];

export const socialLinks = [
  {
    id: 1,
    href: "https://www.twitter.com",
    target: "_blank",
    icon: "fab fa-twitter",
  },
  {
    id: 1,
    href: "https://www.twitter.com",
    target: "_blank",
    icon: "fab fa-facebook",
  },
  {
    id: 1,
    href: "https://www.twitter.com",
    target: "_blank",
    icon: "fab fa-squarespace",
  },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    info: "Right nice, well good trip",
    location: "China",
    duration: 6,
    cost: 2100,
  },
  {
    id: 1,
    image: tour2,
    date: "october 1th, 2020",
    title: "best of java",
    info: "Right nice, properly worth it",
    location: "Indonesia",
    duration: 11,
    price: 1400,
  },
  {
    id: 1,
    image: tour3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    info: "10/10 would recommend",
    location: "Hong Kong",
    duration: 8,
    price: 5000,
  },
  {
    id: 1,
    image: tour4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    info: "10/10 would recommend",
    location: "Kenya",
    duration: 20,
    price: 3300,
  },
];
