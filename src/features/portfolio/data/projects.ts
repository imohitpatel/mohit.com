import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "react-wheel-picker",
    title: "Amulya Jewelry Website",
    period: {
      start: "06.2024",
    },
    link: "https://imohitpatel.github.io/mohitique-jewelrycollection/",
    skills: [
      "html",
      "css",
      "JavaScript",
      "Payment gateway integration",
      "Tailwind CSS",
    ],
    description: `- A highly customizable website built with basic HTML, CSS, and JavaScript.
- 📱 Natural touch scrolling with smooth inertia effect
- 🖱️ Mouse drag and scroll support for desktop
- 🔄 Infinite loop scrolling
- 🎨 Unstyled components for complete style customization
- ⚡️ Easy installation via shadcn CLI`,
    logo: "https://assets.chanhdai.com/images/project-logos/react-wheel-picker.svg",
    isExpanded: true,
  },
  {
    id: "imohitpatel.com",
    title: "imohitpatel.com",
    period: {
      start: "01.2025",
    },
    link: "https://github.com/imohitpatel.com",
    skills: [
      "Open Source",
      "Next.js 16",
      "Tailwind CSS v4",
      "Radix UI",
      "Motion",
      "shadcn/ui",
      "Component Registry",
      "Vercel",
    ],
    description: `A minimal, pixel-perfect dev portfolio, contact, 3D visualization project, and blog.`,
    logo: "https://assets.chanhdai.com/images/project-logos/chanhdaidotcom.svg",
  },
  {
    id: "tatkal",
    title: "Tatkal",
    period: {
      start: "07.2024",
      end: "07.2025",
    },
    link: "https://www.youtube.com/",
    skills: ["Self Project", "Java", "Java Swing", "Java Networking"],
    description: `- Course: Java Application Programming 
    - Requirement: Developed a real-time chat application using Java technologies
    - Project Score: 10/10
    - Source Code:
      - Server: https://github.com/imohitpatel/tatkal_server
      - Client: https://github.com/imohitpatel/tatkal_client`,
  },
  {
    id: "genetic-algorithm",
    title: "Genetic Algorithm Model",
    period: {
      start: "06.2020",
      end: "06.2020",
    },
    link: "https://www.youtube.com/",
    skills: ["University Project", "Python", "Pandas", "TensorFlow", "MySQL"],
    description: `- Genetic Algorithm Model for timetable scheduling.
- Requirement: Built a custom model for University student timetable scheduling with role-based functionalities using Python technologies
- Project Score: 10/10
- Source Code: https://github.com/imohitpatel/genetic-algorithm-model`,
  },
];
