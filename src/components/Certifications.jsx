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
        {/* Certificado 1 */}
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
                src="https://raw.githubusercontent.com/AgustinVelazquez0/react-portfolio-av/main/src/assets/projects/Certificado%20PNG.png"
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

        {/* Certificado 2 */}
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
                src="https://raw.githubusercontent.com/AgustinVelazquez0/react-portfolio-av/main/src/assets/projects/FreeCodeCamp%20Certificado%20PNG.png"
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
      </div>
    </div>
  );
}

export default Certifications;
