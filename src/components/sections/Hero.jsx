import profilePic from "../../assets/Agustin.png";
import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";
import { CV_URL_ES, CV_URL_EN } from "../../constants";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 400, damping: 30, delay },
  },
});

function Hero() {
  const { t, language } = useTranslation();
  const cvUrl = language === "es" ? CV_URL_ES : CV_URL_EN;

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div id="hero" className="pt-24 pb-8 lg:pb-12 lg:mb-8 min-h-[85vh] flex items-center">
      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            {/* Gradiente de fondo más visible */}
            <div className="absolute left-0 top-0 w-96 h-96 bg-cyan-500/15 dark:bg-cyan-500/8 rounded-full blur-3xl -z-10" />
            <div className="absolute right-1/4 top-1/3 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl -z-10" />
            
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-4 text-5xl font-bold tracking-tight lg:text-7xl
              text-neutral-900 dark:text-white
              bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900
              dark:from-white dark:via-neutral-200 dark:to-white
              bg-clip-text text-transparent font-display"
            >
              Agustin Velazquez
            </motion.h1>

            <motion.h2
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-2xl font-semibold tracking-tight mb-4
              text-cyan-600 dark:text-cyan-400 lg:text-3xl"
            >
              {t("hero.title")}
            </motion.h2>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="max-w-xl py-4 text-base leading-snug
              text-neutral-600 dark:text-neutral-400 lg:text-lg"
            >
              {t("hero.content")}
            </motion.p>

            {/* Métricas rápidas */}
            <motion.div
              variants={container(1.1)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-6 py-4 text-sm font-medium
              text-neutral-600 dark:text-neutral-400"
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                {t("hero.stats.projects")}
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                {t("hero.stats.apps")}
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                {t("hero.stats.stack")}
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={container(1.2)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4 mt-4"
            >
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400
                text-white font-semibold shadow-lg hover:shadow-cyan-500/30
                transition-all duration-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {t("hero.ctaHire")}
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("projects")}
                className="px-6 py-3 rounded-lg border-2 border-cyan-500
                text-cyan-500 hover:bg-cyan-500/10 font-semibold
                transition-all duration-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {t("hero.ctaProjects")}
              </motion.button>
              <motion.a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="px-6 py-3 rounded-lg border-2 border-neutral-400
                text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100
                dark:hover:bg-neutral-800 font-semibold transition-all duration-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {t("hero.ctaCV")}
              </motion.a>
            </motion.div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8 mt-8 lg:mt-0">
          <div className="flex justify-center">
            <motion.div
              initial={{ x: 100, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 350, damping: 28, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-2xl blur-2xl -z-10" />
              
              <motion.img
                src={profilePic}
                alt="Agustin Velazquez"
                loading="eager"
                className="w-[280px] h-[420px] object-cover rounded-2xl shadow-2xl
                border-2 border-cyan-400/50"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(34,211,238,0.3)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
