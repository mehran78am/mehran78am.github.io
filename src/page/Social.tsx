import { SocialIcon } from "../data/data";

const Social: React.FC = () => {
  return SocialIcon.map((item, index: number) => {
    return (
      <a
        href={item.href}
        key={index}
        className="transition hover:scale-110 hover:text-blue-400"
      >
        <i className={item.classIcon}></i>
      </a>
    );
  });
};

export default Social;
