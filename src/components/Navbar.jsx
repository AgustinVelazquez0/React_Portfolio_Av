import { FaLinkedin, FaGithub } from "react-icons/fa";

function NavBar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center"></div>
      <div className="m-8 flex items-center justify-center gap-6 text-3xl">
        <a
          href="https://www.linkedin.com/in/agustin-vel%C3%A1zquez-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0A66C2] hover:scale-110 transition-all duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/AgustinVelazquez0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#333] hover:scale-110 transition-all duration-300"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
