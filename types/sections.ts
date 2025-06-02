export type SEODataType = {
  title: string;
  author?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords: string[];
};

// https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures

export type SocialLinksType = {
  [link: string]: string;
};

// * HERO SECTION

export type GreetingsType = {
  name: string;
  title: string;
  description?: string;
  resumeLink?: string;
};

// * SKILLS SECTION

type SoftwareSkillType = {
  skillName: string;
  iconifyTag: string;
};

type SkillType = {
  title: string;
  lottieAnimationFile: string;
  skills: React.ReactNode[] | string[];
  softwareSkills: SoftwareSkillType[];
};

export type SkillsSectionType = {
  title: string;
  subTitle: string;
  data: SkillType[];
};

// * PROFICIENCY SECTION

export type SkillBarsType = {
  Stack: string;
  progressPercentage: string;
  description?: string; // Descriptive value Novice, Beginner ,Junior, Intermediate,Proficient,Advanced ,Expert,Specialist ,Master
};

// * EDUCATION SECTION

export type EducationType = {
  schoolName: string;
  subHeader: string;
  duration: string;
  desc: string;
  grade?: string;
  descBullets?: string[];
};

// * EXPERIENCE SECTION

export type ExperienceType = {
  role: string;
  company: string;
  companyLogo: string;
  date: string;
  desc: string;
  descBullets?: string[];
};

// * PROJECT & GAMES SECTIONS

export type ProjectType = {
  name: string;
  desc: string;
  github?: string;
  link?: string;
  link2?: string;
  buttonText?: string;
  buttonText2?: string;
  image?: string;
  gif?: string;
  youtube?: string;
  newWindow: boolean;
  role?: string;
  whitespace?: number; // Number of lines of whitespace to add before/after the project TODO: Actually scale the card properly
  longDesc?: string; // Long description for project page
  images?: string[]; // Images for project page
  imagesText?: string[]; // Text for images in project page
  roleDescription?: string; // Description of the role in the project
};

// * FEEDBACK SECTION

export type FeedbackType = {
  name: string;
  role: string;
  feedback: string;
};
