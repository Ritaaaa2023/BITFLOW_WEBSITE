import { IoCallOutline,IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaYoutube,FaInstagram,FaDrawPolygon } from "react-icons/fa";
import { CiLinkedin ,CiFacebook} from "react-icons/ci";
import { SiBlueprint,SiHomeassistantcommunitystore  } from "react-icons/si";
import { AiOutlineFileProtect } from "react-icons/ai";
import { IoConstructSharp } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { 
         member1, member2, member3, member4,building_5,building_6,
         building_7, building_8, book, diagnose, drug,find
       } from "./assets";

export const navTabs = [
    {name:"Home",id:'header'},
    {name:"About Us",id:'about'},
    {name:"Services",id:'services'},
    {name:"Team",id:'team'},
    {name:"Project",id:'project'},
   
    
];

// export const services = [
//   {
//     name:"General Contracting",
//     icon:<SiBlueprint/>,
//     description:`This involves overseeing the entire construction project from start to finish, 
//         including hiring subcontractors, managing the budget, scheduling, and ensuring that the
//         project meets all specifications and regulations.`,
//   },
//   {
//     name:"Design-Build Services",
//     icon:<FaDrawPolygon/>,
//     description:`This service combines both the design and construction phases into a single 
//        contract, streamlining the process and improving communication between the design and
//         construction teams.

//     `,
//   },
//   {
//     name:"Project Management",
//     icon:<GrUserManager/>,
//     description:`Construction companies often provide project management services, which include 
//        planning, coordinating, and overseeing projects to ensure they are completed on time, within 
//        budget, and to the required quality standards.`,
//   },
//   {
//     name:"Renovation and Remodeling",
//     icon:<SiHomeassistantcommunitystore/>,
//     description:`Many construction companies specialize in renovation and remodeling services, 
//                 which involve updating and improving existing structures. This can range from minor 
//                 repairs to major overhauls of residential, commercial, or industrial properties.`,
//   },
//   {
//     name:"Site Preparation",
//     icon:<AiOutlineFileProtect/>,
//     description:`Before construction begins, companies often handle site preparation tasks such 
//     as land clearing, excavation, grading, and utility installation to ensure the site is ready 
//     for building.`,
//   },
//   {
//     name:"Specialty Construction Services",
//     icon:<IoConstructSharp/>,
//     description:`This can include services like roofing, concrete work, steel erection, plumbing, 
//     electrical work, and other specialized trades necessary for specific aspects of the construction project.`,
//   },
// ]
export const services = [
  {
    name: "Business Platforms",
    icon: <SiBlueprint />,
    description: `We help businesses build seamless digital ecosystems, integrating platforms to enhance customer relationships, improve collaboration, and optimize assets.`,
  },
  {
    name: "Data Intelligence & Process Optimization",
    icon: <FaDrawPolygon />,
    description: `Leverage advanced data analytics to drive smarter business decisions, optimize workflows, and create a more efficient, scalable future for your enterprise.`,
  },
  {
    name: "Software Engineering",
    icon: <GrUserManager />,
    description: `From full-stack development to cloud-native applications, our team delivers high-performance software solutions tailored to your business needs.`,
  },
  {
    name: "Digital Experience",
    icon: <SiHomeassistantcommunitystore />,
    description: `We create intuitive, user-friendly digital experiences across web and mobile platforms, ensuring seamless engagement and interaction for your customers.`,
  },
  {
    name: "Cloud Solutions",
    icon: <AiOutlineFileProtect />,
    description: `Empower your business with secure, scalable cloud strategies that optimize operations, reduce infrastructure costs, and enhance system reliability.`,
  },
  {
    name: "AI-Powered Automation",
    icon: <IoConstructSharp />,
    description: `Enhance efficiency and reduce manual effort with AI-driven automation, from intelligent document processing to predictive analytics and AI-powered insights.`,
  },
];




export const teams = [
  {
    name: "Sean Sheng",
    title: "CEO | Product Manager",
    profile: member2,
    description:
      "Data science professional with deep market experience in New Zealand. Specializes in AI, data structures, and retail industry applications.",
  },
  {
    name: "Zeel Wang",
    title: "CTO | Lead Engineer",
    profile: member1,
    description:
      "Tech lead from a renowned internet company, specializing in product design, system architecture, and performance optimization. Holds multiple patents with expertise in large-scale system development.",
  },

  {
    name: "Sabina Ding",
    title: "Fullstack Developer | Cloud Architect",
    profile: member3,
    description:
      "Cloud architect and full-stack developer with hands-on experience in DevOps, cloud architecture design and large-scale system development. ",
  },
  {
    name: "Rita Wang",
    title: "Frontend | UX Specialist",
    profile: member4,
    description:
      "Frontend developer with Fortune 500 experience, specializing in UX design and high-performance web applications.",
  },
];

export const projects = [
  {
    industry: "Cloud-based SaaS platform",
    title: "Hospital Management System",
    image: building_6,

    description: [
      "Seamless Patient-Doctor-Pharmacist Connectivity",
      "Convenient Appointment Booking & Consultation",
      "Comprehensive Medical Record Management",
      "AI-Driven Scheduling & Workflow Automation ",
      "Digital Prescription & Pharmacy Integration",
      "Secure & Cloud-based SaaS Solution",
    ],
  },
  {
    industry: "AI-Powered workflow automation",
    title: "Medical Product Recognition App",
    image: building_5,
    description: [
      "Fast Surgical Event Documentation",
      "AI-Powered medical Item Recognition",
      "Automated Inventory Management",
      "Stremlined Workflow design ",
      "Enhanced Nursing Efficiency, accuracy ",
    ],
  },

  {
    industry: "Digital Resource Management",
    title: "Online Course Management System",
    image: building_7,
    description: [
      "Centralized platform for resource management",
      "Role-based access control to streamline workflow",
      "Automated scheduling & compliance tracking",
      "Performance tracking & analytics",
      "AI-powered insights & reporting",
    ],
  },
  {
    industry: "Cross-Platform Data Integration",
    title: "Unified Data Integration Platform",
    image: building_8,
    description: [
      "Real-time data connectivity across platforms",
      "Calendar events, order and task allocation",
      "Centralized data management & analytics",
      "Automated task assignment via third-party tools ",
    ],
  },
];

export const hospital = [
  {
    title1: "Introduction",
    title2: "Introduction",
    image: building_6,
    description: [
      "A telemedicine platform connecting patients, doctors, and pharmacists. It enables online consultations, medical record management, and prescription handling with AI-driven scheduling and automation for improved efficiency and patient care.",
    ],
  },
  {
    title1: "Book - Consult - Pay",
    title2: "For Patient:",
    image: book,
    description: [
      "Book Appointments",
      "Manage Appointment & Medical Records",
      "Online Consultation via text, images, or calls",
      "Make payments, and manage prescriptions",
    ],
  },

  {
    title1: "Prescription - History",
    title2: "For Doctor:",

    image: diagnose,
    description: [
      "Access patient appointment records", 
      "track consultation progress",
      "Diagnose and prescribe medications",
      "View patient payment history and medical records",
    ],
  },
  {
    title1: "Inventory Management",
    title2: "For Pharmacists:",

    image: drug,
    description: [
      "Add, edit, and delete medication records ",
      "Search drugs by name to update availability",
      "Ensure prescribed medications align with available stock",
    ],
  },
];




export const contacts = [
  {
    name: "Email",
    value: "bitflownz@hotmail.com",
    icon: <MdOutlineAlternateEmail />,
    image: find,
  },
  {
    name: "Phone Number",
    value: "+0221700698",
    icon: <IoCallOutline />,
    image:"",
  },
  {
    name: "Address",
    value: "Unleash Space, Engineering Building, University of Auckland",
    icon: <IoLocationOutline />,
    image:"",
  },
];


export const footer = [
  {
    name: "Section",
    routes: [
      { name: "Home", id: "header" },
      { name: "About Us", id: "about" },
      { name: "Services", id: "services" },
      { name: "Team", id: "team" },
      { name: "Project", id: "project" },
     
    ],
  },
  {
    name: "Explore",
    routes: [
      { name: "Privacy Policy", },
      { name: "Terms and Conditions",  },
      { name: "Cookie Policy",},
    ],
  },
];


