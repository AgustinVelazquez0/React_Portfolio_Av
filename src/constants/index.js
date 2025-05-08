import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project5 from "../assets/projects/project5.png";
import project6 from "../assets/projects/project6.png";
import project7 from "../assets/projects/project7.png";
import project8_platformer_game from "../assets/projects/project8_platformer_game.png";
import project10_role_playing_game from "../assets/projects/project10_role_playing_game.png";
import project11_pokemon_search from "../assets/projects/project11_pokemon_search.png";
import project14_calorie_counter from "../assets/projects/project14_calorie_counter.png";
import project15_music_player from "../assets/projects/project15_music_player.png";
import project16_calculator from "../assets/projects/project16_calculator.png";
import project19_bar_chart from "../assets/projects/data_visualization/project19_bar-chart.png";
import project20_treemap from "../assets/projects/data_visualization/project20_treemap.png";
import project21_choropleth from "../assets/projects/data_visualization/project21_choropleth.png";
import project22_heat_map from "../assets/projects/data_visualization/project22_heat-map.png";
import project23_scatterploth from "../assets/projects/data_visualization/project23_scatterploth.png";
import project24_library from "../assets/projects/project24_library.png";

export const HERO_CONTENT = `I'm a full-stack developer from Uruguay with hands-on experience building and deploying complete web applications—from frontend to backend—using technologies like React, Node.js, Express, PostgreSQL, and MongoDB. I’ve completed certifications from FreeCodeCamp, Open Santander Academy, and BIOS, focusing on modern development, APIs, databases, and cloud tools. I work confidently with Git, Docker, WSL, Postman, and MongoDB Compass, and I deploy full-stack projects using platforms like Render and Glitch. Passionate about learning and problem-solving, I create clean, scalable solutions through real-world personal projects.`;

export const EXPERIENCES = [
  {
    year: "03/2024 - 01/2025",
    role: "Full-Stack Developer with REACT",
    company: "Instituto BIOS.",
    description: `Completed a comprehensive Full-Stack Web Development diploma at BIOS.Acquired practical skills in both frontend and backend development, including JavaScript, Node.js, Express.js, and React. Gained hands-on experience working with relational and non-relational databases such as PostgreSQL (via DBeaver) and MongoDB (via MongoDB Compass and MongoDB Atlas). Developed and tested RESTful APIs, used Postman for endpoint testing, and managed version control with Git and GitHub. Also learned to work in Linux-Ubuntu environments, use Docker containers for local development, and follow best practices in software deployment and collaboration.
`,
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
    description: `Completed a course on Digital Skills in the Professional World, focusing on essential tools and technologies for modern workplaces. Gained proficiency in using Microsoft Office 365, Google Drive, Canva, and ChatGPT for productivity and collaboration. Developed skills in file sharing with WeTransfer and data visualization with Power BI. Enhanced digital literacy and adaptability to various software applications, preparing for a dynamic work environment.`,
    technologies: [
      "Office365",
      "Google Drive",
      "Canva",
      "ChatGPT",
      "WeTransfer",
      "AI Apps",
      "Power BI",
    ],
  },
  {
    year: "09/2023 - 01/2024",
    role: "Courses",
    company: "FreeCodeCamp.",
    description: `Completed multiple hands-on projects through FreeCodeCamp's certification programs, focusing on web development, APIs, databases, and data visualization. Built full-stack applications using technologies such as Node.js, Express.js, MongoDB, PostgreSQL, and React. Developed and deployed projects like timestamp and exercise tracker microservices, dynamic data visualizations (Treemap, Heat Map), and database systems (Celestial Bodies, World Cup Database) with SQL and Bash scripting. Projects were built and tested locally using WSL and then deployed to platforms like Render and Glitch. Gained practical experience working with REST APIs, JSON, AJAX, MongoDB Compass, and version control with GitHub.
`,
    technologies: [
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MongoDB Compass",
      "Mongoose",
      "MongoDB Atlas",
      "PostgreSQL",
      "DBeaver",
      "SQL",
      "Bash",
      "Linux",
      "AJAX",
      "JSON",
      "REST API",
      "Git",
      "GitHub",
      "D3.js",
      "Vite",
      "Render",
      "Glitch",
    ],
  },
];

export const PROJECTS = {
  REACT: [
    {
      title: "Library App",
      image: project24_library,
      description:
        "A full-stack web application developed with Node, React, Vite, Express, and MongoDB. The library system features a user authentication system, allowing users to log in and manage their profiles. Users can write and submit book reviews, rate books, and download them. The application also offers personalized library customization, enabling users to organize and display their book collection in a unique way.",
      technologies: [
        "WSL",
        "ReactJs",
        "Vite",
        "CSS",
        "Git",
        "Express.js",
        "Node.js",
        "MongoDB",
        "PostMan",
        "GitHub",
        "MongoDB Atlas",
        "Render",
      ],
      link: "https://github.com/AgustinVelazquez0/corner-books-log",
      github: "https://github.com/AgustinVelazquez0/library-back-end",
      demo: "https://corner-books-log.onrender.com/register",
    },
    {
      title: "To Do List",
      image: project7,
      description:
        "React project with the back-end hosted on Render. The back-end uses MongoDB Atlas to manage tasks and PostgreSQL for user login, both deployed in Render. The front-end is built with React and Vite, and the back-end utilizes Express.js, Node.js, Docker, and JWT for secure authentication. The project also uses utilities like useReducer, useContext, and other React hooks to manage and modify activities.",
      technologies: [
        "WSL",
        "ReactJs",
        "Vite",
        "CSS",
        "Git",
        "Express.js",
        "Node.js",
        "Docker",
        "PostgreSQL",
        "DBeaver",
        "MongoDB",
        "MongoDB Atlas",
        "MongoDB Compass",
        "PostMan",
        "GitHub",
        "Render",
      ],
      link: "https://github.com/AgustinVelazquez0/Todo_List_Front",
      github: "https://github.com/AgustinVelazquez0/Todo_List_Back",
      demo: "https://todo-list-front-yvrl.onrender.com",
    },
    {
      title: "Food Menu API",
      image: project5,
      description:
        "React project a food shopping order simulator. The database is built with MongoDB, and instructions can be found in the README file. Note: The back-end is not currently deployed, but you can view the full project and run the back-end locally by checking out the GitHub repositories. To open the project, install the dependencies in links buttons.",
      technologies: [
        "WSL",
        "ReactJs",
        "Vite",
        "CSS",
        "Git",
        "Express.js",
        "Node.js",
        "MongoDB",
        "MongoDB Compass",
        "PostMan",
        "GitHub",
      ],
      link: "https://github.com/AgustinVelazquez0/Food_List_Front",
      github: "https://github.com/AgustinVelazquez0/Food_List_Back",
    },
    {
      title: "Rick and Morty API",
      image: project6,
      description: "A React project designed to fetch data from an API.",
      technologies: [
        "WSL",
        "ReactJs",
        "Vite",
        "SCSS",
        "Git",
        "Node.js",
        "GitHub",
      ],
      link: "https://react-rick-and-morty-lime.vercel.app/",
      github: "https://github.com/AgustinVelazquez0/React-Rick-and-Morty",
    },
    {
      title: "Calculator",
      image: project16_calculator,
      description:
        "A fully functional React calculator with basic arithmetic operations. Built using hooks and responsive design. Instructions and code available in the README file.",
      technologies: [
        "WSL",
        "ReactJs",
        "Vite",
        "CSS",
        "Git",
        "Node.js",
        "GitHub",
      ],
      link: "https://calculator-agustins-projects-569e7477.vercel.app/",
      github: "https://github.com/AgustinVelazquez0/Calculator",
    },
  ],
  SVG_3D: [
    // SVG/3D visualization projects
    {
      title: "Bar Chart",
      image: project19_bar_chart,
      description:
        "Built with React, D3.js, SVG, CSS, APIs, and AJAX. The project fetches and processes a dataset, then uses D3 to create an interactive bar chart with tooltips.",
      technologies: ["React", "D3.js", "SVG", "CSS", "APIs", "AJAX"],
      link: "https://bar-chart-two.vercel.app/",
      github: "https://github.com/AgustinVelazquez0/bar-chart",
    },
    {
      title: "Tree Map",
      image: project20_treemap,
      description:
        "Built with React, D3.js, SVG, CSS, APIs, and AJAX. The project fetches and processes a dataset, then uses D3 to create an interactive bar chart with tooltips.",
      technologies: ["React", "D3.js", "SVG", "CSS", "APIs", "AJAX"],
      link: "https://tree-map-mu.vercel.app/",
      github: "https://github.com/AgustinVelazquez0/tree-map",
    },
    {
      title: "Choropleth Map Graphic",
      image: project21_choropleth,
      description:
        "Built with React, D3.js, SVG, CSS, APIs, and AJAX. The project fetches and processes a dataset, then uses D3 to create an interactive bar chart with tooltips.",
      technologies: ["React", "D3.js", "SVG", "CSS", "APIs", "AJAX"],
      link: "https://choropleth-map-mauve.vercel.app/",
      github: "https://github.com/AgustinVelazquez0/choropleth-map",
    },
    {
      title: "Heat Map",
      image: project22_heat_map,
      description:
        "Built with React, D3.js, SVG, CSS, APIs, and AJAX. The project fetches and processes a dataset, then uses D3 to create an interactive bar chart with tooltips.",
      technologies: ["React", "D3.js", "SVG", "CSS", "APIs", "AJAX"],
      link: "https://heat-map-mu.vercel.app/",
      github: "https://github.com/AgustinVelazquez0/heat-map",
    },
    {
      title: "Scatterploth Graphic",
      image: project23_scatterploth,
      description:
        "Built with React, D3.js, SVG, CSS, APIs, and AJAX. The project fetches and processes a dataset, then uses D3 to create an interactive bar chart with tooltips.",
      technologies: ["React", "D3.js", "SVG", "CSS", "APIs", "AJAX"],
      link: "https://scatterplot-graph-rho.vercel.app/",
      github: "https://github.com/AgustinVelazquez0/scatterplot-graph",
    },
  ],
  JS: [
    {
      title: "To Do List",
      image: project1,
      description:
        "An application for marking and unmarking tasks, featuring integrated LocalStorage and MediaQuery support for mobile devices.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://agustinvelazquez0.github.io/Todo_List_Front_Js/",
      github: "https://github.com/AgustinVelazquez0/Todo_List_Front_Js",
    },
    {
      title: "Music Player",
      image: project15_music_player,
      description:
        "A web-based music player built with plain HTML, CSS, and JavaScript, where users can play, pause, and switch between songs.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://music-player-alpha-gules.vercel.app/",
      github: "https://github.com/AgustinVelazquez0/music_player",
    },
    {
      title: "Platformer Game",
      image: project8_platformer_game,
      description:
        "A platformer game built with JavaScript, HTML, and CSS. It features player movement, jumping mechanics, and interaction with game elements.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://platformer-game-snowy.vercel.app/",
      github: "https://github.com/AgustinVelazquez0/platformer-game",
    },
    {
      title: "Role Playing Game",
      image: project10_role_playing_game,
      description:
        "A role-playing game (RPG) built using HTML, CSS, and JavaScript. You can move your character and interact with enemies and items.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://role-playing-game-sandy.vercel.app/",
      github: "https://github.com/AgustinVelazquez0/role_playing_game",
    },
    {
      title: "Pokemon Search App",
      image: project11_pokemon_search,
      description:
        "An app where you can search and view details of different Pokémon using an external API.",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      link: "https://pokemon-serch.vercel.app/",
      github: "https://github.com/AgustinVelazquez0/pokemon_serch",
    },
    {
      title: "Calorie Counter",
      image: project14_calorie_counter,
      description:
        "A simple calorie counter web application built with HTML, CSS, and JavaScript to help users track the calories consumed in a day.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://calorie-counter-lake.vercel.app/",
      github: "https://github.com/AgustinVelazquez0/calorie_counter",
    },
  ],
  HTML_CSS: [
    {
      title: "The Corner Books",
      image: project2,
      description: "Simple website where you can find unusual books.",
      technologies: ["HTML", "CSS"],
      link: "https://agustinvelazquez0.github.io/Html_Page_Books/",
      github: "https://github.com/AgustinVelazquez0/Html_Page_Books",
    },
    {
      title: "Portfolio Website",
      image: project3,
      description:
        "This is my first personal portfolio website. It showcases my projects, skills, and contact information, featuring MediaQuery and other functionalities.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://agustinvelazquez0.github.io/",
      github:
        "https://github.com/AgustinVelazquez0/AgustinVelazquez0.github.io",
    },
  ],
};

export const CONTACT = {
  address: "Uruguay, Montevideo ",
  phoneNo: "+598 98661715 ",
  email: "agubolso2@gmail.com",
};
