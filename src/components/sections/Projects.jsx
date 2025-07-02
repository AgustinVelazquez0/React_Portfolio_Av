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
      <div className="mb-16">
        <h3 className="my-10 text-2xl text-center text-blue-500 font-semibold">
          React
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
          {/* Proyecto React 1 - Sistema de Biblioteca Digital */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/40 backdrop-blur-sm p-6 rounded-xl border border-neutral-700/50 hover:border-blue-500/40 transition-all duration-300"
          >
            <div className="flex gap-6 mb-4">
              <a
                href="https://corner-books-log.onrender.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/project24_library.png"
                  alt="Sistema de Biblioteca Digital"
                  className="w-20 h-20 rounded-lg object-cover hover:scale-105 transition-transform duration-300"
                />
              </a>
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-2 text-white">
                  {t("projects.REACT.library.title")}
                </h4>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {t("projects.REACT.library.description")}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Node.js", "Express.js", "MongoDB", "JWT"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full border border-blue-500/30"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() =>
                  window.open("https://corner-books-log.onrender.com/register")
                }
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors duration-200"
              >
                {t("projects.buttonViewProject")}
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/library-front-end"
                  )
                }
                className="px-4 py-2 bg-neutral-700 hover:bg-neutral-600 text-white text-sm rounded-lg transition-colors duration-200"
              >
                {t("projects.buttonViewFrontCode")}
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/library-back-end"
                  )
                }
                className="px-4 py-2 bg-neutral-700 hover:bg-neutral-600 text-white text-sm rounded-lg transition-colors duration-200"
              >
                {t("projects.buttonViewBackCode")}
              </button>
            </div>
          </motion.div>

          {/* Proyecto React 2 - Task Manager Avanzado */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/40 backdrop-blur-sm p-6 rounded-xl border border-neutral-700/50 hover:border-blue-500/40 transition-all duration-300"
          >
            <div className="flex gap-6 mb-4">
              <a
                href="https://todo-list-front-yvrl.onrender.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/project7.png"
                  alt="Task Manager Avanzado"
                  className="w-20 h-20 rounded-lg object-cover hover:scale-105 transition-transform duration-300"
                />
              </a>
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-2 text-white">
                  {t("projects.REACT.todo.title")}
                </h4>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {t("projects.REACT.todo.description")}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Node.js", "PostgreSQL", "MongoDB", "Docker"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full border border-blue-500/30"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() =>
                  window.open("https://todo-list-front-yvrl.onrender.com/login")
                }
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors duration-200"
              >
                {t("projects.buttonViewProject")}
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/Todo_List_Front"
                  )
                }
                className="px-4 py-2 bg-neutral-700 hover:bg-neutral-600 text-white text-sm rounded-lg transition-colors duration-200"
              >
                {t("projects.buttonViewFrontCode")}
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/Todo_List_Back"
                  )
                }
                className="px-4 py-2 bg-neutral-700 hover:bg-neutral-600 text-white text-sm rounded-lg transition-colors duration-200"
              >
                {t("projects.buttonViewBackCode")}
              </button>
            </div>
          </motion.div>

          {/* Proyecto React 3 - Sistema de Pedidos Online */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/40 backdrop-blur-sm p-6 rounded-xl border border-neutral-700/50 hover:border-blue-500/40 transition-all duration-300"
          >
            <div className="flex gap-6 mb-4">
              <a
                href="https://github.com/AgustinVelazquez0/Food_List_Front"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/project5.png"
                  alt="Sistema de Pedidos Online"
                  className="w-20 h-20 rounded-lg object-cover hover:scale-105 transition-transform duration-300"
                />
              </a>
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-2 text-white">
                  {t("projects.REACT.food.title")}
                </h4>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {t("projects.REACT.food.description")}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "MongoDB", "Express.js", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full border border-blue-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/Food_List_Front"
                  )
                }
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors duration-200"
              >
                {t("projects.buttonViewFrontCode")}
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/Food_List_Back"
                  )
                }
                className="px-4 py-2 bg-neutral-700 hover:bg-neutral-600 text-white text-sm rounded-lg transition-colors duration-200"
              >
                {t("projects.buttonViewBackCode")}
              </button>
            </div>
          </motion.div>

          {/* Proyecto React 4 - Explorador Rick & Morty */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/40 backdrop-blur-sm p-6 rounded-xl border border-neutral-700/50 hover:border-blue-500/40 transition-all duration-300"
          >
            <div className="flex gap-6 mb-4">
              <a
                href="https://github.com/AgustinVelazquez0/Rick_and_Morty"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/project4.png"
                  alt="Explorador Rick & Morty"
                  className="w-20 h-20 rounded-lg object-cover hover:scale-105 transition-transform duration-300"
                />
              </a>
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-2 text-white">
                  {t("projects.REACT.rickandmorty.title")}
                </h4>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {t("projects.REACT.rickandmorty.description")}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "API REST", "CSS3", "JavaScript"].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full border border-blue-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/Rick_and_Morty"
                  )
                }
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors duration-200"
              >
                Ver Código
              </button>
            </div>
          </motion.div>

          {/* Proyecto React 5 - Calculadora Científica */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/40 backdrop-blur-sm p-6 rounded-xl border border-neutral-700/50 hover:border-blue-500/40 transition-all duration-300"
          >
            <div className="flex gap-6 mb-4">
              <a
                href="https://github.com/AgustinVelazquez0/React-Calculator"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/project16_calculator.png"
                  alt="Calculadora Científica"
                  className="w-20 h-20 rounded-lg object-cover hover:scale-105 transition-transform duration-300"
                />
              </a>
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-2 text-white">
                  {t("projects.REACT.calculator.title")}
                </h4>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {t("projects.REACT.calculator.description")}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Hooks", "CSS3", "JavaScript"].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full border border-blue-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/React-Calculator"
                  )
                }
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors duration-200"
              >
                Ver Código
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Grupo de proyectos: D3.js & Data Visualization */}
      <div className="mb-16">
        <h3 className="my-10 text-2xl text-center text-green-500 font-semibold">
          D3.js & Data Visualization
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
          {/* Proyecto D3.js 1 - TreeMap Interactiva */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/40 backdrop-blur-sm p-6 rounded-xl border border-neutral-700/50 hover:border-green-500/40 transition-all duration-300"
          >
            <div className="flex gap-6 mb-4">
              <a
                href="https://github.com/AgustinVelazquez0/TreeMap-FreeCodeCamp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/data_visualization/project20_treemap.png"
                  alt="TreeMap Interactiva"
                  className="w-20 h-20 rounded-lg object-cover hover:scale-105 transition-transform duration-300"
                />
              </a>
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-2 text-white">
                  {t("projects.SVG_3D.treemap.title")}
                </h4>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {t("projects.SVG_3D.treemap.description")}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["D3.js", "SVG", "JavaScript", "CSS3", "AJAX"].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-green-600/20 text-green-400 text-xs rounded-full border border-green-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/TreeMap-FreeCodeCamp"
                  )
                }
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition-colors duration-200"
              >
                Ver Código
              </button>
            </div>
          </motion.div>

          {/* Proyecto D3.js 2 - Mapa Coroplético */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/40 backdrop-blur-sm p-6 rounded-xl border border-neutral-700/50 hover:border-green-500/40 transition-all duration-300"
          >
            <div className="flex gap-6 mb-4">
              <a
                href="https://github.com/AgustinVelazquez0/Choropleth-Map-FreeCodeCamp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/data_visualization/project21_choropleth.png"
                  alt="Mapa Coroplético"
                  className="w-20 h-20 rounded-lg object-cover hover:scale-105 transition-transform duration-300"
                />
              </a>
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-2 text-white">
                  {t("projects.SVG_3D.choropleth.title")}
                </h4>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {t("projects.SVG_3D.choropleth.description")}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["D3.js", "SVG", "GeoJSON", "CSS3", "AJAX"].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-green-600/20 text-green-400 text-xs rounded-full border border-green-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/Choropleth-Map-FreeCodeCamp"
                  )
                }
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition-colors duration-200"
              >
                Ver Código
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Grupo de proyectos: Vanilla JavaScript */}
      <div className="mb-12">
        <h3 className="my-10 text-2xl text-center text-yellow-500 font-semibold">
          Vanilla JavaScript
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
          {/* Proyecto JS 1 - Todo App Vanilla */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(234, 179, 8, 0.3)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/40 backdrop-blur-sm p-6 rounded-xl border border-neutral-700/50 hover:border-yellow-500/40 transition-all duration-300"
          >
            <div className="flex gap-6 mb-4">
              <a
                href="https://github.com/AgustinVelazquez0/TO-DO-LIST"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/project1.png"
                  alt="Todo App Vanilla JS"
                  className="w-20 h-20 rounded-lg object-cover hover:scale-105 transition-transform duration-300"
                />
              </a>
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-2 text-white">
                  {t("projects.JS.todo.title")}
                </h4>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {t("projects.JS.todo.description")}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["JavaScript", "HTML5", "CSS3", "LocalStorage"].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-yellow-600/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() =>
                  window.open("https://github.com/AgustinVelazquez0/TO-DO-LIST")
                }
                className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white text-sm rounded-lg transition-colors duration-200"
              >
                Ver Código
              </button>
            </div>
          </motion.div>

          {/* Proyecto JS 2 - Reproductor Musical */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(234, 179, 8, 0.3)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/40 backdrop-blur-sm p-6 rounded-xl border border-neutral-700/50 hover:border-yellow-500/40 transition-all duration-300"
          >
            <div className="flex gap-6 mb-4">
              <a
                href="https://github.com/AgustinVelazquez0/Music-Player"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/project15_music_player.png"
                  alt="Reproductor Musical Web"
                  className="w-20 h-20 rounded-lg object-cover hover:scale-105 transition-transform duration-300"
                />
              </a>
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-2 text-white">
                  {t("projects.JS.music.title")}
                </h4>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {t("projects.JS.music.description")}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["JavaScript", "HTML5", "CSS3", "Audio API"].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-yellow-600/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/Music-Player"
                  )
                }
                className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white text-sm rounded-lg transition-colors duration-200"
              >
                Ver Código
              </button>
            </div>
          </motion.div>

          {/* Proyecto JS 3 - Juego de Plataformas */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(234, 179, 8, 0.3)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/40 backdrop-blur-sm p-6 rounded-xl border border-neutral-700/50 hover:border-yellow-500/40 transition-all duration-300"
          >
            <div className="flex gap-6 mb-4">
              <a
                href="https://github.com/AgustinVelazquez0/Platformer-Game"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/project8_platformer_game.png"
                  alt="Juego de Plataformas 2D"
                  className="w-20 h-20 rounded-lg object-cover hover:scale-105 transition-transform duration-300"
                />
              </a>
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-2 text-white">
                  {t("projects.JS.PlataformerGame.title")}
                </h4>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {t("projects.JS.PlataformerGame.description")}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["JavaScript", "Canvas API", "Game Physics", "CSS3"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-yellow-600/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/Platformer-Game"
                  )
                }
                className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white text-sm rounded-lg transition-colors duration-200"
              >
                Ver Código
              </button>
            </div>
          </motion.div>

          {/* Proyecto JS 4 - RPG Interactivo */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(234, 179, 8, 0.3)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-gradient-to-br from-neutral-900/40 to-neutral-800/40 backdrop-blur-sm p-6 rounded-xl border border-neutral-700/50 hover:border-yellow-500/40 transition-all duration-300"
          >
            <div className="flex gap-6 mb-4">
              <a
                href="https://github.com/AgustinVelazquez0/Role-Playing-Game"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/project10_role_playing_game.png"
                  alt="RPG Interactivo"
                  className="w-20 h-20 rounded-lg object-cover hover:scale-105 transition-transform duration-300"
                />
              </a>
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-2 text-white">
                  {t("projects.JS.RolePlayingGame.title")}
                </h4>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {t("projects.JS.RolePlayingGame.description")}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["JavaScript", "Game Logic", "HTML5", "CSS3"].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-yellow-600/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/Role-Playing-Game"
                  )
                }
                className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white text-sm rounded-lg transition-colors duration-200"
              >
                Ver Código
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
