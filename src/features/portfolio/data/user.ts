import type { User } from "@/features/portfolio/types/user";

export const USER = {
  firstName: "Mohit",
  lastName: "Patel",
  displayName: "Mohit Patel",
  username: "imohitpatel",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Creating with code. Small details matter.",
    "Design Engineer",
    "Open Source Contributor",
  ],
  address: "India",
  phoneNumber: "ODEwIDMwNDY1NDc", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "aW1vaGl0cGF0ZWxAb3V0bG9vay5jb20", // base64 encoded
  website: "https://imohitpatel.com",
  jobTitle: "Software Engineer",
  jobs: [
    {
      title: "Intern",
      company: "McKinsey & Co",
      website: "https://www.mckinsey.com/in/",
    },
    {
      title: "Electrical Engineering Sophomore",
      company: "Jabalpur Engineering College",
      website: "https://www.jecjabalpur.ac.in/",
    },
  ],
  //   about: `
  // Hello, World! I am Mohit Patel — a Design Engineer passionate about creating high-performance, user-centric software solutions with intuitive and engaging designs.
  // **Electrical Engineering undergraduate (2028)** at **Jabalpur Engineering College**, with a strong focus on **AI, Computer Vision, and Geospatial Technologies**.
  // Skilled in **Python**, **C++**, **JavaScript**, and modern data & ML libraries; experienced in building real-time, data-driven systems.
  // Passionate about exploring new technologies and turning ideas into reality through polished, thoughtfully crafted personal projects.
  // Researcher of [Wildlife Monitoring & Water Source Mapping using AI](https://drive.google.com/drive/folders/1yts7evJLD9Ck-AiONdunVbXCjfEmdrlI?usp=drive_link) (2024 - 25):
  //   - Achieved **92.3% detection accuracy** for real-time animal tracking.
  //   - Estimated water source capacity for **85–120 animals** using visit frequency & volume analysis.
  //   - Delivered real-time performance on **Raspberry Pi 4 (0.43s/frame, up to 1.3 FPS)**.
  //   - Built interactive dashboards with **Flask** and **Folium**, maintaining **<2.5% geolocation error**.
  // **Hackathon finalist, competitive coder & Open-source contributor**:
  //   - Finalist at **Smart India Hackathon 2025 (Internal Finalist)**, **Prayatna 2. (36hr Hackathon)**, and **Hack-Khumbh (24hr Hackathon)**.
  //   - Top **solo participant** in **Vibe Coding Hackathon** (Top 20 of 140+ participants).
  //   - Onboarded **180+ students** into open-source by mentoring Git/GitHub workflows.


  // Let's connect and collaborate!
  //   `,
  about: `
- **Electrical Engineering undergraduate (2028)** at **Jabalpur Engineering College**, with a strong focus on **AI, Computer Vision,  and Geospatial Technologies**.
- Skilled in **Python**, **C++**, **JavaScript**, and modern data & ML libraries; experienced in building real-time, data-driven systems.
- Passionate about exploring new technologies and turning ideas into reality through polished, thoughtfully crafted personal projects.
- Researcher of [Wildlife Monitoring & Water Source Mapping using AI](https://drive.google.com/drive/folders/1yts7evJLD9Ck-AiONdunVbXCjfEmdrlI?usp=drive_link) (2024 - 25):
  - Achieved **92.3% detection accuracy** for real-time animal tracking.
  - Estimated water source capacity for **85–120 animals** using visit frequency & volume analysis.
  - Delivered real-time performance on **Raspberry Pi 4 (0.43s/frame, up to 1.3 FPS)**.
  - Built interactive dashboards with **Flask** and **Folium**, maintaining **<2.5% geolocation error**.
- **Hackathon finalist, competitive coder & Open-source contributor**:
  - Finalist at **Smart India Hackathon 2025 (Internal Finalist)**, **Prayatna 2.(36hr Hackathon)** and **Hack-Khumbh (24hr Hackathon)**.
  - Top **solo participant** in **Vibe Coding Hackathon** (Top 20 of 140+ participants).
  - Onboarded **180+ students** into open-source by mentoring Git/GitHub workflows.
`,
  avatar: "https://github.com/imohitpatel.png",
  ogImage:
    "https://github.com/imohitpatel/assets/blob/main/images/link-icons/profile.jpeg",
  namePronunciationUrl: "/audio/mohit.mp3",
  timeZone: "Asia/Kolkata",
  keywords: [
    "imohitpatel",
    "mohit",
    "mohit patel jecjabalpur",
    "patel",
    "patel mohit",
    "iammohit",
    "jecjabalpur",
    "patelmohit",
    "mohit patel EE",
    "Mohit Patel github",
  ],
  dateCreated: "2025-01-01", // YYYY-MM-DD
} satisfies User;
