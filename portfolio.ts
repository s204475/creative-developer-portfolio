import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

/**
 * TODO: Certificate
 * TODO: Winner of DTU Innovation Challenge in course "42501 Innovation in Engineering" (representing Hempel)
 * TODO: Better skills showcase
 * TODO: Midnight snack
 */

export const greetings: GreetingsType = {
  name: "Victor Gustav Harbo Rasmussen",
  title: "Hello there, I'm Victor",
  description:
    "I'm a developer with a passion and flair for project management and creative processes. Keep scrolling to explore my work and skills.",
  resumeLink: "/Victor G. H. Rasmussen CV (Danish).pdf",
};

export const openSource = {
  githubUserName: "s204475",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:vicra@dtu.dk",
  linkedin: "https://www.linkedin.com/in/victor-harbo-rasmussen-473889185/",
  github: "https://github.com/s204475",
  //instagram: "",
  // facebook: '',
  // twitter: '',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "Passionate software engineer (in-the-making) with a drive to make professional video games",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/Programming.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Making creative and user-friendly applications both for entertainment and productivity"),
        emoji("🥇 Building performant and scalable applications on multiple platforms"),
      ],
      softwareSkills: [
        {
          skillName: "CSharp",
          iconifyTag: "vscode-icons:file-type-csharp",
        },
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Git and Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Latex",
          iconifyTag: "simple-icons:latex",
        },
        {
          skillName: "Unity",
          iconifyTag: "logos:unity",
        },
        {
          skillName: "Excel",
          iconifyTag: "vscode-icons:file-type-excel",
        },
        {
          skillName: "CSS",
          iconifyTag: "logos:css-3",
        },
        {
          skillName: "Wordpress",
          iconifyTag: "logos:wordpress",
        },
        {
          skillName: "C",
          iconifyTag: "logos:c",
        },
        {
          skillName: "Java",
          iconifyTag: "logos:java",
        },
        {
          skillName: "HTML",
          iconifyTag: "logos:html-5",
        },
        {
          skillName: "Vue",
          iconifyTag: "logos:vue",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  { Stack: "Programming (C#, c, Python, Java and more)", progressPercentage: "90", description: "Expert" },
  { Stack: "Full Unity Pipeline", progressPercentage: "90", description: "Expert" },
  { Stack: "Video Editing (HitFilm, Premiere Pro)", progressPercentage: "85", description: "Advanced" },
  { Stack: "Project Management (ClickUp, Notion, Miro)", progressPercentage: "80", description: "Advanced" },
  { Stack: "Design Prototyping (Figma)", progressPercentage: "80", description: "Advanced" },
  //{ Stack: "Maple", progressPercentage: "75", description: "Proficient" },
  { Stack: "Photoshop", progressPercentage: "70", description: "Proficient" },
  { Stack: "Frontend", progressPercentage: "65", description: "Proficient" },
  { Stack: "Godot", progressPercentage: "60", description: "Intermediate" },
  { Stack: "Blender", progressPercentage: "50", description: "Intermediate" },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Danish Technical University (DTU)",
    subHeader: "Master of Science in Computer Science (Human-Centered AI)",
    duration: "January 2024 - June 2026 (Ongoing)",
    desc: "",
    grade: "Grade average 11.30",
    descBullets: [
      "Computer Game Programming Fundamentals (DADIU)",
      "Computer Game Programming in a Production (DADIU)",
      "Computer vision",
      "Creating digital visual experiences",
      "Innovation in engineering",
      "Generative Methods for Computer Graphics",
      "Social Data Analysis and Visualization",
    ],
  },
  {
    schoolName: "Danish Technical University (DTU) ",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "August 2021 - December 2024",
    desc: "",
    grade: "Grade average 7.38",
    descBullets: [
      "Project Management",
      "User experience engineering",
      "UX design prototyping",
      "Algorithms and Data Structures",
      "Concurrent programming",
      //"Rendering",
      "Introduction to machine learning and data mining",
      "Introduction to Artificial Intelligence",
      "Advanced engineering mathematics",
      "Software Engineering",
      //"Operating Systems",
      //"Introduction to mathematical statistics",
      //"Computer science modelling",
      //"Image analysis",
      //"Discrete Mathematics",
      //"Database systems",
      //"Functional Programming",
      //"Computer systems",
      //"Translating spreadsheets into maintainable software",
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Lead Programmer",
    company: "DADIU (Danish Academy of Digital, Interactive Entertainment)",
    companyLogo: "/img/icons/common/DADIU Black Grayscale.png",
    date: "August 2024 - January 2024",
    desc: "A cross-disciplanary production with numerous Danish universities where we, as a team of 14, produced 2 full games.",
  },
  {
    role: "Student assistant",
    company: "INNO-CCUS",
    companyLogo: "/img/icons/common/INNO-CCUS.png",
    date: "Aug 2024 - Present",
    desc: "Excel automation, Python app development, Wordpress website development, and more. I've been working on a variety of projects related to web, Excel and event planning.",
  },
  {
    role: "Teaching assistant",
    company: "DTU (Department of Engineering Technology and Didactics)",
    companyLogo: "/img/icons/common/DTU red.png",
    date: "Jan 2023 - Present",
    desc: "Assist in teaching the course by preparing and conducting exercises, grading assignments, and providing feedback to students.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
];

export const projects: ProjectType[] = [
  {
    name: "National project overview: State of CCUS",
    desc: "A digital platform that allows you to explore CCUS (carbon capture, storage and utilisation) projects interactively by browsing, searching, and sorting research projects.",
    link: "https://inno-ccus.dk/project-overview/",
    buttonText: "Explore projects",
    newWindow: true,
  },
  {
    name: "Project Game",
    desc: '"Project Game" is an online simulation of various project management scenarios, where you can test your project management skills. Used yearly by hundreds of students at DTU in various courses.',
    link: "https://v2202303182271221643.ultrasrv.de/",
    buttonText: "Try the demo",
    newWindow: true,
  },
  {
    name: "Creative Developer Portfolio",
    desc: "This very site. A software developer portfolio built with react.js and next.js bootstrap meant to showcase my work.",
    link: "http://kcw8400ksgwocw8cs0owsg4s.188.245.93.175.sslip.io/",
    buttonText: "Reload this page",
    newWindow: false,
  },
];

export const games: ProjectType[] = [
  {
    name: "End Transmission?",
    desc: "Music management puzzle game with a gripping story and unique gameplay mechanics where players get to mix their own music in a world that is slowly fading away.",
    link: "https://store.steampowered.com/app/3426490/End_Transmission/",
    buttonText: "Play for Free on Steam",
    link2: "https://www.youtube.com/watch?v=mu_uweJRkYo&ab_channel=TeamTallTrees",
    buttonText2: "Watch the Trailer",
    gif: "./gifs/mixing.gif",
    newWindow: true,
    role: "Lead Programmer",
  },
  {
    name: "The Unwelcome",
    desc: "An exploration thriller telling the story of a photographer trying to figure out what happened in a old garden many years ago where children were going missing.",
    gif: "./gifs/UnwelcomeCamera.gif",
    link: "https://patricia-blaymo.itch.io/the-unwelcome",
    buttonText: "Play for Free on Itch",
    newWindow: true,
    role: "Lead Programmer",
  },
  {
    name: "Midnight Snack",
    desc: "A VR horror game where you have to fight back against a monster chef trying to eat you.",
    link: "https://dreunin.itch.io/midnight-snack",
    buttonText: "Play for Free on Itch",
    gif: "./gifs/MidnightSnack.gif",
    newWindow: true,
    role: "Developer",
  },
  {
    name: "Tooth Pick",
    desc: "Play as a the mouse Dave who is a down-on-his-luck toothfairy. Resort to desperate measures to meet your quota and not get fired.",
    link: "https://dreunin.itch.io/tooth-pick",
    buttonText: "Play for Free on Itch",
    gif: "./gifs/ToothPick.gif",
    newWindow: true,
    role: "Developer",
  },
  {
    name: "Post the Most",
    desc: "A frantic mail sorting game that will test your skills and your nerves. Developed for Ludum Dare 53 Game jam and placed in top 33%.",
    link: "https://ldjam.com/events/ludum-dare/53/post-the-most",
    buttonText: "Play on Ludum Dare",
    gif: "./gifs/PostTheMost.gif",
    newWindow: true,
    role: "Developer",
  },
  /*{
    name: "Lyngbyvej",
    desc: "An in-person escape room game. The game area is my own fully modeled apartment and the player needs clues placed in the real world to solve in-game puzzles which means it cannot be played remotely. Made as a gift for my better half.",
    //gif: "./gifs/Lyngbyvej.gif" //TODO: Add gif
    newWindow: true,
    role: "Sole developer",
  },
  {
    name: "Tons of prototypes",
    desc: "I have made more prototypes and proof of concepts than I can count. Some examples are shown below.",
    //gif: "./gifs/Prototypes.gif", //TODO: add gif
    newWindow: true,
    role: "Sole developer",
  },*/
];

export const feedbacks: FeedbackType[] = [];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Victor G. H. Rasmussen - Portfolio",
  description: greetings.description,
  author: "Victor G. H. Rasmussen",
  image: "./img/Profile.png",
  //url: "", //TODO: update url
  keywords: [
    "Victor Gustav Harbo Rasmussen",
    "Victor Harbo Rasmussen",
    "@dreunin",
    "@s204475",
    "Portfolio",
    "Victor Rasmussen Portfolio ",
  ],
};
