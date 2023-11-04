import Photo from "./assets/test.png";
import LinkButton from "./components/LinkButton";
import { SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";
import {
  TbNotebook,
  TbWorld,
  TbUser,
  TbBrandGithub,
  TbStack2,
  TbNotes,
} from "react-icons/tb";
import Switcher from "./components/Switcher";
import { HeaderLinkProps, LinkDataProps } from "./types";

function App() {
  const headerLinks: HeaderLinkProps[] = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/orhan-emirhan-ulkatan-8b84b1150/",
      icon: <SlSocialLinkedin />,
    },
    {
      name: "Twitter",
      link: "https://twitter.com/ulkatanemirhan",
      icon: <SlSocialTwitter />,
    },
  ];

  const linksData: LinkDataProps[] = [
    {
      name: "GitHub",
      link: "https://github.com/OrhanEmirhanUlkatan",
      icon: <TbBrandGithub className=" text-[35px]" />,
    },
    {
      name: "Dev.to",
      link: "https://dev.to",
      icon: <TbStack2 className=" text-[35px]" />,
    },
    {
      name: "Hashnode",
      link: "https://hashnode.com",
      icon: <TbNotebook className=" text-[35px]" />,
    },
    {
      name: "Medium",
      link: "https://medium.com/",
      icon: <TbNotes className=" text-[35px]" />,
    },
    {
      name: "My Portfolio",
      link: "https://portfolio-six-sable-84.vercel.app/",
      icon: <TbWorld className=" text-[35px]" />,
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center mx-3 my-12 md:mx-12 bg-red ">
      <Switcher />
      <img className=" h-24 rounded-full" src={Photo} alt="gateremark" />
      <p className="dark:text-[#fff]  text-[#000] my-3 text-lg font-bold">
        @ulkatanorhanemirhan
      </p>
      <p className="dark:text-[#fff] text-[#000] text-base text-center">
        | MERN Stack | Frontend Developer | #foreverlearner
      </p>
      <div className="flex dark:text-[#fff] text-[#000] text-3xl gap-5 my-7 justify-center items-center">
        {headerLinks.map((data, index) => (
          <a
            key={index}
            className="hover:scale-110 transition duration-150 hover:text-[#2867b2] cursor-pointc"
            href={data.link}
            target="_blank"
            rel="noopener"
          >
            {" "}
            {data.icon}{" "}
          </a>
        ))}
      </div>
      <div className="text-[#BDBDBD] flex flex-col gap-5 md:w-[55%] w-full items-center justify-center">
        {linksData.map((data, index) => (
          <LinkButton {...data} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
