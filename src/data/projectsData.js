import { FaReact, FaNodeJs, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiFramer, SiHtml5, SiCss, SiJavascript, SiReact, SiExpress, SiMysql, SiPython, SiJira, SiFigma, SiPostman } from "react-icons/si";
import WebsiteImage from "../images/WebsiteImage.webp"
import EComApp from "../images/EComApp.webp"
import FoodOrderingApp from "../images/FoodOrderingApp.webp"
import SEOTool from "../images/SEOTool.png"
import TechWriting from "../images/TechWriting.jpg"
import Article2 from "../images/Article2.jpg"
import Article3 from "../images/Article3.jpg"
export const navigationLinks = [
    {name: "Home", href: "/"},
    {name: "Projects", href: "/projects"},
];

export const socialLinks = [
    {icon: FaLinkedin, href:"https://linkedin.com", name: "LinkedIn"},
    {Icon: FaGithub, href:"https://github.com", name: "GitHub"},
];

export const timeLineData = [
    {year:"Mar 2024 - Present", role: "Content Manager (Focus: UI development, SEO)", company:"IdeaCrest Solutions Pvt Ltd", desc: "This is a startup. I work here as a single person marketing team, so I have to often take care of building production-level UI, strategy, and SEO among other tasks."},
    {year:"Oct 2023 - Jan 2024", role: "Content Writer (Focus: Frontend Gap Analysis & User Acquisition Strategies) ", company:"Attentive.ai", desc: "Analyzed frontend structural gaps and UI positioning and implement high-impact web layout modifications. Enhanced domain authority and interface discoverability by 3% within three-month using targeted content-structure frameworks and digital outreach strategy. "},
    {year:"Jun 2022 - Jan 2023", role: "Content Marketer (Focus: On-Page Layouts, Schema Integration & Core Web Vitals)", company:"Beaconstac", desc: "Accelerated organic discovery across high-traffic pages by refactoring internal link architectures, incorporating FAQ schemas, and optimizing metadata structures within the DOM. "},
    {year:"Mar 2021 - Jun 2022", role: "Sr. Content Writer (Focus: Frontend Feature Delivery & UI Quality Assurance)", company:"Qentelli", desc: "Embedded within the core engineering team during critical launch windows, handling hands-on frontend styling tasks and executing strict Design QA to guarantee cross-device visual fidelity. Researched and developed an authoritative technical guide that served as the primary traffic driver, securing 65% of all inbound website traffic. "},
    {year:"May 2020 - Oct 2020", role: "Product Content Marketer (Focus: UX Research & Target User Persona Profiling)", company:"Secpod Tech", desc: "Conducted market-facing competitive technical research to map out ideal user personas, behavior profiles, and UI feature sets used to influence product roadmaps. "},
    {year:"Jan 2020 - Apr 2020", role: "Sr. Content Writer (Focus: Web Discovery Optimization & Growth Engineering)", company:"IES", desc: "Assisted the Digital Marketing Manager to build and execute end-to-end on-page and off-page SEO strategies, resulting in a 40% increase in net-new website traffic."},
    {year:"Aug 2013 - Sep 2017", role: "Project Engineer", company:"Wipro Technologies", desc: "Collaborated with clients to analyze technical dependencies and scope out frontend and backend software requirements. Managed feature development tasks and resolved engineering blockers, improving overall product launch timelines by nearly 20%. "}
  ];

export const techStack = [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Framer Motion", icon: SiFramer },
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS", icon: SiCss},
    { name: "JavaScript", icon: SiJavascript },
    { name: "Python", icon: SiPython},
    { name: "React", icon: SiReact},
    { name: "Express JS", icon: SiExpress},
    { name: "My SQL", icon: SiMysql},
    {name: "Postman", icon: SiPostman},
    { name: "Jira", icon: SiJira },
    { name: "Figma", icon: SiFigma},
];

export const categories = [
  { id: "ui-dev", name: "UI Development" },
  { id: "arch", name: "Tools" },
  { id: "marketing", name: "Writing" }
];

export const projectsByCat = {
  "ui-dev": [
    { id: 1, title: "Website", desc: "Built a responsive website with \nHTML+TailwindCSS+ReactJS+Redux.", imgSrc: WebsiteImage.src , longDesc: "This is a real-life project I helped build. \n \n For privacy reasons, this is a re-imagined wireframe version rather than the original. \n \n Problem \n 1. Students were not sure which accommodation to choose. \n 2. Quick review of room’s layout. \n \n Solution \n1. Rebuilt an existing section that displays the number of remaining rooms, giving students a clear idea of which dormitories are popular. \n2. Updated the banner to dynamically change based on the selected accommodation. \n \n Result \n Increased student enquiries by 35%. \n \n Tech stack used \n \n1. HTML5 \n2. Tailwind CSS \n3. ReactJS \n4. Node.js \n5. jQuery \n6. PL/SQL \n7. JSON Web Tokens \n8. React Routers \n9. Redux." },
    { id: 2, title: "E-Commerce App", desc: "A personal project to put \nReact Native in action", imgSrc: EComApp.src, longDesc: "This is one of my personal projects. \n\n Problem \n 1. The average star ratings are not clearly visible for selected items. \n2. Some apps lack a seamless bottom sheet layout; they either cover most of the upper screen or force users to scroll to read the full text. \n \n Solution \n1. Introduced an average star rating component at the top of the page to highlight user reviews. \n 2. Streamlined the lower screen layout by reducing text and verbosity. \n \n Result \n Gained experience in solving user problems while building applications using React Native and MongoDB. \n \n Tech stack used: \n1. HTML5 \n2. Tailwind CSS \n3. React Native \n4. Node.js  \n5. MongoDB \n6. JSON Web Tokens \n7. Redux." },
    { id: 3, title: "Food App", desc: "A personal project to put \nReact Native & Mongo DB in action", imgSrc: FoodOrderingApp.src, longDesc: "This is one of my personal projects. \n\n Problem \n Food Apps looks extremely cluttered. \n \n Solution \nCame up with the above UI. \n \n Result \n Gained experience in solving user problems while building applications using React Native and bootstrap. \n \n Tech stack used: \n1. HTML5 \n2. Bootstrap \n3. React Native \n4. Node.js  \n5. MongoDB \n6. JSON Web Tokens \n7. Redux." }

  ],
  "arch": [
    { id: 4, title: "Tools", desc: "Built a local Python script to assist \nwith my on-page SEO tasks.", imgSrc:SEOTool.src, longDesc: "I use too many Chrome Extensions for SEO experiments, which causes frequent browser crash.\n So, developed a SEO tool for on-page technical experiments.\nIt has increased my effeciency by 35%." }
  ],
  "marketing": [
    { id: 5, title: "Tech Related", desc: "I write very simple to follow tutorials and articles \nrelated to complex technical concepts.", imgSrc:TechWriting.src,longDesc: "My article outranked the MDN Web Docs for 'Object.assign()'. Full article is on my Medium, the link is in the footer." },
    { id: 6, title: "Critical Thinking", desc: "Expressing Critical thinking through writing", imgSrc:Article2.src,longDesc: "This article explores why investors remain interested in AI despite growing user lethargy. You can read it on my Medium; the link is in the footer."},
    { id: 6, title: "Impact of AI", desc: "This one is about AI in entertainment industry.", imgSrc:Article3.src,longDesc: "This article examines the application of AI within Chinese drama productions. You can read it on my Medium; the link is in the footer."},
  ]
  };