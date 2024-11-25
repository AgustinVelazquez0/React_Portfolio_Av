import { motion } from "framer-motion";

function Certifications() {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Certifications
      </motion.h2>
      <div className="flex flex-wrap justify-center">
        {/* Ejemplo de Certificado 1 */}
        <div className="mb-8 flex justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xs"
          >
            <a
              href="https://drive.google.com/file/d/1FmlQ96_KjTt2A2_-JaCKlljDAejCCyYy/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/AgustinVelazquez0/react-portfolio-av/main/src/assets/projects/Certificado%20PNG.png"
                width={100}
                height={100}
                alt="Certification 1"
                className="rounded"
              />
            </a>
          </motion.div>
        </div>

        {/* Ejemplo de Certificado 2 */}
        <div className="mb-8 flex justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xs"
          >
            <a
              href="LINK_A_TU_CERTIFICADO_2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="IMAGEN_DE_TU_CERTIFICADO_2" // Sustituir con la imagen de tu certificado
                width={100}
                height={100}
                alt="Certification 2"
                className="rounded"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
