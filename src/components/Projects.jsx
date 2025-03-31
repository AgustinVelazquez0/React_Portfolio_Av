import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      {/* Grupo de proyectos: REACT */}
      <h3 className="my-10 text-2xl text-center text-blue-500">
        React Projects
      </h3>
      <div className="flex flex-wrap justify-center gap-12 px-6">
        {PROJECTS.REACT.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="mb-12 w-full sm:w-full md:w-5/12 lg:w-5/12 flex flex-col bg-neutral-950 p-6 rounded-lg shadow-lg"
          >
            <div className="flex flex-wrap">
              <div className="w-1/3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    width={150}
                    height={150}
                    alt={project.title}
                    className="mt-1 rounded"
                  />
                </a>
              </div>
              <div className="w-2/3 pl-4">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* Botones con estilos */}
              <div className="mt-4 flex gap-2">
                {/* Mostrar dos botones "View code" solo para los primeros dos proyectos */}
                {index < 2 ? (
                  <>
                    <button
                      onClick={() => window.open(project.link, "_blank")}
                      className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300 text-sm"
                    >
                      View code (Frontend)
                    </button>
                    <button
                      onClick={() => window.open(project.github, "_blank")}
                      className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300 text-sm"
                    >
                      View code (Backend)
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => window.open(project.link, "_blank")}
                      className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300 text-sm"
                    >
                      View project
                    </button>
                    <button
                      onClick={() => window.open(project.github, "_blank")}
                      className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300 text-sm"
                    >
                      View code
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Grupo de proyectos: SVG_3D */}
      <h3 className="my-10 text-2xl text-center text-purple-500">
        D3 Graphics (SVG Data Visualization)
      </h3>
      <div className="flex flex-wrap justify-center gap-12 px-6">
        {PROJECTS.SVG_3D.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="mb-12 w-full sm:w-full md:w-5/12 lg:w-5/12 flex flex-col bg-neutral-950 p-6 rounded-lg shadow-lg"
          >
            <div className="flex flex-wrap">
              <div className="w-1/3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    width={150}
                    height={150}
                    alt={project.title}
                    className="mt-1 rounded"
                  />
                </a>
              </div>
              <div className="w-2/3 pl-4">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* Botones con estilos */}
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => window.open(project.link, "_blank")}
                  className="px-3 py-1 bg-purple-500 text-white rounded-md hover:bg-purple-700 transition duration-300 text-sm"
                >
                  View project
                </button>
                <button
                  onClick={() => window.open(project.github, "_blank")}
                  className="px-3 py-1 bg-purple-500 text-white rounded-md hover:bg-purple-700 transition duration-300 text-sm"
                >
                  View code
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Grupo de proyectos: JS */}
      <h3 className="my-10 text-2xl text-center text-yellow-500">
        JavaScript Projects
      </h3>
      <div className="flex flex-wrap justify-center gap-12 px-6">
        {PROJECTS.JS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="mb-12 w-full sm:w-full md:w-5/12 lg:w-5/12 flex flex-col bg-neutral-950 p-6 rounded-lg shadow-lg"
          >
            <div className="flex flex-wrap">
              <div className="w-1/3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    width={150}
                    height={150}
                    alt={project.title}
                    className="mt-1 rounded"
                  />
                </a>
              </div>
              <div className="w-2/3 pl-4">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-yellow-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* Botones con estilos */}
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => window.open(project.link, "_blank")}
                  className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-700 transition duration-300 text-sm"
                >
                  View project
                </button>
                <button
                  onClick={() => window.open(project.github, "_blank")}
                  className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-700 transition duration-300 text-sm"
                >
                  View code
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Grupo de proyectos: HTML y CSS */}
      <h3 className="my-10 text-2xl text-center text-green-500">
        HTML & CSS Projects
      </h3>
      <div className="flex flex-wrap justify-center gap-12 px-6">
        {PROJECTS.HTML_CSS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="mb-12 w-full sm:w-full md:w-5/12 lg:w-5/12 flex flex-col bg-neutral-950 p-6 rounded-lg shadow-lg"
          >
            <div className="flex flex-wrap">
              <div className="w-1/3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    width={150}
                    height={150}
                    alt={project.title}
                    className="mt-1 rounded"
                  />
                </a>
              </div>
              <div className="w-2/3 pl-4">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-green-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* Botones con estilos */}
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => window.open(project.link, "_blank")}
                  className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-700 transition duration-300 text-sm"
                >
                  View project
                </button>
                <button
                  onClick={() => window.open(project.github, "_blank")}
                  className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-700 transition duration-300 text-sm"
                >
                  View code
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
