interface NavType {
  title: string;
  href: string;
}

interface servicesType {
  title: string;
  img: string;
  text: string;
}

// navLinks object for header
export const navLinks: NavType[] = [
  { title: "Home", href: "home" },
  { title: "About", href: "about" },
  { title: "Solutions", href: "solutions" },
  { title: "Services", href: "services" },
  { title: "Projects", href: "projects" },
  { title: "Contact", href: "contact" },
];

// import images
import WebDesign from "./assets/pngegg.png";
import GraphicDesign from "./assets/pngegg (1).png";
import SoftwareDev from "./assets/pngegg (2).png";
import ITSupport from "./assets/pngegg (3).png";
import DigiMarketing from "./assets/pngegg (4).png";
import SocialMedia from "./assets/pngegg (5).png";
// our services object
export const ourServices: servicesType[] = [
  {
    img: WebDesign,
    title: "Website Designing",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi aspernatur tempora libero atque nobis deserunt omnis officiis nam, sed fugiat eaque recusandae iusto ipsum culpa veniam saepe quia sapiente perferendis!",
  },
  {
    img: GraphicDesign,
    title: "Website Designing",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi aspernatur tempora libero atque nobis deserunt omnis officiis nam, sed fugiat eaque recusandae iusto ipsum culpa veniam saepe quia sapiente perferendis!",
  },
  {
    img: SoftwareDev,
    title: "Website Designing",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi aspernatur tempora libero atque nobis deserunt omnis officiis nam, sed fugiat eaque recusandae iusto ipsum culpa veniam saepe quia sapiente perferendis!",
  },
  {
    img: ITSupport,
    title: "Website Designing",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi aspernatur tempora libero atque nobis deserunt omnis officiis nam, sed fugiat eaque recusandae iusto ipsum culpa veniam saepe quia sapiente perferendis!",
  },
  {
    img: DigiMarketing,
    title: "Website Designing",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi aspernatur tempora libero atque nobis deserunt omnis officiis nam, sed fugiat eaque recusandae iusto ipsum culpa veniam saepe quia sapiente perferendis!",
  },
  {
    img: SocialMedia,
    title: "Website Designing",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi aspernatur tempora libero atque nobis deserunt omnis officiis nam, sed fugiat eaque recusandae iusto ipsum culpa veniam saepe quia sapiente perferendis!",
  },
];
