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
         building_7, building_8,
       } from "./assets";

export const navTabs = [
    {name:"Home",id:'header'},
    {name:"About Us",id:'about'},
    {name:"Services",id:'services'},
    {name:"Team",id:'team'},
    {name:"Project",id:'project'},
    // {name:"Testimonial",id:'testimonial'},
    
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


// export const teams = [
//   {
//     name:"Oluoma James",
//     title:"Technician",
//     profile:member1,
//     description:`Oluoma is a skilled technician with over 10 years of experience in the construction industry.
//   },
//   {
//     name:"Mary Brown",
//     title:"Technician",
//     profile:member2,
//     description:`Oluoma is a skilled technician with over 10 years of experience in the construction industry.
//   },
//   {
//     name:"Lawrence Onu",
//     title:"Technician",
//     profile:member3,
//     description:`Oluoma is a skilled technician with over 10 years of experience in the construction industry.
  
//   },
//   {
//     name:"Joy Eze",
//     title:"Technician",
//     profile:member4,
//     description:`Oluoma is a skilled technician with over 10 years of experience in the construction industry.
//   },
// ]

export const teams = [
  {
    name: "Sean Sheng",
    title: "CEO ｜ Product Manager",
    profile: member2,
    description:
      "Data science professional with deep market experience in New Zealand. Specializes in AI, data structures, and retail industry applications.",
  },
  {
    name: "Zeel Wang",
    title: "CTO ｜ Lead Engineer",
    profile: member1,
    description:
      "Tech lead from a renowned internet company, specializing in product design, system architecture, and performance optimization. Holds multiple patents with expertise in large-scale system development.",
  },

  {
    name: "Sabina Ding",
    title: "Fullstack Developer ｜ Cloud Architect",
    profile: member3,
    description:
      "Cloud architect and full-stack developer with hands-on experience in DevOps, cloud architecture design and large-scale system development. ",
  },
  {
    name: "Rita Wang",
    title: "Frontend ｜ UX Specialist",
    profile: member4,
    description:
      "Frontend developer with Fortune 500 experience, specializing in UX design and high-performance web applications.",
  },
];

export const projects = [
  {
    title: "Hospital Management System",
    image: building_6,
    description:
      "A smart telemedicine platform connecting patients, doctors, and pharmacists. Patients can book appointments, consult via text, image, or video, and manage medical records and prescriptions. Doctors handle consultations, issue medical records, and prescribe medications. Pharmacists oversee drug inventory. AI-driven scheduling, secure consultations, and automated prescription management enhance efficiency and patient care.",
  },
  {
    title: "Medical Product Recognition App",
    image: building_5,
    description:
      "Enhancing nursing efficiency with AI-powered surgical event documentation, medical item recognition, inventory and event management—reducing errors, improving workflow, and enabling better patient care.",
  },

  {
    title: "Online Course Management System",
    image: building_7,
    description:
    "A comprehensive e-learning platform connecting students, teachers, and admins. Students can enroll in courses, manage learning progress, and evaluate completed courses. Teachers oversee course management, student performance, and grading. Admins handle course creation, announcements, and user management. The system includes role-based access, profile customization, and secure authentication, ensuring a seamless and efficient online learning experience."
},
  {
    title: "Cross-Platform Calendar & Order Management System",
    image: building_8,
    description:
      "A unified system for synchronizing calendar events across platforms and centralizing order management. It integrates multiple platforms, consolidates orders, and assigns tasks to employees via third-party task management tools—ensuring seamless data connectivity, efficient workflow automation, and improved operational oversight.",
  },
];


// export const testimonial = [
//   {
//     image:profile2,
//     name:'Samuel Eze',
//     review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
//             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`
//   },
//   {
//     image:profile3,
//     name:'Emmanuel Joseph',
//     review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
//             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
//   },
//   {
//     image:profile4,
//     name:'Gloria Chiwendu',
//     review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
//             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`
//   },
//   {
//     image:profile5,
//     name:'Precious Stone',
//     review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
//             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
//   }

// ];


// export const blogs = [
//   {
//       title:"Sustainable Construction: Building for the Future",
//       image:blog_1,
//       category:"Building",
//       content:`
//         As the construction industry continues to evolve, the focus on sustainability 
//         has never been more critical. Sustainable construction is not just a trend; 
//         it's a necessity for our planet's future. In this blog post, we'll explore 
//         the principles of sustainable construction, the benefits it offers, and how 
//         our company is leading the way in eco-friendly building practices.
//       `,
//       date:new Date("January 10, 2024"),
//       likeCount:34,
//       commentCount:4,
//       tags:["Edu4CommDev","CommGrowthEdu","EducateCommunities"],
//       poster:{
//           name:"Johnson",
//       },
//   },
//   {
//       title:"The Importance of Quality Craftsmanship in Construction",
//       image:blog_2,
//       category:"Construction",
//       content:`
//         Quality craftsmanship is the cornerstone of any successful construction project.
//          It ensures that buildings are not only aesthetically pleasing but also durable 
//          and safe. In this blog post, we'll delve into why quality craftsmanship matters 
//          and how our company upholds the highest standards in every project we undertake.
//       `,
//       date:new Date("December 15, 2023"),
//       likeCount:201,
//       commentCount:123,
//       tags:["Skills4Growth","EconSkillImpact","GrowWithSkills"],
//       poster:{
//           name:"Bissi",
//       },
//   },
//   {
//       title:"Innovative Technologies Transforming the Construction Industry",
//       image:blog_3,
//       category:"Innovations",
//       content:`
//       The construction industry is undergoing a revolution, thanks to the advent of 
//       innovative technologies. These advancements are making construction projects 
//       more efficient, cost-effective, and sustainable. In this blog post, we'll 
//       explore some of the most exciting technologies transforming the way we build 
//       and how our company is leveraging them to deliver superior results.
//       `,
//       date:new Date("July 20, 2023"),
//       likeCount:198,
//       commentCount:121,
//       tags:["CommEdu","CommunityEngagement","EduCommunity"],
//       poster:{
//           name:"Abisola",
//       },
//   },
// ];


export const contacts = [
  {
    name: "Email",
    value: "bitflow2025@gmail.com",
    icon: <MdOutlineAlternateEmail />,
  },
  {
    name: "Phone Number",
    value: "+0221700698",
    icon: <IoCallOutline />,
  },
  {
    name: "Address",
    value:
      "Unleash Space, Engineering Building, University of Auckland",
    icon: <IoLocationOutline />,
  },
];


export const footer = [
    {
      name:"Explore",
      routes:[
        {name:"Privacy Policy"},
        {name:"Terms and Conditions"},
        {name:"Cookie Policy"},
      ]
    },
    {
        name:"Section",
        routes:[
          {name:"Home",id:'header'},
          {name:"About Us",id:'about'},
          {name:"Services",id:'services'},
          {name:"Team",id:'team'},
          {name:"Project",id:'project'},
          // {name:"Testimonial",id:'testimonial'},
          // {name:"Blog",id:'blog'},
        ]
      },
]


