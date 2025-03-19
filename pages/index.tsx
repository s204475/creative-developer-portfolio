import dynamic from "next/dynamic";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Games = dynamic(() => import("../containers/Games"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() => import("../components/GithubProfileCard"));
import JumpTo from "../components/JumpTo";
import { openSource } from "../portfolio";
import SEO from "../components/SEO";
import { GithubUserType } from "../types";
import { useRef } from "react";

export default function Home({ githubProfileData }: { githubProfileData: any }) {
  const projectsRef = useRef<HTMLDivElement>(null);
  const gamesRef = useRef<HTMLDivElement>(null);
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings />
      <JumpTo projectsRef={projectsRef} gamesRef={gamesRef} />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      <Feedbacks />
      <div ref={projectsRef} />
      <Projects />
      <div ref={gamesRef} />
      <Games />
      <GithubProfileCard {...githubProfileData} />
    </div>
  );
}

// Home.prototype = {
//   githubProfileData: PropTypes.object.isRequired,
// };

export async function getStaticProps() {
  const githubProfileData: GithubUserType = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then(res => res.json());

  return {
    props: { githubProfileData },
  };
}
