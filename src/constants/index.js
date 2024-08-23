import {
  dart,
  mysql,
  python,
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  arbisoft,
  bytewise,
  threejs,
  flutter,
  firebase,
  gdsccui,
  flutterisb,
  tedxcui,
  agrobridge,
  cuionline,
  rahbarz,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "volunteering",
    title: "volunteering",
  }

];

const services = [
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "DevOps Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "dart",

    icon: dart,
  },
  {
    name: "python",
    icon: python,
  }
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Arbisoft",
    icon: arbisoft,
    iconBg: "#383E56",
    date: "July 2023 - September 2023",
    points: [
      "My summer internship at Arbisoft was a pivotal experience in my career. Selected after a rigorous process of interviews, tests, and shortlisting",
      "learned about best practices in clean coding, design patterns, and mobile app development, including Android and Flutter.",
,"Received guidance from experienced software professionals." ,"Equipped for future challenges in the software industry"
    ],
  },
  {
    title: "Flutter Fellowship Lead",
    company_name: "Bytewise",
    icon: bytewise,
    iconBg: "#E6DEDD",
    date: "July 2024 - September 2024",
    points: [
      "Trained 20+ fellows in Flutter, Firebase, app architecture, and mobile app development.",
      "Developed and delivered a comprehensive training program from beginner to advanced levels",
      "Provided guidance and support to fellows in developing 5+ projects.",
      "Led and coordinated the fellowship program, ensuring a positive and productive learning environment.",
    ],
  }, 
];

const volunteering = [
  {
    title: "Campus Lead",
    company_name: "GDSC CUI",
    icon: gdsccui,
    iconBg: "#383E56",
    date: "August 2023 - August 2024",
    points: [
      "Served as Campus Lead, rebuilding the chapter from the ground up.",
      "Established 10+ teams focused on programming, web development, mobile app development, and AI/ML",
      "Successfully organized over 30+ events, including 8 physical events, to foster technical learning and community engagement.",
      "Participated in Google Solution Challenge, expanding the club's reach and impact.",
    ],
  },
  {
    title: "Outreach Lead",
    company_name: "Flutter Islamabad",
    icon: flutterisb,
    iconBg: "#E6DEDD",
    date: "July 2022 - September 2024",
    points: [
      "Flutter Islamabad is the first Official Communtiy of Flutter in Pakistan I managed Outreach for it",
      "I successfully established partnerships with over 20+ GDSC Chapters, expanding our reach and resources",
      "We also secured sponsorships that allowed us to conduct events and workshops",
      " I helped to position Flutter Islamabad as a leading community for Flutter developers in Pakistan", 
    ],
  },
  {
    title: "Founder & Organizer",
    company_name: "TEDxCUI",
    icon: tedxcui,
    iconBg: "#E6DEDD",
    date: "December 2022 - December 2023",
    points: [
      "As the founder and first organizer of TEDxCUI, I played a pivotal role in bringing the TEDx platform to Comsats University Islamabad",
      "successfully hosted TEDxCUI with the theme Reviving the Thought Process",
      "Got 9 amazing speakers from different fields talking on diverse topics.",
      "I secured sponsorships worth approximately 0.5 Million Pakistani rupees",
    ],
  }
]

const projects = [
  {
    name: "Agrobridge",
    description:
      "a web and mobile application, tackles inefficiencies in the agricultural supply chain by fostering direct connections from farmers to contractors and industries.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: agrobridge,
    source_code_link: "https://github.com/shahzaneer/AgroBridge-Mobile-App",
  },
  {
    name: "RahbarZ",
    description:
      "An AI App that uses modern LLM's to guide layman Pakistanis to understand things easily,making AI accessible for general people of Pakistan.",
    tags: [
      {
        name: "LLM",
        color: "blue-text-gradient",
      },
      {
        name: "GenAI",
        color: "green-text-gradient",
      },
      {
        name: "buildWithAI",
        color: "pink-text-gradient",
      },
    ],
    image: rahbarz,
    source_code_link: "https://github.com/shahzaneer/Rahbar-Z",
  },
  {
    name: "CUIOnline",
    description:
      "A complete backend RESTFul API for the management of Comsats Portal. It has several endpoints for several tasks.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "backend",
        color: "pink-text-gradient",
      },
    ],
    image: cuionline,
    source_code_link: "https://github.com/shahzaneer/CUIOnline-Portal",
  },
];

export { services, technologies, experiences, projects, volunteering};
