import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGithub,
  FaGit,
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiTailwindcss,
  SiUbuntu,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiDbeaver,
  SiPostman,
  SiRender,
  SiGlitch,
  SiGoogledrive,
  SiCanva,
  SiOpenai,
  SiWetransfer,
  SiVite,
  SiGnubash,
  SiJson,
  SiApachenetbeanside,
} from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";

import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies() {
  const { t } = useTranslation();
  return (
    <div className="border-b border-neutral-800 pb-24">
      {/* Section: Technologies */}
      <h2 className="my-20 text-center text-4xl">{t("technologies.title")}</h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* HTML5 */}
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaHtml5 className="text-7xl text-red-600" />
        </motion.div>

        {/* CSS3 */}
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaCss3Alt className="text-7xl text-blue-600" />
        </motion.div>

        {/* JavaScript */}
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaJsSquare className="text-7xl text-yellow-400" />
        </motion.div>

        {/* TypeScript */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTypescript className="text-7xl text-blue-600" />
        </motion.div>

        {/* React */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        {/* Node.js */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-600" />
        </motion.div>

        {/* Express.js */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiExpress className="text-7xl text-gray-400" />
        </motion.div>

        {/* Tailwind CSS */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-7xl text-blue-400" />
        </motion.div>

        {/* Ubuntu */}
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiUbuntu className="text-7xl text-orange-500" />
        </motion.div>

        {/* Vite */}
        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiVite className="text-7xl text-purple-500" />
        </motion.div>

        {/* Bash */}
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiGnubash className="text-7xl text-green-700" />
        </motion.div>

        {/* JSON */}
        <motion.div
          variants={iconVariants(3.3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJson className="text-7xl text-amber-600" />
        </motion.div>

        {/* API */}
        <motion.div
          variants={iconVariants(2.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiApachenetbeanside className="text-7xl text-indigo-600" />
        </motion.div>
      </motion.div>

      {/* Section: Tools */}
      <h2 className="my-20 text-center text-4xl">{t("technologies.tools")}</h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* Docker */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiDocker className="text-7xl text-blue-500" />
        </motion.div>

        {/* PostgreSQL */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPostgresql className="text-7xl text-blue-400" />
        </motion.div>

        {/* MongoDB */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>

        {/* MongoDB Compass */}
        <motion.div
          variants={iconVariants(2.3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-700" />
        </motion.div>

        {/* GitHub */}
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaGithub className="text-7xl text-gray-500" />
        </motion.div>

        {/* Git */}
        <motion.div
          variants={iconVariants(2.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaGit className="text-7xl text-orange-600" />
        </motion.div>

        {/* DBeaver */}
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiDbeaver className="text-7xl text-blue-700" />
        </motion.div>

        {/* Postman */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPostman className="text-7xl text-orange-500" />
        </motion.div>

        {/* Render */}
        <motion.div
          variants={iconVariants(4.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiRender className="text-7xl text-purple-700" />
        </motion.div>

        {/* Glitch */}
        <motion.div
          variants={iconVariants(4.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiGlitch className="text-7xl text-blue-600" />
        </motion.div>

        {/* Google Drive */}
        <motion.div
          variants={iconVariants(3.6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiGoogledrive className="text-7xl text-green-600" />
        </motion.div>

        {/* Canva */}
        <motion.div
          variants={iconVariants(3.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiCanva className="text-7xl text-purple-500" />
        </motion.div>

        {/* OpenAI */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiOpenai className="text-7xl text-gray-500" />
        </motion.div>

        {/* WeTransfer */}
        <motion.div
          variants={iconVariants(3.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiWetransfer className="text-7xl text-blue-500" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
