import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";



const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref =  useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <LiIcon reference={ref}/>

      <motion.div initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type: "spring"}}>
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp; <a className="text-primary capitalize">@{company}</a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
const ref = useRef(null);
const {scrollYProgress} = useScroll(
    {
        target: ref,
        offset: ["start end", "center start"]
    }
);

  return (
    <div className="my-64">
      <h2 className="bold text-8xl mb-32 w-full text-center">Experience</h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div 
        style={{scaleY: scrollYProgress}}
        className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top" />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Software Developer"
            company="Yebelo Technologies Pvt Ltd."
            time="May 2023-April 2024"
            address="Bangalore"
            work="Proficiently created smart contracts using solidity and enforced robust test cases with the Brownie framework,
ensuring secure and efficient decentralized applications.
• Utilized Chainlink to integrate real-time external data, such as live exchange rates, into smart contracts,
enhancing their functionality and usability."
          />
          <Details
            position="Blockchain Developer"
            company="GetBoarded"
            time="April 2023-May 2023"
            address="Mountain View, CA"
            work="Demonstrated expertise in blockchain technology, evidenced by hands-on experience in writing smart
contracts and implementing the development of web3Storage.
• Proven ability in frontend development utilizing a diverse tech stack including ReactJS, JavaScript, Vue.js,
and TailwindCSS."
          />
          <Details
            position="Frontend Developer"
            company="Freelance"
            time="August 2022-March 2023"
            address="Mountain View, CA"
            work="Integrated web3 wallets with frontend using libraries.
• Developed intuitive user interfaces and integrated functionalities that allowed seamless interaction with
smart contracts."
          />
          <Details
            position="Blockchain Developer Intern"
            company="BlockX IT Solutions LLP"
            time="June 2022-July-2022"
            address="Remote"
            work="Worked on a team responsible for developing new features for Google's 
    search engine, including improving the accuracy and relevance of search results and 
    developing new tools for data analysis and visualization."
          />
          <Details
            position="Technical Content Writer"
            company="Freelance"
            time="March 2021-August 2022"
            address="Remote"
            work="Worked in Web3, Blockchain, and Cryptocurrency domains with 10+ individuals & startups to write
content for them."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
