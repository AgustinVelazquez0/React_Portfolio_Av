import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";
import { useState } from "react";

function Certifications() {
  const { t } = useTranslation();
  const [expandedAcademies, setExpandedAcademies] = useState({
    bios: false,
    freeCodeCamp: false,
    santander: false,
  });

  const toggleAcademy = (academy) => {
    setExpandedAcademies((prev) => ({
      ...prev,
      [academy]: !prev[academy],
    }));
  };

  return (
    <div id="certifications" className="pb-4 border-b border-neutral-900 dark:border-neutral-700">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-3xl font-semibold
        text-neutral-900 dark:text-white lg:text-4xl"
      >
        {t("certifications.title")}
      </motion.h2>

      {/* BIOS Institute Certifications */}
      <div className="mb-12">
        <h3 className="text-2xl text-center font-semibold mb-8 
        text-neutral-800 dark:text-neutral-200">
          BIOS Institute
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
          {/* Certificado 1 (Full Stack Developer) */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="flex items-center gap-6 
            bg-white dark:bg-neutral-900/50 
            rounded-lg p-6 
            border border-neutral-200 dark:border-neutral-800
            hover:border-neutral-300 dark:hover:border-neutral-700
            shadow-sm hover:shadow-md
            transition-all duration-200"
          >
            <a
              href="https://drive.google.com/file/d/1YKgsHIwNC8eGZc2k1cErBzAJJR2tgwSl/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <img
                src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/main/src/assets/projects/Full%20stack.png"
                alt="Full Stack Developer Certification"
                className="rounded w-24 h-24 object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                {t("certifications.certificates.fullStack.title")}
              </h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {t("certifications.certificates.fullStack.description")}
              </p>
            </div>
          </motion.div>

          {/* Certificado 2 (Digital Skills in the Professional World) */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="flex items-center gap-6 
            bg-white dark:bg-neutral-900/50 
            rounded-lg p-6 
            border border-neutral-200 dark:border-neutral-800
            hover:border-neutral-300 dark:hover:border-neutral-700
            shadow-sm hover:shadow-md
            transition-all duration-200"
          >
            <a
              href="https://drive.google.com/file/d/1FmlQ96_KjTt2A2_-JaCKlljDAejCCyYy/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <img
                src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/main/src/assets/projects/Habilidades%20Digitales%20Certificado.png"
                alt="Digital Skills Certification"
                className="rounded w-24 h-24 object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                {t("certifications.certificates.digitalSkills.title")}
              </h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {t("certifications.certificates.digitalSkills.description")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FreeCodeCamp Certifications */}
      <div className="mb-12">
        <h3 className="text-2xl text-center font-semibold mb-8 
        text-neutral-800 dark:text-neutral-200">
          FreeCodeCamp
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
          {/* Certificado Back End Development and APIs */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="flex items-center gap-6 
            bg-white dark:bg-neutral-900/50 
            rounded-lg p-6 
            border border-neutral-200 dark:border-neutral-800
            hover:border-neutral-300 dark:hover:border-neutral-700
            shadow-sm hover:shadow-md
            transition-all duration-200"
          >
            <a
              href="https://www.freecodecamp.org/certification/AgustinVelazquez/back-end-development-and-apis"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <img
                src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/certificates/Back%20End%20Development%20and%20APIs.png"
                alt="Back End Development and APIs Certification"
                className="rounded w-24 h-24 object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                {t("certifications.certificates.backEnd.title")}
              </h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {t("certifications.certificates.backEnd.description")}
              </p>
            </div>
          </motion.div>

          {/* Certificado Relational Database */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="flex items-center gap-6 
            bg-white dark:bg-neutral-900/50 
            rounded-lg p-6 
            border border-neutral-200 dark:border-neutral-800
            hover:border-neutral-300 dark:hover:border-neutral-700
            shadow-sm hover:shadow-md
            transition-all duration-200"
          >
            <a
              href="https://www.freecodecamp.org/certification/AgustinVelazquez/relational-database-v8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <img
                src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/certificates/Relational%20Database.png"
                alt="Relational Database Certification"
                className="rounded w-24 h-24 object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                {t("certifications.certificates.relationalDatabase.title")}
              </h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {t(
                  "certifications.certificates.relationalDatabase.description"
                )}
              </p>
            </div>
          </motion.div>

          {/* Certificado JavaScript Algorithms and Data Structures */}
          {(expandedAcademies.freeCodeCamp || false) && (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="flex items-center gap-6 
            bg-white dark:bg-neutral-900/50 
            rounded-lg p-6 
            border border-neutral-200 dark:border-neutral-800
            hover:border-neutral-300 dark:hover:border-neutral-700
            shadow-sm hover:shadow-md
            transition-all duration-200"
          >
            <a
              href="https://www.freecodecamp.org/certification/AgustinVelazquez/javascript-algorithms-and-data-structures-v8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <img
                src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/certificates/JavaScript%20Algorithms%20and%20Data%20Structures.png"
                alt="JavaScript Certification"
                className="rounded w-24 h-24 object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                {t("certifications.certificates.javascript.title")}
              </h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {t("certifications.certificates.javascript.description")}
              </p>
            </div>
          </motion.div>
          )}

          {/* Certificado Quality Assurance */}
          {(expandedAcademies.freeCodeCamp || false) && (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="flex items-center gap-6 
            bg-white dark:bg-neutral-900/50 
            rounded-lg p-6 
            border border-neutral-200 dark:border-neutral-800
            hover:border-neutral-300 dark:hover:border-neutral-700
            shadow-sm hover:shadow-md
            transition-all duration-200"
          >
            <a
              href="https://www.freecodecamp.org/certification/AgustinVelazquez/quality-assurance-v7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <img
                src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/certificates/Quality%20Assurance.png"
                alt="Quality Assurance Certification"
                className="rounded w-24 h-24 object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                {t("certifications.certificates.qualityAssurance.title")}
              </h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {t("certifications.certificates.qualityAssurance.description")}
              </p>
            </div>
          </motion.div>
          )}

          {/* Certificado Data Visualization */}
          {(expandedAcademies.freeCodeCamp || false) && (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="flex items-center gap-6 
            bg-white dark:bg-neutral-900/50 
            rounded-lg p-6 
            border border-neutral-200 dark:border-neutral-800
            hover:border-neutral-300 dark:hover:border-neutral-700
            shadow-sm hover:shadow-md
            transition-all duration-200"
          >
            <a
              href="https://www.freecodecamp.org/certification/AgustinVelazquez/data-visualization"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <img
                src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/certificates/Data%20Visualization.png"
                alt="Data Visualization Certification"
                className="rounded w-24 h-24 object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                {t("certifications.certificates.dataVisualization.title")}
              </h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {t("certifications.certificates.dataVisualization.description")}
              </p>
            </div>
          </motion.div>
          )}

          {/* Certificado Responsive Web Design */}
          {(expandedAcademies.freeCodeCamp || false) && (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="flex items-center gap-6 
            bg-white dark:bg-neutral-900/50 
            rounded-lg p-6 
            border border-neutral-200 dark:border-neutral-800
            hover:border-neutral-300 dark:hover:border-neutral-700
            shadow-sm hover:shadow-md
            transition-all duration-200"
          >
            <a
              href="https://www.freecodecamp.org/certification/AgustinVelazquez/responsive-web-design"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <img
                src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/certificates/Responsive%20Web%20Design.png"
                alt="Responsive Web Design Certification"
                className="rounded w-24 h-24 object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                {t("certifications.certificates.responsiveWebDesign.title")}
              </h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {t(
                  "certifications.certificates.responsiveWebDesign.description"
                )}
              </p>
            </div>
          </motion.div>
          )}

          {/* Certificado Front End Development Libraries */}
          {(expandedAcademies.freeCodeCamp || false) && (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="flex items-center gap-6 
            bg-white dark:bg-neutral-900/50 
            rounded-lg p-6 
            border border-neutral-200 dark:border-neutral-800
            hover:border-neutral-300 dark:hover:border-neutral-700
            shadow-sm hover:shadow-md
            transition-all duration-200"
          >
            <a
              href="https://www.freecodecamp.org/certification/AgustinVelazquez/front-end-development-libraries"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <img
                src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/certificates/Front%20end%20freecodecamp%20certification.png"
                alt="Front End Development Libraries Certification"
                className="rounded w-24 h-24 object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                {t("certifications.certificates.frontEnd.title")}
              </h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {t("certifications.certificates.frontEnd.description")}
              </p>
            </div>
          </motion.div>
          )}
        </div>
        {!expandedAcademies.freeCodeCamp && (
          <div className="text-center mt-6">
            <button
              onClick={() => toggleAcademy("freeCodeCamp")}
              className="px-6 py-2 bg-neutral-700 hover:bg-neutral-800 
              dark:bg-neutral-600 dark:hover:bg-neutral-700 
              text-white rounded-lg transition-colors duration-200"
            >
              {t("certifications.showMore").replace("{count}", "5")}
            </button>
          </div>
        )}
        {expandedAcademies.freeCodeCamp && (
          <div className="text-center mt-6">
            <button
              onClick={() => toggleAcademy("freeCodeCamp")}
              className="px-6 py-2 bg-neutral-700 hover:bg-neutral-800 
              dark:bg-neutral-600 dark:hover:bg-neutral-700 
              text-white rounded-lg transition-colors duration-200"
            >
              {t("certifications.showLess")}
            </button>
          </div>
        )}
      </div>

      {/* Santander Open Academy Certifications */}
      <div className="mb-8">
        <h3 className="text-2xl text-center font-semibold mb-8 
        text-neutral-800 dark:text-neutral-200">
          Santander Open Academy
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
          {/* Certificado Introduction to Data Science */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="flex items-center gap-6 
            bg-white dark:bg-neutral-900/50 
            rounded-lg p-6 
            border border-neutral-200 dark:border-neutral-800
            hover:border-neutral-300 dark:hover:border-neutral-700
            shadow-sm hover:shadow-md
            transition-all duration-200"
          >
            <a
              href="https://drive.google.com/file/d/12z8akRooJ2q7XJXj5sp1TANJkpEZTOeo/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <img
                src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/main/src/assets/projects/Certificado%20Ciencia%20de%20datos.png"
                alt="Data Science Certification"
                className="rounded w-24 h-24 object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                {t("certifications.certificates.dataScience.title")}
              </h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {t("certifications.certificates.dataScience.description")}
              </p>
            </div>
          </motion.div>

          {/* Certificado English Essentials for Professional Growth */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="flex items-center gap-6 
            bg-white dark:bg-neutral-900/50 
            rounded-lg p-6 
            border border-neutral-200 dark:border-neutral-800
            hover:border-neutral-300 dark:hover:border-neutral-700
            shadow-sm hover:shadow-md
            transition-all duration-200"
          >
            <a
              href="https://drive.google.com/file/d/1-wnjPOFy7Ujb_G7PwPGAUiqQ_imwr6Dx/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <img
                src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/main/src/assets/projects/English%20Essentials%20for%20Professional%20Growth%20Certificate.png"
                alt="English Certification"
                className="rounded w-24 h-24 object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                {t("certifications.certificates.english.title")}
              </h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {t("certifications.certificates.english.description")}
              </p>
            </div>
          </motion.div>

          {/* Certificado Python Programming */}
          {(expandedAcademies.santander || false) && (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="flex items-center gap-6 
            bg-white dark:bg-neutral-900/50 
            rounded-lg p-6 
            border border-neutral-200 dark:border-neutral-800
            hover:border-neutral-300 dark:hover:border-neutral-700
            shadow-sm hover:shadow-md
            transition-all duration-200"
          >
            <a
              href="https://drive.google.com/file/d/1ArqH7x6Owqm3Z6Tb3DATVXj9p258XeSJ/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <img
                src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/main/src/assets/projects/Python.png"
                alt="Python Certification"
                className="rounded w-24 h-24 object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                {t("certifications.certificates.python.title")}
              </h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {t("certifications.certificates.python.description")}
              </p>
            </div>
          </motion.div>
          )}

          {/* Certificado ChatGPT */}
          {(expandedAcademies.santander || false) && (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="flex items-center gap-6 
            bg-white dark:bg-neutral-900/50 
            rounded-lg p-6 
            border border-neutral-200 dark:border-neutral-800
            hover:border-neutral-300 dark:hover:border-neutral-700
            shadow-sm hover:shadow-md
            transition-all duration-200"
          >
            <a
              href="https://drive.google.com/file/d/1HmojqKuGJJPOL6PuTFZmB1cGFd-WACJ7/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <img
                src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/main/src/assets/projects/ChatGPT.png"
                alt="ChatGPT Certification"
                className="rounded w-24 h-24 object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                {t("certifications.certificates.chatGPT.title")}
              </h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {t("certifications.certificates.chatGPT.description")}
              </p>
            </div>
          </motion.div>
          )}
        </div>
        {!expandedAcademies.santander && (
          <div className="text-center mt-6">
            <button
              onClick={() => toggleAcademy("santander")}
              className="px-6 py-2 bg-neutral-700 hover:bg-neutral-800 
              dark:bg-neutral-600 dark:hover:bg-neutral-700 
              text-white rounded-lg transition-colors duration-200"
            >
              {t("certifications.showMore").replace("{count}", "2")}
            </button>
          </div>
        )}
        {expandedAcademies.santander && (
          <div className="text-center mt-6">
            <button
              onClick={() => toggleAcademy("santander")}
              className="px-6 py-2 bg-neutral-700 hover:bg-neutral-800 
              dark:bg-neutral-600 dark:hover:bg-neutral-700 
              text-white rounded-lg transition-colors duration-200"
            >
              {t("certifications.showLess")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Certifications;
