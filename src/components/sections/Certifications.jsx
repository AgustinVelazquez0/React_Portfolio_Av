import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";

function Certifications() {
  const { t } = useTranslation();

  return (
    <div className="pb-4 border-b border-neutral-900">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        {t("certifications.title")}
      </motion.h2>

      {/* BIOS Institute Certifications */}
      <div className="mb-8">
        <h3 className="text-3xl text-center font-semibold mb-6">
          BIOS Institute
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Certificado 1 (Full Stack Developer) */}
          <div className="mb-8 flex justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xs text-center flex justify-center"
            >
              <a
                href="https://drive.google.com/file/d/1YKgsHIwNC8eGZc2k1cErBzAJJR2tgwSl/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/main/src/assets/projects/Full%20stack.png"
                  alt="Full Stack Developer Certification"
                  className="rounded mb-4 w-32 h-32 object-cover"
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xs text-center"
            >
              <h3 className="text-xl font-semibold mb-2">
                {t("certifications.certificates.fullStack.title")}
              </h3>
              <p className="text-neutral-400">
                {t("certifications.certificates.fullStack.description")}
              </p>
            </motion.div>
          </div>

          {/* Certificado 2 (Digital Skills in the Professional World) */}
          <div className="mb-8 flex justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xs text-center flex justify-center"
            >
              <a
                href="https://drive.google.com/file/d/1FmlQ96_KjTt2A2_-JaCKlljDAejCCyYy/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/main/src/assets/projects/Habilidades%20Digitales%20Certificado.png"
                  alt="Certification 1"
                  className="rounded mb-4 w-32 h-32 object-cover"
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xs text-center"
            >
              <h3 className="text-xl font-semibold mb-2">
                {t("certifications.certificates.digitalSkills.title")}
              </h3>
              <p className="text-neutral-400">
                {t("certifications.certificates.digitalSkills.description")}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FreeCodeCamp Certifications */}
      <div className="mb-8">
        <h3 className="text-3xl text-center font-semibold mb-6">
          FreeCodeCamp
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Certificado Back End Development and APIs */}
          <div className="mb-8 flex justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xs text-center flex justify-center"
            >
              <a
                href="https://www.freecodecamp.org/certification/AgustinVelazquez/back-end-development-and-apis"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/certificates/Back%20End%20Development%20and%20APIs.png"
                  alt="Back End Development and APIs Certification"
                  className="rounded mb-4 w-32 h-32 object-cover"
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xs text-center"
            >
              <h3 className="text-xl font-semibold mb-2">
                {t("certifications.certificates.backEnd.title")}
              </h3>
              <p className="text-neutral-400">
                {t("certifications.certificates.backEnd.description")}
              </p>
            </motion.div>
          </div>

          {/* Certificado Relational Database */}
          <div className="mb-8 flex justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xs text-center flex justify-center"
            >
              <a
                href="https://www.freecodecamp.org/certification/AgustinVelazquez/relational-database-v8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/certificates/Relational%20Database.png"
                  alt="Relational Database Certification"
                  className="rounded mb-4 w-32 h-32 object-cover"
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xs text-center"
            >
              <h3 className="text-xl font-semibold mb-2">
                {t("certifications.certificates.relationalDatabase.title")}
              </h3>
              <p className="text-neutral-400">
                {t(
                  "certifications.certificates.relationalDatabase.description"
                )}
              </p>
            </motion.div>
          </div>

          {/* Certificado 3 (JavaScript Algorithms and Data Structures) */}
          <div className="mb-8 flex justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xs text-center flex justify-center"
            >
              <a
                href="https://www.freecodecamp.org/certification/AgustinVelazquez/javascript-algorithms-and-data-structures-v8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/certificates/JavaScript%20Algorithms%20and%20Data%20Structures.png"
                  alt="JavaScript Certification"
                  className="rounded mb-4 w-32 h-32 object-cover"
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xs text-center"
            >
              <h3 className="text-xl font-semibold mb-2">
                {t("certifications.certificates.javascript.title")}
              </h3>
              <p className="text-neutral-400">
                {t("certifications.certificates.javascript.description")}
              </p>
            </motion.div>
          </div>

          {/* Certificado (Quality Assurance) */}
          <div className="mb-8 flex justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xs text-center flex justify-center"
            >
              <a
                href="https://www.freecodecamp.org/certification/AgustinVelazquez/quality-assurance-v7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/certificates/Quality%20Assurance.png"
                  className="rounded mb-4 w-32 h-32 object-cover"
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xs text-center"
            >
              <h3 className="text-xl font-semibold mb-2">
                {t("certifications.certificates.qualityAssurance.title")}
              </h3>
              <p className="text-neutral-400">
                {t("certifications.certificates.qualityAssurance.description")}
              </p>
            </motion.div>
          </div>

          {/* Certificado Data Visualization */}
          <div className="mb-8 flex justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xs text-center flex justify-center"
            >
              <a
                href="https://www.freecodecamp.org/certification/AgustinVelazquez/data-visualization"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/certificates/Data%20Visualization.png"
                  alt="Data Visualization Certification"
                  className="rounded mb-4 w-32 h-32 object-cover"
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xs text-center"
            >
              <h3 className="text-xl font-semibold mb-2">
                {t("certifications.certificates.dataVisualization.title")}
              </h3>
              <p className="text-neutral-400">
                {t("certifications.certificates.dataVisualization.description")}
              </p>
            </motion.div>
          </div>

          {/* Certificado 4 (Responsive Web Design) */}
          <div className="mb-8 flex justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xs text-center flex justify-center"
            >
              <a
                href="https://www.freecodecamp.org/certification/AgustinVelazquez/responsive-web-design"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/certificates/Responsive%20Web%20Design.png"
                  alt="Certification 2"
                  className="rounded mb-4 w-32 h-32 object-cover"
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xs text-center"
            >
              <h3 className="text-xl font-semibold mb-2">
                {t("certifications.certificates.responsiveWebDesign.title")}
              </h3>
              <p className="text-neutral-400">
                {t(
                  "certifications.certificates.responsiveWebDesign.description"
                )}
              </p>
            </motion.div>
          </div>

          {/* Certificado 5 (Front End Development Libraries) */}
          <div className="mb-8 flex justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xs text-center flex justify-center"
            >
              <a
                href="https://www.freecodecamp.org/certification/AgustinVelazquez/front-end-development-libraries"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/certificates/Front%20end%20freecodecamp%20certification.png"
                  alt="Front End Development Libraries Certification"
                  className="rounded mb-4 w-32 h-32 object-cover"
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xs text-center"
            >
              <h3 className="text-xl font-semibold mb-2">
                {t("certifications.certificates.frontEnd.title")}
              </h3>
              <p className="text-neutral-400">
                {t("certifications.certificates.frontEnd.description")}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Santander Open Academy Certifications */}
      <div className="mb-8">
        <h3 className="text-3xl text-center font-semibold mb-6">
          Santander Open Academy
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Certificado 5 (Introduction to Data Science) */}
          <div className="mb-8 flex justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xs text-center flex justify-center"
            >
              <a
                href="https://drive.google.com/file/d/12z8akRooJ2q7XJXj5sp1TANJkpEZTOeo/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/main/src/assets/projects/Certificado%20Ciencia%20de%20datos.png"
                  alt="Certification 3"
                  className="rounded mb-4 w-32 h-32 object-cover"
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xs text-center"
            >
              <h3 className="text-xl font-semibold mb-2">
                {t("certifications.certificates.dataScience.title")}
              </h3>
              <p className="text-neutral-400">
                {t("certifications.certificates.dataScience.description")}
              </p>
            </motion.div>
          </div>

          {/* Certificado 6 (English Essentials for Professional Growth) */}
          <div className="mb-8 flex justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xs text-center flex justify-center"
            >
              <a
                href="https://drive.google.com/file/d/1-wnjPOFy7Ujb_G7PwPGAUiqQ_imwr6Dx/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/main/src/assets/projects/English%20Essentials%20for%20Professional%20Growth%20Certificate.png"
                  alt="Certification 4"
                  className="rounded mb-4 w-32 h-32 object-cover"
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xs text-center"
            >
              <h3 className="text-xl font-semibold mb-2">
                {t("certifications.certificates.english.title")}
              </h3>
              <p className="text-neutral-400">
                {t("certifications.certificates.english.description")}
              </p>
            </motion.div>
          </div>

          {/* Certificado 5 (Python Programming) */}
          <div className="mb-8 flex justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xs text-center flex justify-center"
            >
              <a
                href="https://drive.google.com/file/d/1ArqH7x6Owqm3Z6Tb3DATVXj9p258XeSJ/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/main/src/assets/projects/Python.png
"
                  alt="Python Certification"
                  className="rounded mb-4 w-32 h-32 object-cover"
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xs text-center"
            >
              <h3 className="text-xl font-semibold mb-2">
                {t("certifications.certificates.python.title")}
              </h3>
              <p className="text-neutral-400">
                {t("certifications.certificates.python.description")}
              </p>
            </motion.div>
          </div>

          {/* Certificado 8 (ChatGPT) */}
          <div className="mb-8 flex justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xs text-center flex justify-center"
            >
              <a
                href="https://drive.google.com/file/d/1kxKh_TozizCEB-E4crh0aKSBRK_5ImCt/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/ChatGPT.png"
                  alt="ChatGPT Certification"
                  className="rounded mb-4 w-32 h-32 object-cover"
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xs text-center"
            >
              <h3 className="text-xl font-semibold mb-2">
                {t("certifications.certificates.chatGPT.title")}
              </h3>
              <p className="text-neutral-400">
                {t("certifications.certificates.chatGPT.description")}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
