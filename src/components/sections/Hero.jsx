import profilePic from "../../assets/Agustin.png";
import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Hero() {
  const { t } = useTranslation(); // 🎯 Usamos el hook para obtener la traducción

  return (
    <div id="hero" className="border-b border-neutral-200 dark:border-neutral-800 pb-12 lg:mb-20">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-5xl font-semibold tracking-tight lg:mt-12 lg:text-7xl
              text-neutral-900 dark:text-white"
            >
              Agustin Velazquez
            </motion.h1>

            <motion.h2
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-2xl font-medium tracking-tight mb-6
              text-neutral-700 dark:text-neutral-300 lg:text-3xl"
            >
              {t("hero.title")}
            </motion.h2>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="max-w-xl py-4 text-base leading-relaxed
              text-neutral-600 dark:text-neutral-400 lg:text-lg"
            >
              {t("hero.content")}
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              src={profilePic}
              alt="Agustin Velazquez"
              className="w-[280px] h-[420px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
