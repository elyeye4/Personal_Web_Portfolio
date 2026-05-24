export const ROLES = [
  "EDI Integration Engineer",
  "Scrum Master",
  "Software Engineer",
];

export const CAREER = [
  {
    role: "Software Integration Engineer EDI",
    company: "DXC Technology",
    period: "May 2023 – Present",
    color: ["#cc3333", "#059e00"],
    points: [
      "100% SLA compliance for EDI incident resolution in SAP environments.",
      "Developed and customized EDI mappings for inbound and outbound integrations.",
      "Automated processes, reducing manual intervention and resolution time by ~25%.",
      "Applied ITSM/ITIL best practices with SCRUM-based delivery via ServiceNow.",
      "Integration of X12, EDIFACT and XML documents on diverse EDI messages (850,810,856, etc.)"
    ],
  },
  {
    role: "Scrum Master",
    company: "DXC Technology",
    period: "May 2025 – Present",
    color: ["#cc3333", "#059e00"],
    points: [
      "Lead SCRUM ceremonies and guide teams toward project objectives.",
      "Bridge technical squads and business stakeholders; proactively resolve roadblocks.",
      "Data-driven reporting for international stakeholders via Jira backlog management.",
      "Implemented health checks to monitor team morale, improving talent retention.",
    ],
  },
  {
    role: "Independent Software Developer Co-Founder",
    company: "Nova Planet Studio",
    period: "Oct 2025 – Present",
    color: ["#202ab8", "#059e00"],
    points: [
      "Developing commercial mobile & desktop title in Unity / C#.",
      "Implemented Singleton, Observer, State design patterns for maintainability.",
      "Optimized memory & draw calls — stable 60 FPS on mid-range devices.",
      "Winner of 'Most Promising Game' at VIT Awards by Expovit.",
    ],
  },
  {
    role: "IT Support Analyst Tier 1",
    company: "3M",
    period: "Jan 2023 – May 2023",
    color: ["#cc0d0d", "#3d3d3d"],
    points: [
      "Real-time technical support for 2,000+ users — 20–30 tickets/day.",
      "Managed and escalated incidents through ServiceNow ensuring SLA adherence.",
      "Reduced repeat incidents by ~15% through systematic issue documentation.",
    ],
  },
  {
    role: "Security Technology Operations Analyst Tier 2",
    company: "3M (Internship)",
    period: "Sep 2022 – Dec 2022",
    color: ["#cc0d0d", "#3d3d3d"],
    points: [
      "Resolved 50+ security incidents, identifying improvement areas for faster cycles.",
      "Supported incident resolution for Active Directory, Oracle, and SQL databases.",
    ],
  },
];

export const SKILLS = [
  { 
    category: "Integration & Enterprise", 
    items: ["SAP Environments", "EDI Mapping (Inbound/Outbound)", "ServiceNow (ITSM/ITIL)", "SLA & Incident Management", "B2B Integrations"] 
  },
  { 
    category: "Software Engineering", 
    items: ["C# (.NET Foundations)", "Design Patterns", "Relational Databases (SQL/Oracle)", "Clean Code", "Data Structures"] 
  },
  { 
    category: "Cloud & Infrastructure", 
    items: ["Azure Cloud", "Linux Administration", "Active Directory", "IT Operations & Support", "Automation Scripting"] 
  },
  { 
    category: "Agile Leadership", 
    items: ["Scrum Master", "Agile Frameworks", "Jira Management", "Backlog & Dependency Refinement", "Stakeholder Communication"] 
  }
];

export const CERTIFICATIONS = [
  { name: "C1 English Certification", issuer: "Universidad de Costa Rica", image: "UCR.png", urlKey: "C1Eng" },
  { name: "Certified Associate – SAP Business AI", issuer: "SAP", image: "SAP Logo 1-1.png", urlKey: "SAPAI" },
  { name: "Scrum Fundamentals Certified", issuer: "ScrumStudy", image: "scrumstudy.png", urlKey: "SFC" },
  { name: "AZ-900 Azure Fundamentals", issuer: "Microsoft", image: "ms.png", urlKey: "AZ900" },
  { name: "Video Games Programming", issuer: "Universidad Cenfotec", image: "cenfotec.png", urlKey: "VideoGamesProg" },
];
export const CERTIFICATES = [
  { name: "Foundational C# with Microsoft", issuer: "Microsoft", image: "ms.png", urlKey: "CS" },
  { name: "IT Essentials", issuer: "Cisco", image: "cisco.png" },
  { name: "NDG Linux Unhatched", issuer: "Cisco", image: "cisco.png" },
];

export const EDUCATION = [
  {
    degree: "BSc in Software Engineering (In Progress)",
    institution: "Universidad Fidélitas",
    period: "2022 — Present",
    color: ["#202ab8", "#059e00"],
    details: [
      "Deepening in software architecture, design patterns, and advanced data structures",
      "Strong focus on backend development, databases, and enterprise application integration",
    ],
  },
  {
    degree: "Technical High School Diploma in Computer Science",
    institution: "San Pedro de Barva Technical High School",
    period: "2017 — 2022",
    color: ["#8a8a8a", "#3d3d3d"],
    details: [
      "Hands-on training in systems administration, network infrastructure, and computer science principles",
      "Solid foundations in algorithmic logic, Linux environments, and relational databases",
    ],
  },
];

export const CONTACT = {
  email: "juanjosecastrozuniga@gmail.com",
  phone: "+506 8635-9664",
  location: "Mercedes, Heredia, CR",
  linkedin: "https://www.linkedin.com/in/juan-josé-castro-zúñiga-356bb0257",
};

export const NAV_LINKS = [ "About me", "Career", "Skills & certs", "Projects", "Contact"];
export const URLS = {
  gameproject: "https://nova-planet.itch.io/pigs-revenge",
  C1Eng: "https://media.licdn.com/dms/image/v2/D4E2DAQGnYSgtVTV2FA/profile-treasury-image-shrink_1280_1280/B4EZ4TgkRlIwAY-/0/1778443765152?e=1780113600&v=beta&t=cPPmVcaJ4k9SiQch5eikAYX_jUvzZtNmPcbCUkq2NyQ",
  SAPAI: "https://www.credly.com/badges/b209c324-8b08-491b-b34c-84fab5580228/linked_in_profile",
  SFC: "https://www.scrumstudy.com/certification/verify?type=SFC&number=951798",
  AZ900: "https://learn.microsoft.com/es-es/users/JuanjosCastrozuiga-9031/credentials/3039A24E01EDAB19?ref=https%3a%2f%2fwww.linkedin.com%2f",
  VideoGamesProg: "https://www.acreditta.com/credential/a72b2bb9-bf13-45d7-af19-e8f52ee5c757?utm_source=linkedin_profile&resource_type=badge&resource=a72b2bb9-bf13-45d7-af19-e8f52ee5c757",
  CS: "https://www.freecodecamp.org/certification/juanjosecastroz/foundational-c-sharp-with-microsoft",
};