import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";

function Projects() {
  const { t } = useTranslation();

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl"
      >
        {t("projects.title")}
      </motion.h2>

      {/* Grupo de proyectos: REACT */}
      <h3 className="my-10 text-2xl text-center text-blue-500">React</h3>
      <div className="flex flex-wrap justify-center gap-12 px-6">
        {/* Proyecto React 1 */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{
            scale: 1.005,
            boxShadow: "0 0 12px 1px rgba(59, 130, 246, 0.2)",
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 w-full sm:w-full md:w-5/12 lg:w-5/12 flex flex-col bg-[#0b0f18] p-6 rounded-lg shadow-lg border border-transparent hover:border-blue-500/30 transition-all duration-300"
        >
          <div className="flex flex-wrap">
            <div className="w-1/3">
              <a
                href="https://corner-books-log.onrender.com/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/project24_library.png"
                  width={150}
                  height={150}
                  alt="Project 1 Title"
                  className="mt-1 rounded"
                />
              </a>
            </div>
            <div className="w-2/3 pl-4">
              <h6 className="mb-2 font-semibold">
                {t("projects.REACT.library.title")}
              </h6>
              <p className="mb-4 text-neutral-400 text-sm">
                {t("projects.REACT.library.description")}
              </p>
            </div>
          </div>
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600">
                React
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600">
                Node.js
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600">
                Express.js
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600">
                MongoDB
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600">
                Git
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600">
                GitHub
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600">
                PostMan
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600">
                MongoDB Compass
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={() =>
                  window.open("https://corner-books-log.onrender.com/register")
                }
                className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300 text-sm"
              >
                {t("projects.buttonViewProject")}
              </button>
              <button
                onClick={() =>
                  window.open("https://corner-books-log.onrender.com/register")
                }
                className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300 text-sm"
              >
                {t("projects.buttonViewFrontCode")}
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/library-back-end"
                  )
                }
                className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300 text-sm"
              >
                {t("projects.buttonViewBackCode")}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Proyecto React 2 */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{
            scale: 1.005,
            boxShadow: "0 0 12px 1px rgba(59, 130, 246, 0.2)",
          }}
          transition={{ duration: 0.5, ease: "easeOut" }} // Añadir ease para suavizar
          className="mb-12 w-full sm:w-full md:w-5/12 lg:w-5/12 flex flex-col bg-[#0b0f18] p-6 rounded-lg shadow-lg border border-transparent hover:border-blue-500/30 transition-all duration-300"
        >
          <div className="flex flex-wrap">
            <div className="w-1/3">
              <a
                href="https://todo-list-front-yvrl.onrender.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/project7.png"
                  width={150}
                  height={150}
                  alt="Project 2 Title"
                  className="mt-1 rounded"
                />
              </a>
            </div>
            <div className="w-2/3 pl-4">
              <h6 className="mb-2 font-semibold">
                {t("projects.REACT.todo.title")}
              </h6>
              <p className="mb-4 text-neutral-400 text-sm">
                {t("projects.REACT.todo.description")}
              </p>
            </div>
          </div>
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600">
                React
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600">
                Express.js
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600">
                Node.js
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600">
                PostgreSQL
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600">
                MongoDB
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600">
                Docker
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600">
                Git
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600">
                GitHub
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600">
                PostMan
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600">
                MongoDB Compass
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600">
                DBeaver
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600">
                Linux
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={() =>
                  window.open("https://todo-list-front-yvrl.onrender.com/login")
                }
                className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300 text-sm"
              >
                {t("projects.buttonViewProject")}
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/Todo_List_Front"
                  )
                }
                className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300 text-sm"
              >
                {t("projects.buttonViewFrontCode")}
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/Todo_List_Back"
                  )
                }
                className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300 text-sm"
              >
                {t("projects.buttonViewBackCode")}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Proyecto React 3 */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{
            scale: 1.005,
            boxShadow: "0 0 12px 1px rgba(59, 130, 246, 0.2)",
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 w-full sm:w-full md:w-5/12 lg:w-5/12 flex flex-col bg-[#0b0f18] p-6 rounded-lg shadow-lg border border-transparent hover:border-blue-500/30 transition-all duration-300"
        >
          <div className="flex flex-wrap">
            <div className="w-1/3">
              <a
                href="https://github.com/AgustinVelazquez0/Food_List_Front"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/project5.png"
                  width={150}
                  height={150}
                  alt="Project 3 Title"
                  className="mt-1 rounded"
                />
              </a>
            </div>
            <div className="w-2/3 pl-4">
              <h6 className="mb-2 font-semibold">
                {t("projects.REACT.food.title")}
              </h6>
              <p className="mb-4 text-neutral-400 text-sm">
                {t("projects.REACT.food.description")}
              </p>
            </div>
          </div>
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600">
                React
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600">
                Node.js
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600">
                Express.js
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600">
                MongoDB
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600">
                API
              </span>
            </div>

            <div className="mt-4 flex gap-2">
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/Food_List_Front",
                    "_blank"
                  )
                }
                className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300 text-sm"
              >
                {t("projects.buttonViewFrontCode")}
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/Food_List_Back",
                    "_blank"
                  )
                }
                className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300 text-sm"
              >
                {t("projects.buttonViewBackCode")}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Proyecto React 4 */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{
            scale: 1.005,
            boxShadow: "0 0 12px 1px rgba(59, 130, 246, 0.2)",
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 w-full sm:w-full md:w-5/12 lg:w-5/12 flex flex-col bg-[#0b0f18] p-6 rounded-lg shadow-lg border border-transparent hover:border-blue-500/30 transition-all duration-300"
        >
          <div className="flex flex-wrap">
            <div className="w-1/3">
              <a
                href="https://react-rick-and-morty-lime.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/project6.png"
                  width={150}
                  height={150}
                  alt="Project 1 Title"
                  className="mt-1 rounded"
                />
              </a>
            </div>
            <div className="w-2/3 pl-4">
              <h6 className="mb-2 font-semibold">
                {t("projects.REACT.rickandmorty.title")}
              </h6>
              <p className="mb-4 text-neutral-400 text-sm">
                {t("projects.REACT.rickandmorty.description")}
              </p>
            </div>
          </div>
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600">
                React
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600">
                Node.js
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600">
                SCSS
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600">
                API
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600">
                Git
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600">
                GitHub
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={() =>
                  window.open("https://react-rick-and-morty-lime.vercel.app/")
                }
                className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300 text-sm"
              >
                {t("projects.buttonViewProject")}
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/React-Rick-and-Morty",
                    "_blank"
                  )
                }
                className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300 text-sm"
              >
                {t("projects.buttonViewFrontCode")}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Proyecto React 5 */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{
            scale: 1.005,
            boxShadow: "0 0 12px 1px rgba(59, 130, 246, 0.2)",
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 w-full sm:w-full md:w-5/12 lg:w-5/12 flex flex-col bg-[#0b0f18] p-6 rounded-lg shadow-lg border border-transparent hover:border-blue-500/30 transition-all duration-300"
        >
          <div className="flex flex-wrap">
            <div className="w-1/3">
              <a
                href="https://calculator-agustins-projects-569e7477.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/project16_calculator.png"
                  width={150}
                  height={150}
                  alt="Project 1 Title"
                  className="mt-1 rounded"
                />
              </a>
            </div>
            <div className="w-2/3 pl-4">
              <h6 className="mb-2 font-semibold">
                {t("projects.REACT.calculator.title")}
              </h6>
              <p className="mb-4 text-neutral-400 text-sm">
                {t("projects.REACT.calculator.description")}
              </p>
            </div>
          </div>
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600">
                React
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600">
                Node.js
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-blue-600">
                MongoDB
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={() =>
                  window.open("https://project1-demo.com", "_blank")
                }
                className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300 text-sm"
              >
                {t("projects.buttonViewProject")}
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://calculator-agustins-projects-569e7477.vercel.app/",
                    "_blank"
                  )
                }
                className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300 text-sm"
              >
                {t("projects.buttonViewFrontCode")}
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Grupo de proyectos: SVG_3D */}
      <h3 className="my-10 text-2xl text-center text-purple-500">
        D3 Graphics (SVG Data Visualization)
      </h3>
      <div className="flex flex-wrap justify-center gap-12 px-6">
        {/* Proyecto SVG 1 */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{
            scale: 1.005,
            boxShadow: "0 0 12px 1px rgba(168, 85, 247, 0.2)",
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 w-full sm:w-full md:w-5/12 lg:w-5/12 flex flex-col bg-[#0b0f18] p-6 rounded-lg shadow-lg border border-transparent hover:border-blue-500/30 transition-all duration-300"
        >
          <div className="flex flex-wrap">
            <div className="w-1/3">
              <a
                href="https://tree-map-mu.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/data_visualization/project20_treemap.png"
                  width={150}
                  height={150}
                  alt="SVG Project 1"
                  className="mt-1 rounded"
                />
              </a>
            </div>
            <div className="w-2/3 pl-4">
              <h6 className="mb-2 font-semibold">
                {t("projects.SVG_3D.treemap.title")}
              </h6>
              <p className="mb-4 text-neutral-400 text-sm">
                {t("projects.SVG_3D.treemap.description")}
              </p>
            </div>
          </div>
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-600">
                React
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-600">
                D3.js
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-600">
                API
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-600">
                SVG
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-600">
                JavaScript
              </span>
            </div>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() =>
                  window.open("https://tree-map-mu.vercel.app/", "_blank")
                }
                className="px-3 py-1 bg-purple-500 text-white rounded-md hover:bg-purple-700 transition duration-300 text-sm"
              >
                {t("projects.buttonViewProject")}
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/tree-map",
                    "_blank"
                  )
                }
                className="px-3 py-1 bg-purple-500 text-white rounded-md hover:bg-purple-700 transition duration-300 text-sm"
              >
                {t("projects.buttonViewFrontCode")}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Proyecto SVG 2 */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{
            scale: 1.005,
            boxShadow: "0 0 12px 1px rgba(168, 85, 247, 0.2)",
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 w-full sm:w-full md:w-5/12 lg:w-5/12 flex flex-col bg-[#0b0f18] p-6 rounded-lg shadow-lg border border-transparent hover:border-blue-500/30 transition-all duration-300"
        >
          <div className="flex flex-wrap">
            <div className="w-1/3">
              <a
                href="https://choropleth-map-mauve.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/data_visualization/project21_choropleth.png"
                  width={150}
                  height={150}
                  alt="SVG Project 1"
                  className="mt-1 rounded"
                />
              </a>
            </div>
            <div className="w-2/3 pl-4">
              <h6 className="mb-2 font-semibold">
                {t("projects.SVG_3D.choropleth.title")}
              </h6>
              <p className="mb-4 text-neutral-400 text-sm">
                {t("projects.SVG_3D.choropleth.description")}
              </p>
            </div>
          </div>
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-600">
                React
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-600">
                D3.js
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-600">
                API
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-600">
                SVG
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-600">
                JavaScript
              </span>
            </div>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() =>
                  window.open(
                    "https://choropleth-map-mauve.vercel.app/",
                    "_blank"
                  )
                }
                className="px-3 py-1 bg-purple-500 text-white rounded-md hover:bg-purple-700 transition duration-300 text-sm"
              >
                {t("projects.buttonViewProject")}
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/choropleth-map",
                    "_blank"
                  )
                }
                className="px-3 py-1 bg-purple-500 text-white rounded-md hover:bg-purple-700 transition duration-300 text-sm"
              >
                {t("projects.buttonViewFrontCode")}
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Grupo de proyectos: JS */}
      <h3 className="my-10 text-2xl text-center text-yellow-500">JavaScript</h3>
      <div className="flex flex-wrap justify-center gap-12 px-6">
        {/* Proyecto JS 1 */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{
            scale: 1.005,
            boxShadow: "0 0 12px 1px rgba(234, 179, 8, 0.2)",
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 w-full sm:w-full md:w-5/12 lg:w-5/12 flex flex-col bg-[#0b0f18] p-6 rounded-lg shadow-lg border border-transparent hover:border-blue-500/30 transition-all duration-300"
        >
          <div className="flex flex-wrap">
            <div className="w-1/3">
              <a
                href="https://agustinvelazquez0.github.io/Todo_List_Front_Js/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/project1.png"
                  width={150}
                  height={150}
                  alt="JavaScript Project 1"
                  className="mt-1 rounded"
                />
              </a>
            </div>
            <div className="w-2/3 pl-4">
              <h6 className="mb-2 font-semibold">
                {t("projects.JS.todo.title")}
              </h6>
              <p className="mb-4 text-neutral-400 text-sm">
                {t("projects.JS.todo.description")}
              </p>
            </div>
          </div>
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-yellow-600">
                JavaScript
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-yellow-600">
                HTML5
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-yellow-600">
                CSS3
              </span>
            </div>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() =>
                  window.open(
                    "https://agustinvelazquez0.github.io/Todo_List_Front_Js/",
                    "_blank"
                  )
                }
                className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-700 transition duration-300 text-sm"
              >
                {t("projects.buttonViewProject")}
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/Todo_List_Front_Js",
                    "_blank"
                  )
                }
                className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-700 transition duration-300 text-sm"
              >
                {t("projects.buttonViewFrontCode")}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Proyecto JS 2 */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{
            scale: 1.005,
            boxShadow: "0 0 12px 1px rgba(234, 179, 8, 0.2)",
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 w-full sm:w-full md:w-5/12 lg:w-5/12 flex flex-col bg-[#0b0f18] p-6 rounded-lg shadow-lg border border-transparent hover:border-blue-500/30 transition-all duration-300"
        >
          <div className="flex flex-wrap">
            <div className="w-1/3">
              <a
                href="https://music-player-alpha-gules.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/project15_music_player.png"
                  width={150}
                  height={150}
                  alt="JavaScript Project 1"
                  className="mt-1 rounded"
                />
              </a>
            </div>
            <div className="w-2/3 pl-4">
              <h6 className="mb-2 font-semibold">
                {t("projects.JS.music.title")}
              </h6>
              <p className="mb-4 text-neutral-400 text-sm">
                {t("projects.JS.music.description")}
              </p>
            </div>
          </div>
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-yellow-600">
                JavaScript
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-yellow-600">
                HTML5
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-yellow-600">
                CSS3
              </span>
            </div>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() =>
                  window.open(
                    "https://music-player-alpha-gules.vercel.app/",
                    "_blank"
                  )
                }
                className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-700 transition duration-300 text-sm"
              >
                {t("projects.buttonViewProject")}
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/music_player",
                    "_blank"
                  )
                }
                className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-700 transition duration-300 text-sm"
              >
                {t("projects.buttonViewFrontCode")}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Proyecto JS 3 */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{
            scale: 1.005,
            boxShadow: "0 0 12px 1px rgba(234, 179, 8, 0.2)",
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 w-full sm:w-full md:w-5/12 lg:w-5/12 flex flex-col bg-[#0b0f18] p-6 rounded-lg shadow-lg border border-transparent hover:border-blue-500/30 transition-all duration-300"
        >
          <div className="flex flex-wrap">
            <div className="w-1/3">
              <a
                href="https://platformer-game-snowy.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/project8_platformer_game.png"
                  width={150}
                  height={150}
                  alt="JavaScript Project 1"
                  className="mt-1 rounded"
                />
              </a>
            </div>
            <div className="w-2/3 pl-4">
              <h6 className="mb-2 font-semibold">
                {t("projects.JS.PlataformerGame.title")}
              </h6>
              <p className="mb-4 text-neutral-400 text-sm">
                {t("projects.JS.PlataformerGame.description")}
              </p>
            </div>
          </div>
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-yellow-600">
                JavaScript
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-yellow-600">
                HTML5
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-yellow-600">
                CSS3
              </span>
            </div>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() =>
                  window.open(
                    "https://platformer-game-snowy.vercel.app/",
                    "_blank"
                  )
                }
                className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-700 transition duration-300 text-sm"
              >
                {t("projects.buttonViewProject")}
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/platformer-game",
                    "_blank"
                  )
                }
                className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-700 transition duration-300 text-sm"
              >
                {t("projects.buttonViewFrontCode")}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Proyecto JS 4 */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{
            scale: 1.005,
            boxShadow: "0 0 12px 1px rgba(234, 179, 8, 0.2)",
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 w-full sm:w-full md:w-5/12 lg:w-5/12 flex flex-col bg-[#0b0f18] p-6 rounded-lg shadow-lg border border-transparent hover:border-blue-500/30 transition-all duration-300"
        >
          <div className="flex flex-wrap">
            <div className="w-1/3">
              <a
                href="https://role-playing-game-sandy.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/project10_role_playing_game.png"
                  width={150}
                  height={150}
                  alt="JavaScript Project 2"
                  className="mt-1 rounded"
                />
              </a>
            </div>
            <div className="w-2/3 pl-4">
              <h6 className="mb-2 font-semibold">
                {t("projects.JS.RolePlayingGame.title")}
              </h6>
              <p className="mb-4 text-neutral-400 text-sm">
                {t("projects.JS.RolePlayingGame.description")}
              </p>
            </div>
          </div>
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-yellow-600">
                JavaScript
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-yellow-600">
                HTML5
              </span>
              <span className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-yellow-600">
                CSS3
              </span>
            </div>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() =>
                  window.open(
                    "https://role-playing-game-sandy.vercel.app/",
                    "_blank"
                  )
                }
                className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-700 transition duration-300 text-sm"
              >
                {t("projects.buttonViewProject")}
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/role_playing_game",
                    "_blank"
                  )
                }
                className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-700 transition duration-300 text-sm"
              >
                {t("projects.buttonViewFrontCode")}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
