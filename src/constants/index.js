import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project5 from "../assets/projects/project5.png";
import project6 from "../assets/projects/project6.png";
import project7 from "../assets/projects/project7.png";
import project8_platformer_game from "../assets/projects/project8_platformer_game.png";
import project9_palindrome_checker from "../assets/projects/project9_palindrome_checker.png";
import project10_role_playing_game from "../assets/projects/project10_role_playing_game.png";
import project11_pokemon_search from "../assets/projects/project11_pokemon_search.png";
import project12_roman_converter from "../assets/projects/project12_roman_converter.png";
import project13_shopping_cart from "../assets/projects/project13_shopping_cart.png";
import project14_calorie_counter from "../assets/projects/project14_calorie_counter.png";
import project15_music_player from "../assets/projects/project15_music_player.png";

export const HERO_CONTENT = `As a full-stack developer from Uruguay, I offer professional services in building robust web applications using modern technologies such as ReactJS, Node.js, Express.js, Docker, PostgreSQL, MongoDB, and more. My expertise includes working with WSL, Vite, CSS, Git, MongoDB Compass, PostMan, and GitHub to deliver high-quality solutions tailored to your needs.`;

export const ABOUT_TEXT = `I’m a full-stack developer from Montevideo, Uruguay, with a strong focus on modern technologies like React, Node.js, and TypeScript. My passion for tech started early, driven by a curiosity for how computers work and how technology can shape our world.

I enjoy taking on challenges, learning new things, and building clean, efficient solutions while staying up-to-date with industry trends. Outside of coding, I’m a Techno music producer, a curious reader exploring everything from philosophy to Gnostic literature, and a big fan of traveling to connect with nature.

I’m excited to bring my skills, energy, and passion to a team where I can contribute and grow. Let’s connect!`;

export const EXPERIENCES = [
  {
    year: "03/2024 - 01/2025",
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
    year: "09/2024 - 01/2025",
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
    year: "09/2023 - 01/2024",
    role: "Course",
    company: "CodeCademy",
    description: `My first courses and exercises completed were here. With an intuitive interface it is a good place to practice and learn. I have done many here, beginner, intermediate and advanced levels.`,
    technologies: ["Javascript", "HTML", ".CSS"],
  },
];

export const PROJECTS = {
  REACT: [
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
      title: "Food Menu API",
      image: project5,
      description:
        "React project: a food shopping order simulator. The database is built with MongoDB, and instructions can be found in the README file. To open the project, install the dependencies listed in the GitHub link provided in the image. https://github.com/AgustinVelazquez0/Food_List_Front https://github.com/AgustinVelazquez0/Food_List_Back",
      technologies: [
        "ReactJs",
        "MongoDB",
        "CSS",
        "Git",
        "WSL",
        "Vite",
        "Express.js",
        "Node.js",
        "MongoDB Compass",
        "PostMan",
        "GitHub",
      ],
      link: "https://github.com/AgustinVelazquez0/Food_List_Front",
    },
    {
      title: "Rick and Morty API",
      image: project6,
      description:
        "A React project designed to fetch data from an API. https://github.com/AgustinVelazquez0/React-Rick-and-Morty",
      technologies: ["ReactJs", "SCSS", "Git", "WSL"],
      link: "https://react-rick-and-morty-lime.vercel.app/",
    },
  ],
  JS: [
    {
      title: "To Do List",
      image: project1,
      description:
        "An application for marking and unmarking tasks, featuring integrated LocalStorage and MediaQuery support for mobile devices. https://github.com/AgustinVelazquez0/Todo_List_Front_Js",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://agustinvelazquez0.github.io/Todo_List_Front_Js/",
    },
    {
      title: "Music Player",
      image: project15_music_player,
      description:
        "A web-based music player built with plain HTML, CSS, and JavaScript, where users can play, pause, and switch between songs.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://music-player-alpha-gules.vercel.app/",
    },
    {
      title: "Platformer Game",
      image: project8_platformer_game,
      description:
        "A platformer game built with JavaScript, HTML, and CSS. It features player movement, jumping mechanics, and interaction with game elements.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://platformer-game-snowy.vercel.app/",
    },
    {
      title: "Role Playing Game",
      image: project10_role_playing_game,
      description:
        "A role-playing game (RPG) built using HTML, CSS, and JavaScript. You can move your character and interact with enemies and items.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://role-playing-game-sandy.vercel.app/",
    },
    {
      title: "Pokemon Search App",
      image: project11_pokemon_search,
      description:
        "An app where you can search and view details of different Pokémon using an external API.",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      link: "https://pokemon-serch.vercel.app/",
    },
    {
      title: "Calorie Counter",
      image: project14_calorie_counter,
      description:
        "A simple calorie counter web application built with HTML, CSS, and JavaScript to help users track the calories consumed in a day.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://calorie-counter-lake.vercel.app/",
    },
    {
      title: "Roman Numeral Converter",
      image: project12_roman_converter,
      description:
        "A tool that converts decimal numbers to Roman numerals, using simple JavaScript logic.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://roman-converter-one.vercel.app/",
    },
    {
      title: "Shopping Cart",
      image: project13_shopping_cart,
      description:
        "A shopping cart built with JavaScript, using an interactive UI and managing the cart's items, prices, and totals.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://shopping-cart-umber-gamma.vercel.app/",
    },
    {
      title: "Palindrome Checker",
      image: project9_palindrome_checker,
      description:
        "A simple palindrome checker tool built with JavaScript that checks if a word or phrase is a palindrome.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://palindrome-checker-iota-one.vercel.app/",
    },
  ],
  HTML_CSS: [
    {
      title: "The Corner Books",
      image: project2,
      description:
        "Simple website where you can find unusual books. https://github.com/AgustinVelazquez0/Html_Page_Books",
      technologies: ["HTML", "CSS"],
      link: "https://agustinvelazquez0.github.io/Html_Page_Books/",
    },
    {
      title: "Portfolio Website",
      image: project3,
      description:
        "This is my first personal portfolio website. It showcases my projects, skills, and contact information, featuring MediaQuery and other functionalities. https://github.com/AgustinVelazquez0/AgustinVelazquez0.github.io",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://agustinvelazquez0.github.io/",
    },
  ],
};

export const CONTACT = {
  address: "Uruguay, Montevideo ",
  phoneNo: "+598 98661715 ",
  email: "agubolso2@gmail.com",
};
