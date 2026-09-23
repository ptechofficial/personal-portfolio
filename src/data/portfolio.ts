export interface ExperienceItem {
  company: string;
  role: string;
  type: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  skills: string[];
}

export interface ProjectItem {
  title: string;
  badge: string;
  description: string;
  stats?: string;
  technologies: string[];
  link?: string;
  linkLabel?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  details?: string;
}

export const portfolioData = {
  personal: {
    name: "Prakarsh Gupta",
    pronouns: "He/Him",
    role: "AI Systems Engineer & Full-Stack Developer",
    headline: "15+ AI Agents making Business AI-Native · Claude Code, n8n, LangChain, Agentic SaaS",
    subheadline: "Software Engineer at Expedia Group and Google Summer of Code alumnus building production-grade agentic AI systems and resilient cloud architecture.",
    location: "Gurugram, Haryana, India",
    status: "Building AI-native systems & platforms",
    avatar: "/avatar.png",
    linkedin: "https://www.linkedin.com/in/prakarshgupta/",
    github: "https://github.com/ptechofficial",
    youtube: "https://www.youtube.com/@SmallAI",
  },
  about: {
    lead: "I do not just ship features. I ship end-to-end AI agents that eliminate the manual work around them.",
    body: "At Expedia Group, I engineered Vulnerability Doctor, a Claude Code skill that automates CVE remediation across Java and Spring Boot services. It quickly scaled from an internal prototype into an organization-wide platform tool. Beyond enterprise platforms, I help businesses turn operational workflows into autonomous agent systems, with 15+ clients supported across 6 countries through SmallGroup and practical educational resources on YouTube.",
  },
  metrics: [
    { label: "AI Systems Built", value: "15+" },
    { label: "Global Clients", value: "6 Countries" },
    { label: "Filters & Apps Reach", value: "1.4M+ Views" },
    { label: "Engineering Degree", value: "9.34 GPA" },
  ],
  skills: {
    ai: [
      "Claude Code",
      "Model Context Protocol (MCP)",
      "Agentic SaaS",
      "LangChain",
      "n8n Workflows",
      "LLM Tool Orchestration",
      "Multi-Agent Architecture",
    ],
    backend: [
      "Java",
      "Spring Boot",
      "Kotlin",
      "AWS",
      "Kubernetes",
      "Datadog",
      "REST APIs",
      "Microservices",
    ],
    frontend: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Cesium.js",
      "ArcGIS",
      "AngularJS",
    ],
  },
  experiences: [
    {
      company: "Expedia Group",
      role: "Software Engineer",
      type: "Full-time",
      period: "Aug 2023 - Present",
      location: "Gurugram, Haryana, India · On-site",
      summary: "Identity & Security Platform engineering with focus on high-scale backend services and agentic developer tooling.",
      bullets: [
        "Architected and shipped 'Vulnerability Doctor', a Claude Code skill that automates CVE remediation across Java and Spring Boot services, now deployed as an internal platform tool across multiple teams.",
        "Engineered security authorization models protecting 100M+ accounts with robust test coverage.",
        "Built event-streaming pipelines and cross-service migrations with zero downtime across AWS and Kubernetes infrastructure.",
      ],
      skills: ["Java", "Spring Boot", "Kotlin", "AWS", "Kubernetes", "Claude Code", "Datadog"],
    },
    {
      company: "SmallGroup",
      role: "Co-Founder & AI Systems Engineer",
      type: "Self-employed",
      period: "Jan 2025 - Sep 2026",
      location: "New York, US · Hybrid",
      summary: "Architecting and deploying customized agentic AI systems for international B2B clients.",
      bullets: [
        "Delivered production AI agent solutions for 15+ business clients across 6 countries.",
        "Created specialized agent pipelines for automated candidate sourcing, workflow screening, and operational synthesis.",
        "Integrated multi-model LLM toolchains with n8n and LangChain for business-critical reliability.",
      ],
      skills: ["LLM Agents", "n8n", "LangChain", "Agentic SaaS", "System Architecture"],
    },
    {
      company: "YouTube (Small AI)",
      role: "Educator & Content Creator",
      type: "Self-employed",
      period: "Jan 2025 - Sep 2026",
      location: "Remote",
      summary: "Educating developers, founders, and teams on practical agentic automation and AI tooling.",
      bullets: [
        "Created deep-dive tutorials on Claude Code, n8n automations, and practical agent orchestration.",
        "Recognized by tool creators including n8n creator community programs.",
      ],
      skills: ["AI Education", "Technical Communication", "Community Building"],
    },
    {
      company: "OWASP Foundation",
      role: "Open Source Contributor (Google Summer of Code)",
      type: "Part-time / GSoC",
      period: "May 2023 - Aug 2023",
      location: "Remote",
      summary: "Selected for Google Summer of Code 2023 to develop automated cybersecurity assessment tooling.",
      bullets: [
        "Engineered assessment tooling with vehicular network simulation and dynamic security filters.",
        "Invited speaker at CNCF Gurugram and the Open Security Summit (OSS) presenting open-source security engineering.",
      ],
      skills: ["AngularJS", "Open Source", "Cybersecurity", "Public Speaking"],
    },
    {
      company: "DRDO (Defence Research & Development Organisation)",
      role: "Software Development Intern",
      type: "Internship",
      period: "Jan 2022 - Jun 2022",
      location: "Chandigarh, India · On-site",
      summary: "Geographic Information Systems (GIS) application development for satellite imagery visualization.",
      bullets: [
        "Developed a web application that renders secured satellite imagery from IRS sensors onto an interactive 3D globe.",
        "Connected ArcGIS WMS layers with Cesium.js for hardware-accelerated 3D mapping and rendering.",
      ],
      skills: ["Cesium.js", "ArcGIS", "GIS", "Full-Stack Development"],
    },
  ] as ExperienceItem[],
  projects: [
    {
      title: "Vulnerability Doctor",
      badge: "Expedia Platform AI",
      description: "An autonomous remediation agent built with Claude Code skills that analyzes, isolates, and patches CVE security vulnerabilities across Java and Spring Boot repositories.",
      stats: "Adopted across multiple engineering teams",
      technologies: ["Claude Code", "Spring Boot", "Java", "CVE Remediation"],
    },
    {
      title: "dotCard",
      badge: "Web Platform",
      description: "A digital card platform allowing individuals and professionals to create, customize, and share interactive digital contact cards via links and QR codes.",
      technologies: ["React", "Node.js", "Full-Stack", "Web Services"],
    },
    {
      title: "blurredUp",
      badge: "Creative Tech",
      description: "Interactive augmented reality camera filter launched on Instagram that became a viral user favorite across social communities.",
      stats: "1.4M+ Impressions · 1.1M+ Opens",
      technologies: ["Spark AR", "Computer Vision", "Social Tech"],
    },
    {
      title: "3D Satellite Globe Viewer",
      badge: "Defence R&D",
      description: "Interactive 3D geospatial platform developed at DRDO capable of streaming secured multi-spectral satellite imagery onto realistic orbital models.",
      stats: "ArcGIS WMS + Cesium.js",
      technologies: ["Cesium.js", "ArcGIS", "JavaScript", "GIS"],
    },
  ] as ProjectItem[],
  talks: [
    {
      title: "CNCF Gurugram Tech Talk",
      organization: "Cloud Native Computing Foundation",
      link: "https://www.youtube.com/watch?v=H17Km2Zcwf0",
      description: "Presentation on cloud-native security and open-source infrastructure tooling.",
    },
    {
      title: "Open Security Summit (OSS) Keynote",
      organization: "Open Security Summit",
      link: "https://www.youtube.com/watch?v=ZbNQ-A-bzw8",
      description: "Demonstration of vehicular cybersecurity assessment systems built during Google Summer of Code.",
    },
  ],
  certifications: [
    {
      title: "Claude Code in Action",
      issuer: "Anthropic",
      date: "May 2026",
      credentialId: "e2zc5595vv7h",
      skills: ["Claude Code Subagents", "Agentic Tooling"],
    },
    {
      title: "Introduction to Model Context Protocol",
      issuer: "Anthropic",
      date: "May 2026",
      credentialId: "bb7459fi3znt",
      skills: ["Model Context Protocol (MCP)", "Context Architecture"],
    },
  ] as CertificationItem[],
  education: [
    {
      institution: "National Institute of Technology, Kurukshetra",
      degree: "Bachelor of Technology (B.Tech)",
      period: "2019 - 2023",
      grade: "Grade: 9.34 / 10",
      details: "Top tier academic record with leadership across technical clubs and event management.",
    },
    {
      institution: "Somerville School - India",
      degree: "High School Diploma, Mathematics and Computer Science",
      period: "2015 - 2019",
      grade: "Grade: 93.5%",
      details: "Web Developer at The Void Club, Event Manager of Incognito interschool tech summit.",
    },
  ] as EducationItem[],
};
