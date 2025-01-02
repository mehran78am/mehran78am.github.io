import Logo from "../assets/mehran.jpg";
import Resume from "../assets/MehranMokhtari-Resume.pdf";
export interface icon {
  id: number;
  href: string;
  classIcon: string;
}

export const logoImg: string = Logo;
export const myResume: string = Resume;
export const SocialIcon: icon[] = [
  {
    id: 1,
    href: "https://t.me/mehran78am",
    classIcon: "fa fa-telegram",
  },
  {
    id: 2,
    href: "https://instagram.com/mehran78am",
    classIcon: "fa fa-instagram",
  },
  {
    id: 3,
    href: "https://linkedin.com/in/mehran78am",
    classIcon: "fa fa-linkedin",
  },
  {
    id: 4,
    href: "https://github.com/mehran78am",
    classIcon: "fa fa-github",
  },
  {
    id: 5,
    href: "mailto:mehran78am@gmail.com",
    classIcon: "fa fa-envelope",
  },
];
