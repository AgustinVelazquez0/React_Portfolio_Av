import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import project5 from "../assets/projects/project5.png";
import project6 from "../assets/projects/project6.png";
import project7 from "../assets/projects/project7.png";

export const HERO_CONTENT = `As a full-stack developer from Uruguay, I offer professional services in building robust web applications using modern technologies such as ReactJS, Node.js, Express.js, Docker, PostgreSQL, MongoDB, and more. My expertise includes working with WSL, Vite, CSS, Git, MongoDB Compass, PostMan, and GitHub to deliver high-quality solutions tailored to your needs.`;

export const ABOUT_TEXT = `I’m a full-stack developer from Montevideo, Uruguay, with a strong focus on modern technologies like React, Node.js, and TypeScript. My passion for tech started early, driven by a curiosity for how computers work and how technology can shape our world.

I enjoy taking on challenges, learning new things, and building clean, efficient solutions while staying up-to-date with industry trends. Outside of coding, I’m a Techno music producer, a curious reader exploring everything from philosophy to Gnostic literature, and a big fan of traveling to connect with nature.

I’m excited to bring my skills, energy, and passion to a team where I can contribute and grow. Let’s connect!`;

export const EXPERIENCES = [
  {
    year: "03/2024 - In course",
    role: "Full-Stack Developer with REACT",
    company: "Instituto BIOS.",
    description: `Technical School Full-stack in one of the best and recognized technology companies in the country.`,
    technologies: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "React",
      "Linux-Ubuntu",
      "Docker",
      "PostgreSQL",
      "MongoDB",
      "MongoDB Compass",
      "GitHub",
      "Git",
      "DBeaver",
      "PostMan",
    ],
  },
  {
    year: "09/2024 - 12/2024 - Approved(97/100)",
    role: "Digital Skills in the Professional World.",
    company: "Instituto BIOS.",
    description: `Course on Communication, Applications, Work Tools, Cybersecurity, Design Tools, and AI Tools.`,
    technologies: [
      "Office365",
      "Google Drive",
      "Canva",
      "ChatGPT",
      "WeTransfer",
      "AI Apps",
    ],
  },
  {
    year: "09/2023 - 01/2024 - Approved",
    role: "Course",
    company: "CodeCademy",
    description: `My first courses and exercises completed were here. With an intuitive interface it is a good place to practice and learn. I have done many here, beginner, intermediate and advanced levels.`,
    technologies: ["Javascript", "HTML", ".CSS"],
  },
];

export const PROJECTS = [
  {
    title: "To Do List",
    image: project7,
    description:
      "Installation instructions in README.md. React project, with the Back-End in MongoDB. Utilities like useReducer, useContext, and other hooks to manage and modify your activities. Additionally, I have used Docker and PostgreSQL to create a user database with login and registration functionality. To open the project, you need install the dependences: https://github.com/AgustinVelazquez0/Todo_List_Front https://github.com/AgustinVelazquez0/Todo_List_Back",
    technologies: [
      "WSL",
      "ReactJs",
      "Vite",
      "CSS",
      "Git",
      "Express.js",
      "Node.js",
      "Docker",
      "PostgreSql",
      "MongoDB",
      "MongoDB Compass",
      "PostMan",
      "GitHub",
    ],
    link: "https://github.com/AgustinVelazquez0/Todo_List_Front",
  },
  {
    title: "To Do List",
    image: project1,
    description:
      "Application to mark and unmark tasks. With integrated LocalStorage and MediaQuery for cellular devices.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/AgustinVelazquez0/Todo_List_Front_Js",
  },
  {
    title: "Rick and Morty API",
    image: project6,
    description: "React project to fetch data from an API.",
    technologies: ["ReactJs", "SCSS", "Git", "WSL"],
    link: "https://github.com/AgustinVelazquez0/React-Rick-and-Morty",
  },
  {
    title: "Food Menu API",
    image: project5,
    description: "React project, food shopping order simulator.",
    technologies: ["ReactJs", "CSS", "Git", "WSL"],
    link: "https://github.com/AgustinVelazquez0/Food_List_Front",
  },
  {
    title: "The Corner Books",
    image: project2,
    description: "Simple website where you can find unusual books.",
    technologies: ["HTML", "CSS"],
    link: "https://agustinvelazquez0.github.io/CornerBooks/",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "It's my first personal portfolio website. Show projects, skills, and contact information. With MediaQuery and other features.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://agustinvelazquez0.github.io/",
  },
  {
    title: "Responsive Empty Portfolio",
    image: project4,
    description: "In this project, I practiced and applied responsive mode.",
    technologies: ["HTML", "CSS"],
    link: "https://agustinvelazquez0.github.io/Responsive-PortFolio-HTML-CSS/",
  },
];

export const CONTACT = {
  address: "Uruguay, Montevideo ",
  phoneNo: "+598 98661715 ",
  email: "agubolso2@gmail.com",
};
