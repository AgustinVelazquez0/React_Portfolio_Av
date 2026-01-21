import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";

const IconCard = ({
  icon: IconComponent,
  name,
  color,
  duration,
  bgColor = "bg-neutral-900",
  customImage,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Función para obtener el color de borde y sombra en formato RGB
  const getBorderColor = (colorClass) => {
    // Mapeo completo de colores Tailwind a RGB
    const colorMap = {
      "text-red-600": { border: "rgb(220, 38, 38)", shadow: "rgba(220,38,38,0.5)" },
      "text-blue-600": { border: "rgb(37, 99, 235)", shadow: "rgba(37,99,235,0.5)" },
      "text-blue-400": { border: "rgb(96, 165, 250)", shadow: "rgba(96,165,250,0.5)" },
      "text-blue-500": { border: "rgb(59, 130, 246)", shadow: "rgba(59,130,246,0.5)" },
      "text-blue-700": { border: "rgb(29, 78, 216)", shadow: "rgba(29,78,216,0.5)" },
      "text-yellow-400": { border: "rgb(250, 204, 21)", shadow: "rgba(250,204,21,0.5)" },
      "text-cyan-400": { border: "rgb(34, 211, 238)", shadow: "rgba(34,211,238,0.5)" },
      "text-cyan-300": { border: "rgb(103, 232, 249)", shadow: "rgba(103,232,249,0.5)" },
      "text-green-500": { border: "rgb(34, 197, 94)", shadow: "rgba(34,197,94,0.5)" },
      "text-green-600": { border: "rgb(22, 163, 74)", shadow: "rgba(22,163,74,0.5)" },
      "text-green-700": { border: "rgb(21, 128, 61)", shadow: "rgba(21,128,61,0.5)" },
      "text-gray-400": { border: "rgb(156, 163, 175)", shadow: "rgba(156,163,175,0.5)" },
      "text-gray-500": { border: "rgb(107, 114, 128)", shadow: "rgba(107,114,128,0.5)" },
      "text-indigo-600": { border: "rgb(79, 70, 229)", shadow: "rgba(79,70,229,0.5)" },
      "text-indigo-500": { border: "rgb(99, 102, 241)", shadow: "rgba(99,102,241,0.5)" },
      "text-orange-500": { border: "rgb(249, 115, 22)", shadow: "rgba(249,115,22,0.5)" },
      "text-orange-600": { border: "rgb(234, 88, 12)", shadow: "rgba(234,88,12,0.5)" },
      "text-purple-500": { border: "rgb(168, 85, 247)", shadow: "rgba(168,85,247,0.5)" },
      "text-purple-700": { border: "rgb(126, 34, 206)", shadow: "rgba(126,34,206,0.5)" },
      "text-amber-600": { border: "rgb(217, 119, 6)", shadow: "rgba(217,119,6,0.5)" },
    };
    return colorMap[colorClass] || { border: "rgb(34, 211, 238)", shadow: "rgba(34,211,238,0.5)" };
  };

  const borderColors = getBorderColor(color);

  const flipVariants = {
    front: {
      rotateY: 0,
      y: [10, -10],
      transition: {
        rotateY: { duration: 0.6, ease: "easeOut" },
        y: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
    },
    back: {
      rotateY: 180,
      y: [10, -10],
      transition: { 
        rotateY: { duration: 0.6, ease: "easeOut" },
        y: {
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        },
      },
    },
  };

  const cardVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="relative w-28 h-28 cursor-pointer"
      style={{ perspective: "1000px" }}
      variants={cardVariants}
      whileHover="hover"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      {/* Contenedor de la carta */}
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}
        variants={flipVariants}
        animate={isFlipped ? "back" : "front"}
      >
        {/* Cara frontal (Icono) */}
        <motion.div
          className={`absolute inset-0 rounded-2xl border-4 p-4 flex items-center justify-center ${bgColor}`}
          style={{ 
            backfaceVisibility: "hidden",
            borderColor: borderColors.border,
            boxShadow: `0 0 15px ${borderColors.shadow}`,
          }}
        >
          {customImage ? (
            <img 
              src={customImage} 
              alt={name} 
              className="w-12 h-12 object-contain"
            />
          ) : IconComponent ? (
          <IconComponent className={`text-5xl ${color}`} />
          ) : (
            <DefaultIcon className={`text-5xl ${color}`} />
          )}
        </motion.div>

        {/* Cara trasera (Nombre) */}
        <motion.div
          className={`absolute inset-0 rounded-2xl border-4 p-4 flex items-center justify-center ${bgColor}`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderColor: borderColors.border,
            boxShadow: `0 0 15px ${borderColors.shadow}`,
          }}
        >
          <span 
            className="text-sm font-semibold text-center leading-tight"
            style={{ color: borderColors.border }}
          >
            {name}
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

IconCard.propTypes = {
  icon: PropTypes.elementType,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  bgColor: PropTypes.string,
  customImage: PropTypes.string,
};

// Si no hay icono ni customImage, usar un icono por defecto
const DefaultIcon = ({ className }) => (
  <div className={`${className} flex items-center justify-center`}>
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  </div>
);

DefaultIcon.propTypes = {
  className: PropTypes.string,
};

export default IconCard;
