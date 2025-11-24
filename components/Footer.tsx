import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const navLinks = [
  { title: "Home", link: "/" },
  { title: "Skills", link: "#skills" },
  { title: "About", link: "#about" },
  { title: "Projects", link: "#projects" },
  { title: "Contact", link: "#contact" },
];

const footerSocials = [
  {
    name: "Facebook",
    icon: "ri-facebook-circle-fill min-[350px]:text-xl text-lg",
    link: "",
    color: "",
  },
  {
    name: "Instagram",
    icon: "ri-instagram-line min-[350px]:text-xl text-lg",
    link: "",
    color: "",
  },
  {
    name: "Github",
    icon: "ri-github-fill min-[350px]:text-xl text-lg",
    link: "https://github.com/CodyK-779",
    color: "",
  },
  {
    name: "LinkedIn",
    icon: "ri-linkedin-box-fill min-[350px]:text-xl text-lg",
    link: "",
    color: "",
  },
];

const iconContainer =
  "flex items-center justify-center min-[350px]:size-10 size-9 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 cursor-pointer hover:scale-110 transition-transform duration-300 ease-out";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="w-full py-8 border-t border-white/10 bg-black/10 backdrop-blur-sm">
      <div className="max-container w-full grid lg:grid-cols-3 grid-cols-1 gap-5 items-center justify-between">
        <div className="flex flex-col lg:text-left text-center gap-1">
          <p className="text-sm font-medium text-neutral-300">
            © {currentYear} Khant Zaw Thein
          </p>
          <p className="text-xs text-neutral-400">
            Crafting digital experiences with modern tech
          </p>
        </div>
        <div className="flex items-center justify-center gap-3.5">
          {footerSocials.map((icon) => (
            <Tooltip key={icon.name} delayDuration={0}>
              <TooltipTrigger>
                <a href={icon.link}>
                  <div className={iconContainer}>
                    <i className={icon.icon}></i>
                  </div>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-medium">{icon.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
        <ul className="flex items-center gap-4 min-[350px]:text-sm text-xs font-medium lg:justify-end justify-center">
          {navLinks.map((link) => (
            <Link href={link.link} key={link.title}>
              <li className="text-neutral-300 hover:text-blue-600 transition-colors duration-200 ease-in">
                {link.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Footer;
