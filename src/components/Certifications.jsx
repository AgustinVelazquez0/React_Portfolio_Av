import { motion } from "framer-motion";

function Certifications() {
  return (
    <div className="pb-4 border-b border-neutral-900">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Certifications
      </motion.h2>
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
              Full Stack Developer.
            </h3>
            <p className="text-neutral-400">
              Certification validating skills in full stack development,
              including front-end and back-end technologies.
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
              Digital Skills in the Professional World.
            </h3>
            <p className="text-neutral-400">
              Certification validating proficiency in key digital tools for the
              current professional environment.
            </p>
          </motion.div>
        </div>

        {/* Certificado 3 (Responsive Web Design) */}
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
                src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/main/src/assets/projects/Responsive%20Certificate.png"
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
              Responsive Web Design.
            </h3>
            <p className="text-neutral-400">
              Certification skills in responsive web design and front-end
              development.
            </p>
          </motion.div>
        </div>

        {/* Certificado 4 (Python Programming) */}
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
                src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/Python.png"
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
            <h3 className="text-xl font-semibold mb-2">Python Programming.</h3>
            <p className="text-neutral-400">
              Certification validating proficiency in Python programming.
            </p>
          </motion.div>
        </div>

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
              Introduction to Data Science.
            </h3>
            <p className="text-neutral-400">
              Certification in foundational data science concepts and methods.
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
              English Essentials for Professional Growth.
            </h3>
            <p className="text-neutral-400">
              Certification validating essential English skills for career
              development.
            </p>
          </motion.div>
        </div>

        {/* Certificado 7 (ChatGPT) */}
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
            <h3 className="text-xl font-semibold mb-2">ChatGPT.</h3>
            <p className="text-neutral-400">
              Certification in using ChatGPT for various professional tasks.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
