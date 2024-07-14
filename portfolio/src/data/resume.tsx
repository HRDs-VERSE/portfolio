import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, GraduationCap, BrainCircuit } from "lucide-react";

export const DATA = {
  name: "Hardik(HRD)",
  initials: "HRD",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "A Web Developer wants to be an Entrepreneur. I love building things and helping people. I am going to hit my first idea.",
  summary:
    "Hello, I'm Hardik, currently pursuing my BCA at IGNOU. Proficient in (Python, JavaScript), and adept with technologies like (React.js, Node.js, Next.js, MongoDB, Redux, and Redis). I've honed my skills through hands-on projects, including developing a YouTube backend with Twitter functionality and a MERN Thread clone, among others. I firmly believe in the power of continuous learning in today's dynamic landscape, and I thrive on challenges that push me to expand my knowledge base. As a motivated and self-disciplined individual, I am committed to lifelong learning and leveraging technology to create innovative solutions.",
  avatarUrl: "/profile.png",
  skills: [
    "React",
    "Express.js",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Redis"
    ,
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/#projects", icon: CodeIcon, label: "Projects" },
    { href: "/#education", icon: GraduationCap , label: "Education" },
    { href: "/#skills", icon: BrainCircuit , label: "Skills" },
  ],
  contact: {
    email: "hrds.verse@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/HRDs-VERSE",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "www.linkedin.com/in/hrdsverse",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/HRD13_7",
        icon: Icons.x,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Knowledge-Nest",
      href: "https://www.knowledge-nest.com/",
      badges: [],
      location: "Remote",
      title: "Web Developer",
      logoUrl: "KN",
      start: "Feb 2024",
      end: "May 2024",
      description:
        "Developed a platform from scratch, handling everything from UI design to frontend and backend implementation using Next.js. Utilized Cloudinary for image storage and MongoDB as the database, incorporating full CRUD operations.",
    },
    {
      company: "Krishna-empire",
      badges: [],
      href: "https://krishn-aura.vercel.app/",
      location: "Remote",
      title: "Web Developer",
      logoUrl: "KE",
      start: "Feb 2024",
      end: "June 2024",
      description:
        "Developed a platform from scratch, handling everything from UI design to frontend and backend implementation using Next.js. Utilized Cloudinary for image storage, MongoDB as the database, integrated Shipway APIs for delivery, and Razorpay for payment, incorporating full CRUD operations.",
    }
    
  ],
  education: [
    {
      school: "IGNOU",
      href: "https://iop.ignouonline.ac.in/",
      degree: "Bachelor's Degree of Computer Application (BCA)",
      logoUrl: "I",
      start: "2024",
      end: "2026",
    },
    {
      school: "GDPS",
      href: "#",
      degree: "Intermediate",
      logoUrl: "G",
      start: "2022",
      end: "2023",
    }
    
  ],
  projects: [
    {
      title: "Thread-Clone",
      href: "https://threadh.netlify.app",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Developed a Thread app clone from scratch, handling everything from UI design to frontend and backend implementation. Using React.js for frontend and Express.js for backend . Utilized Cloudinary for image storage, MongoDB as the database, delivery, incorporating full CRUD operations.",
      technologies: [
        "Chakra UI",
        "MongoDb",
        "Express.js",
        "React.js",
        "Cloudinary",
        "JWT"
      ],
      links: [
        {
          type: "Website",
          href: "https://threadh.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/HRDs-VERSE/Thread_Client",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/thread.png",
      video:
        "",
    },
    {
      title: "Youtube backend With Twitter Functionality",
      href: "https://github.com/HRDs-VERSE/backend_withchai",
      dates: "Jan 2024 - Jan 2024",
      active: true,
      description:
        "Implemented comprehensive functionalities including video management (addition and updating), user engagement features(commenting and subscribing), and social interactions (tweeting), enhancing user interaction and content sharing capabilities.",
      technologies: [
        "Express.js",
        "JWT",
        "Cloudinary",
        
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://magicui.design",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/HRDs-VERSE/backend_withchai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ytT.png",
      video: "",
    }
  ],
  hackathons: [
    // {
    //   title: "HackDavis",
    //   dates: "January 20th - 21st, 2018",
    //   location: "Davis, California",
    //   description:
    //     "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
    //   win: "Best Data Hack",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/my6footprint",
    //     },
    //     {
    //       title: "ML",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/my6footprint-machine-learning",
    //     },
    //     {
    //       title: "iOS",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/CarbonWallet",
    //     },
    //     {
    //       title: "Server",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/wallet6-server",
    //     },
    //   ],
    // }
    
  ],
} as const;
