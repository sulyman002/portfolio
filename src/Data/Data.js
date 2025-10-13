// === Projects ===
import audiophile from "../assets/project/audiophile.png";
import eCommerce from "../assets/project/e-commerce.png";
import earthSite from "../assets/project/earth-site.png";
import extensions from "../assets/project/extensions.png";
import fylo from "../assets/project/fylo.png";
import justHome from "../assets/project/just-home.png";
import navigateWorld from "../assets/project/navigate-world.png";
import prepWise from "../assets/project/prep-wise.png";
import pulsepointMiniMarket from "../assets/project/pulsepoint-mini-market.png";
import tourvisto from "../assets/project/tourvisto.png";

// === Tech Stacks / Icons ===
import html from "../assets/html5.png";
import javascript from "../assets/javascript.png";
import css3 from "../assets/css3.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import typescript from "../assets/typescript.png";
import redux from "../assets/redux.png";
import github from "../assets/github.png";
import sass from "../assets/sass.png";
import node from "../assets/node.png"; 

// === Core Values ===
import transparency from "../assets/transparency.webp";
import trust from "../assets/trust.jpg";
import deadline from "../assets/deadline2.jpg";

// === Mobile Previews & Videos ===
import eCommercePreview from "../assets/mobilePreview/ecommerce.png";
import eCommerceVideo from "../assets/videos(webp)/eCommerceVideo.webm";
import pulsepointMiniPreview from "../assets/mobilePreview/pulsepointminimarket.png"; 
import pulsePointMiniVideo from "../assets/videos(webp)/pulsepoint-mini-market.webm";
import tourvistoPreview from "../assets/mobilePreview/tourvisto.png";
import tourvistoVideo from "../assets/videos(webp)/tourvisto.webm";
import audiophilePreview from "../assets/mobilePreview/audiophile.png";
import audiophileVideo from "../assets/videos(webp)/audiophile.webm";


export const core = [
  {id: 1,
    title: "html5",
    image: html,
  },
  {id: 2,
    title: "css",
    image: css3,
  },
  
  {id: 3,
    title: "tailwind",
    image: tailwind,
  },
  {
    id:4,
    title: "sass",
    image: sass,
  },
  {id: 5,
    title: "javascript",
    image: javascript,
  },
  {id: 6,
    title: "react",
    image: react,
  },
  {id: 7,
    title: "typescript",
    image: typescript,
  },
  {id: 8,
    title: "redux",
    image: redux,
  },
  {id: 9,
    title: "nodeJs",
    image: node,
  },
  {id: 10,
    title: "github",
    image: github,
  }
]

export const words = [
  "Creative Thinker",
  "Frontend developer",
  "Mobile Application Developer",
  "Problem Solver",
  "Team Player",
  "Tech Enthusiast",
  "Innovation Driven",
];

export const links = [
  { path: "/", label: "Home" },
  { path: "/work", label: "Work" },
  { path: "/about", label: "About" },
];

export  const projects = [
  { id: 1,
    image:eCommerce,
    name: "e-commerce",
    techStack: [ tailwind, react, redux, node, github ],
    video: eCommerceVideo,
    details: {
      service: "tell us about the service",
      duration: "1 week",
      liveSite: "https://e-commerce-web-rho-nine.vercel.app/",
      description: "ContractHero brings order to your contract chaos and finally makes digital contract management simple and efficient. I develop their Figma designs into a scalable and modular marketing site full of dedication to detail and engaging animations."
    },
    mobilePreview: eCommercePreview,
    description: [],
  },
  
  { id: 2,
    image: pulsepointMiniMarket,
    name: "pulsepoint-mini-market",
    techStack: [ tailwind, react, redux, github ],
    video: pulsePointMiniVideo,
    details: {
      service: "tell us about the service",
      duration: "1 week",
      liveSite: "https://e-commerce-web-rho-nine.vercel.app/",
      description: "ContractHero brings order to your contract chaos and finally makes digital contract management simple and efficient. I develop their Figma designs into a scalable and modular marketing site full of dedication to detail and engaging animations."
    },
    mobilePreview: pulsepointMiniPreview,
    description: [],
  },
  { id: 3,
    image: tourvisto,
    name: "tourvisto",
    techStack: [ tailwind, react, redux, github ],
    video: tourvistoVideo,
    details: {
      service: "tell us about the service",
      duration: "1 week",
      liveSite: "https://tourvisto-project-r2sp.vercel.app/",
      description: "ContractHero brings order to your contract chaos and finally makes digital contract management simple and efficient. I develop their Figma designs into a scalable and modular marketing site full of dedication to detail and engaging animations."
    },
    mobilePreview: tourvistoPreview,
    description: [],
  },
  { id: 4,
    image: audiophile,
    name: "audiophile",
    techStack: [ tailwind, react, redux, github ],
    video: audiophileVideo,
    details: {
      service: "tell us about the service",
      duration: "1 week",
      liveSite: "https://e-commerce-project-2-b52v.vercel.app/",
      description: "ContractHero brings order to your contract chaos and finally makes digital contract management simple and efficient. I develop their Figma designs into a scalable and modular marketing site full of dedication to detail and engaging animations."
    },
    mobilePreview: audiophilePreview,
    description: [],
  },
  { id: 5,
    image: prepWise,
    name: "prep-wise",
    techStack: [ tailwind, react, github ]
  },
  { id: 6,
    image: justHome,
    name: "just home",
    techStack: [ tailwind, react, github ]
  },
  { id: 7,
    image: fylo,
    name: "fylo",
    techStack: [ tailwind, react, github ]

  },
  { id: 8,
    image: navigateWorld,
    name: "navigate world",
    techStack: [ html, css3, javascript, github ]
  },
  { id: 9,
    image: earthSite,
    name: "earth site",
    techStack: [ html, css3, javascript, github ]
  },
  { id: 10,
    image: extensions,
    name: "extension",
    techStack: [ html, css3, javascript, github ]
  },

]


export const frontendFAQs = [
  {
    question: "What specific services do you offer?",
    answer:
      "I specialize in modern frontend development using React, Tailwind, and GSAP for interactive UI. I create responsive layouts, optimize performance, and ensure seamless user experience across all devices.",
  },
  {
    question: "What do you use to build your websites?",
    answer:
      "I build with React and Tailwind CSS for component-based, scalable interfaces. I also integrate Framer Motion for smooth animations and use Vite or Next.js for fast development and deployment.",
  },
  {
    question: "What tool stack do you use?",
    answer:
      "I design with Figma, develop with React, style using Tailwind, and manage animations with GSAP. For version control, I use GitHub, and I handle builds with Vite or Next.js depending on the project.",
  },
  {
    question: "I have the design and need development only.",
    answer:
      "I can convert your Figma or Adobe XD design into clean, pixel-perfect frontend code using React and Tailwind. The final result is responsive, fast, and ready for backend integration.",
  },
];

export const essential = [
  { id: 1, image: trust, title: "Trust", desc: "I value honesty and clear communication with clients to ensure alignment throughout each project." },
  { id: 2, image: transparency, title: "Transparency", desc: "Every step of my process is open and easy to follow, keeping expectations realistic and clear." },
  { id: 3, image: deadline, title: "Deadlines", desc: "I commit to timely delivery without compromising the quality or creativity of the final product." },
];
