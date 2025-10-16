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
import tanstack from "../assets/tanstack.svg"

// === Core Values ===
import transparency from "../assets/transparency.webp";
import trust from "../assets/trust.jpg";
import deadline from "../assets/deadline2.jpg";

// === Mobile Previews & Videos ===
import eCommercePreview from "../assets/mobilePreview/ecommerce.png";
import eCommerceVideo from "../assets/videos(webp)/ecommerceVideo.webm";
import pulsepointMiniPreview from "../assets/mobilePreview/pulsepointminimarket.png";
import pulsePointMiniVideo from "../assets/videos(webp)/pulsepoint-mini-market.webm";
import tourvistoPreview from "../assets/mobilePreview/tourvisto.png";
import tourvistoVideo from "../assets/videos(webp)/tourvisto.webm";
import audiophilePreview from "../assets/mobilePreview/audiophile.png";
import audiophileVideo from "../assets/videos(webp)/audiophile.webm";
import prepWisePreview from "../assets/mobilePreview/prepWise.png";
import prepWiseVideo from "../assets/videos(webp)/prepWise.webm";
import justHomePreview from "../assets/mobilePreview/justHome.png";
import justHomeVideo from "../assets/videos(webp)/justHome.webm";
import fyloPreview from "../assets/mobilePreview/fylo.png";
import fyloVideo from "../assets/videos(webp)/fylo.webm";
import navigateWorldPreview from "../assets/mobilePreview/navigateWorld.png";
import navigateVideo from "../assets/videos(webp)/navigateWorld.webm";
import earthSitePreview from "../assets/mobilePreview/earthSite.png";
import earthSiteVideo from "../assets/videos(webp)/earthSite.webm";
import extensionPreview from "../assets/mobilePreview/extension.png";
import extensionVideo from "../assets/videos(webp)/extension.webm";

export const core = [
  { id: 1, title: "html5", image: html },
  { id: 2, title: "css", image: css3 },

  { id: 3, title: "tailwind", image: tailwind },
  {
    id: 4,
    title: "sass",
    image: sass,
  },
  { id: 5, title: "javascript", image: javascript },
  { id: 6, title: "react", image: react },
  { id: 7, title: "typescript", image: typescript },
  { id: 8, title: "redux", image: redux },
  { id: 9, title: "nodeJs", image: node },
  { id: 10, title: "github", image: github },
];

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

export const projects = [
  {
    id: 1,
    image: eCommerce,
    name: "e-commerce",
    techStack: [tailwind, react, redux, node, github],
    video: eCommerceVideo,
    details: {
      service:
        "Easy Online Ordering Smooth checkout process with multiple payment options. Standard, express, or same-day delivery where possible. ",
      duration: "5 days",
      liveSite: "https://e-commerce-web-rho-nine.vercel.app/",
      description:
        "I turned a complete Figma design into a dynamic e-commerce website for all genders, focusing on performance, modularity, and polished animations to deliver a smooth, visually appealing, and user-friendly shopping experience.",
    },
    mobilePreview: eCommercePreview,
    description: [
      "Works seamlessly across mobile, tablet, and desktop devices.",
      "Engaging UI elements enhance the shopping experience.",
      "Easily find items by size, color, style, or price.",
      "Save favorites and manage shopping effortlessly.",
      "Track orders in real-time and manage personal information.",
    ],
  },

  {
    id: 2,
    image: pulsepointMiniMarket,
    name: "pulsepoint-mini-market",
    techStack: [tailwind, react, redux, github],
    video: pulsePointMiniVideo,
    details: {
      service:
        "Easy Online Ordering Smooth checkout process with multiple payment options. Standard, express, or same-day delivery where possible. ",
      duration: "6 days",
      liveSite: "https://pulsepoint-mini-mart.vercel.app/",
      description:
        "I transformed the Figma design of PulsePoint Mini Market into a responsive e-commerce platform for all genders, emphasizing fast performance, modular structure, and engaging animations to create a seamless and visually appealing shopping experience.",
    },
    mobilePreview: pulsepointMiniPreview,
    description: [
      "Works seamlessly across mobile, tablet, and desktop devices.",
      "Engaging UI elements enhance the shopping experience.",
      "Easily find items by size, color, style, or price.",
      "Save favorites and manage shopping effortlessly.",
      "Track orders in real-time and manage personal information.",
    ],
  },
  {
    id: 3,
    image: tourvisto,
    name: "tourvisto",
    techStack: [tailwind, react, redux, github],
    video: tourvistoVideo,
    details: {
      service:
        "Our travel platform lets users explore destinations, plan trips, and book experiences easily, with guides, location info, and seamless booking and payment options.",
      duration: "4 days",
      liveSite: "https://tourvisto-project-r2sp.vercel.app/",
      description:
        "I turned the Figma designs into a dynamic, responsive frontend, creating an intuitive interface for trip planning and bookings. I focused on performance, modular code, and smooth animations to enhance user engagement. My work ensures users can navigate destinations and complete bookings effortlessly.",
    },
    mobilePreview: tourvistoPreview,
    description: [
      "Browse and filter locations by interest, region, or activity.",
      "Interactive tools for creating personalized travel itineraries.",
      "Secure booking system with multiple payment options.",
      "Detailed information about attractions, hotels, and restaurants.",
      "Track trips, payments, and favorite destinations.",
      "Fully functional across mobile, tablet, and desktop devices.",
      "Engaging transitions for a modern user experience.",
    ],
  },
  {
    id: 4,
    image: audiophile,
    name: "audiophile",
    techStack: [tailwind, react, redux, github],
    video: audiophileVideo,
    details: {
      service:
        "Audiophile is an e-commerce platform for audio enthusiasts, offering headphones, speakers, and earphones. Users can explore products, compare features, and make purchases seamlessly with an intuitive interface and smooth browsing experience.",
      duration: "5 days",
      liveSite: "https://e-commerce-project-2-b52v.vercel.app/",
      description:
        "I transformed the Figma designs into a responsive, modular frontend for Audiophile, focusing on performance, clean code, and engaging animations. My work ensures users can navigate products, view details, and complete purchases effortlessly across devices.",
    },
    mobilePreview: audiophilePreview,
    description: [
      "Browse and filter headphones, speakers, and earphones by brand, type, or price.",
      "High-quality images, specifications, and customer reviews for informed decisions.",
      "Secure checkout with multiple payment options and order summary.",
      "Seamless experience on mobile, tablet, and desktop.",
      "Smooth transitions and hover effects for a modern feel.",
      "Track orders, manage addresses, and view purchase history.",
      "Save preferred products for future purchase consideration.",
    ],
  },
  {
    id: 5,
    image: prepWise,
    name: "prep-wise",
    techStack: [tailwind, react, github],
    video: prepWiseVideo,
    details: {
      service:
        "Prep-Wise is a platform that connects job seekers with recruiters. Users can browse companies, view available positions, and schedule interviews directly through the site, simplifying the recruitment process.",
      duration: "3 days",
      liveSite: "https://prep-wise-liart.vercel.app/",
      description:
        "I developed the frontend from Figma designs into a responsive, modular interface, focusing on smooth navigation, interactive elements, and seamless scheduling workflows. My work ensures users can easily explore companies and book interviews efficiently",
    },
    mobilePreview: prepWisePreview,
    description: [
      "Browse and filter companies by industry, location, or role.",
      "Plan and book interviews directly from company profiles.",
      "Track scheduled interviews and application status.",
      "Fully functional on desktop, tablet, and mobile devices.",
      "Engaging transitions and hover effects for smooth navigation.",
      "Alert users about upcoming interviews.",
      "Quickly find companies or positions of interest.",
    ],
  },
  {
    id: 6,
    image: justHome,
    name: "just home",
    techStack: [tailwind, react, github],
    video: justHomeVideo,
    details: {
      service:
        "This static landing page showcases properties, highlighting house views, pricing, and interior features like kitchens, bathrooms, and living spaces. Users can explore each property and understand what each home offers at a glance.",
      duration: "2 days",
      liveSite: "https://real-estate-website-4tce.vercel.app/",
      description:
        "I transformed Figma designs into a responsive and visually appealing landing page, focusing on modular code, clean layouts, and interactive elements. My work ensures users can easily navigate properties and view detailed room and feature information.",
    },
    mobilePreview: justHomePreview,
    description: [
      "Display images, pricing, and general property info.",
      "Highlight interior spaces like kitchen, bathroom, and living areas.",
      "Smooth transitions between property images.",
      "Fully functional across desktop, tablet, and mobile.",
      "Icons or labels for amenities included in the property.",
      "Easily reach the seller or agent.",
      "Minimalistic and easy-to-read design for better user experience.",
    ],
  },
  {
    id: 7,
    image: fylo,
    name: "fylo",
    techStack: [tailwind, react, github],
    video: fyloVideo,
    details: {
      service:
        "Fylo is a cloud storage landing page that showcases file management and secure access features. Users can upload, organize, and access their files from anywhere, making file storage simple and reliable.",
      duration: "1 week",
      liveSite: "https://landing-page-fylo-pulsepoint.vercel.app/",
      description:
        "I developed the frontend from Figma designs into a responsive and interactive landing page, focusing on modular code, clean layouts, and smooth animations. My work ensures users can easily understand Fylo’s features and navigate the interface seamlessly.",
    },
    mobilePreview: fyloPreview,
    description: [
      "Showcases file upload, organization, and access capabilities.",
      "Works flawlessly on desktop, tablet, and mobile devices.",
      "Engaging transitions for buttons, cards, and file previews.",
      "Visual cues for file protection and privacy.",
      "Highlights collaboration, sharing, and storage benefits.",
      "Easy access to start using Fylo.",
      "Minimalistic design for easy readability and navigation.",
    ],
  },
  {
    id: 8,
    image: navigateWorld,
    name: "navigate world",
    techStack: [html, css3, javascript, github],
    video: navigateVideo,
    details: {
      service:
        "Navigate the World is an interactive platform that allows users to explore countries by region and view detailed information for each nation. It provides an engaging way to learn about geography, demographics, and cultural insights",
      duration: "1 week",
      liveSite: "https://rest-countries-api-with-color-theme-six.vercel.app/",
      description:
        "I converted Figma designs into a responsive and modular frontend, focusing on smooth navigation, interactive filtering, and dynamic country detail displays. My work ensures users can easily browse regions and access comprehensive country information.",
    },
    mobilePreview: navigateWorldPreview,
    description: [
      "Browse countries by continent or geographic region.",
      "View population, area, language, and other key facts.",
      "Fully functional across desktop, tablet, and mobile devices.",
      "Smooth transitions when filtering or selecting countries.",
      "Quickly find countries by name.",
      "Real-time updates as users navigate through regions or countries.",
      "Easy-to-read information and visually appealing design.",
    ],
  },
  {
    id: 9,
    image: earthSite,
    name: "space site",
    techStack: [html, css3, javascript, github],
    video: earthSiteVideo,
    details: {
      service:
        "Space is an interactive educational site that lets users explore celestial bodies like Earth, the Moon, and other planets. It provides an engaging way to navigate between planets and learn key facts about each one.",
      duration: "2 days",
      liveSite: "https://space-tourism-website-main-pulsepoi.vercel.app/",
      description:
        "I transformed the Figma designs into a responsive and modular frontend, focusing on smooth navigation, interactive transitions, and visually appealing layouts. My work ensures users can seamlessly explore planets and access detailed information.",
    },
    mobilePreview: earthSitePreview,
    description: [
      "Switch between planets, moons, and other objects.",
      "Works flawlessly on desktop, tablet, and mobile devices.",
      "Smooth transitions when moving between celestial bodies.",
      "Display key facts like size, distance, and orbital details.",
      "Focus on visuals and readability.",
      "Engaging interactions for exploration.",
      "Easy to navigate for all users.",
    ],
  },
  {
    id: 10,
    image: extensions,
    name: "extension",
    techStack: [html, css3, javascript, github],
    video: extensionVideo,
    details: {
      service:
        "Extension List is an interactive platform that lets users manage software extensions through toggleable cards. Users can view all extensions and categorize them as active or inactive, making it easy to track and control their tools.",
      duration: " 3 days",
      liveSite: "https://extension-pulsepoint.vercel.app/",
      description:
        "I developed the frontend from Figma designs into a responsive and dynamic interface, implementing modular code, smooth transitions, and interactive toggles. My work ensures users can easily switch extensions between active and inactive states with a seamless experience.",
    },
    mobilePreview: extensionPreview,
    description: [
      "Display each extension with its name and status.",
      "Move extensions between Active, Inactive, and All categories.",
      "Works across desktop, tablet, and mobile devices.",
      "Fluid transitions when toggling or moving cards.",
      "Separate views for Active, Inactive, and All extensions.",
      "Click or toggle to instantly update card status.",
      "Easy to read and manage extensions visually.",
    ],
  },
];

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
  {
    id: 1,
    image: trust,
    title: "Trust",
    desc: "I value honesty and clear communication with clients to ensure alignment throughout each project.",
  },
  {
    id: 2,
    image: transparency,
    title: "Transparency",
    desc: "Every step of my process is open and easy to follow, keeping expectations realistic and clear.",
  },
  {
    id: 3,
    image: deadline,
    title: "Deadlines",
    desc: "I commit to timely delivery without compromising the quality or creativity of the final product.",
  },
];

export const experiences = [
  {
    title: "Frontend Developer",
    company_name: "incite360 (crud dashboard)",
    date: "April 2025 - April 2025",
    points: [
      "Engineered a high-performance web dashboard empowering businesses to manage and secure employer profiles efficiently.",
      "Built with React, Tailwind CSS, TanStack, and React Hook Form, delivering a responsive and scalable user experience.",
      "Implemented robust CRUD functionality and optimized client-server data flow for seamless performance.",
      "Designed a clean, intuitive interface for administrators to organize and update employee data with ease.",
    ],
    techStack: [ tailwind, react, tanstack ],
  },
  {
    title: "Frontend Developer",
    company_name: "pulsepoint-mini-mart",
    date: "May 2025",
    points: [
      "Built a responsive e-commerce platform enabling users to browse and order clothing for all genders",
      "Developed with React, Tailwind CSS, and Redux Toolkit, ensuring fast performance and centralized state management.",
      "Implemented dynamic product listing, cart management, and order functionality for a smooth shopping experience",
      "Focused on efficient data handling and server communication, gaining strong insight into managing asynchronous state and API-driven workflows.",
    ],
    techStack: [ tailwind, react, redux ],
  },
  {
    title: "Frontend Developer",
    company_name: "tourvisto",
    date: "June - June 2025",
    points: [
      "Developed a dynamic, responsive travel platform that enables users to plan trips and book destinations seamlessly.",
      "Translated Figma designs into a functional frontend using React, Tailwind CSS, and Redux Toolkit to ensure scalability and smooth state management.",
      "Integrated Google Authentication for secure and seamless user sign-in via email.",
      "Focused on clean architecture, smooth animations, and performance optimization to enhance overall user experience.",
      "Independently managed the frontend development, emphasizing modular code and intuitive user flow.",
    ],
    techStack: [ tailwind, react, redux ],
  },
];
