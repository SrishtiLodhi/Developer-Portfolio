import Link from "next/link";
import React, {useState} from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from "./Icon";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {

   const [mode, setMode] = useThemeSwitcher();

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        {/* <CustomLink href="/articles" title="Articles" className="ml-4" /> */}
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        {" "}
        <Logo />
      </div>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://www.linkedin.com/in/srishti-lodhi-b488b6222/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://github.com/SrishtiLodhi"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>

        <motion.a
          href="/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 ml-3"
        >
          <TwitterIcon />
        </motion.a>
        <button
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        className="ml-3 flex items-center justify-center rounded-full p-1"
        >
{
  mode === "dark" ? 
  <SunIcon className={"fill-dark"}/>
  : <MoonIcon className={"fill-dark"}/>
}
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
