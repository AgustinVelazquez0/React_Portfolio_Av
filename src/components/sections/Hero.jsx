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
    <div id="hero" className="pt-24 pb-12 lg:pb-20 lg:mb-20 min-h-screen flex items-center">
      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            {/* Efecto de gradiente de fondo sutil */}
            <div className="absolute left-0 top-0 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl -z-10" />
            
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-4 text-5xl font-bold tracking-tight lg:text-7xl
              text-neutral-900 dark:text-white
              bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900
              dark:from-white dark:via-neutral-200 dark:to-white
              bg-clip-text text-transparent"
            >
              Agustin Velazquez
            </motion.h1>

            <motion.h2
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-2xl font-semibold tracking-tight mb-6
              text-cyan-600 dark:text-cyan-400 lg:text-3xl"
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

        <div className="w-full lg:w-1/2 lg:p-8 mt-8 lg:mt-0">
          <div className="flex justify-center">
            <motion.div
              initial={{ x: 100, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="relative"
            >
              {/* Efecto de brillo alrededor de la imagen */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-md blur-2xl -z-10" />
              
              <motion.img
                src={profilePic}
                alt="Agustin Velazquez"
                className="w-[280px] h-[420px] object-cover rounded-md shadow-2xl
                border-2 border-cyan-400/50"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(34,211,238,0.3)"
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
