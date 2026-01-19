import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";

const IconCard = ({
  icon: IconComponent,
  name,
  color,
  duration,
  bgColor = "bg-neutral-900",
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const iconVariants = {
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
  };

  const flipVariants = {
    front: {
      rotateY: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    back: {
      rotateY: 180,
      transition: { duration: 0.6, ease: "easeOut" },
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
          className={`absolute inset-0 rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center ${bgColor}`}
          style={{ backfaceVisibility: "hidden" }}
          variants={iconVariants}
          initial="initial"
          animate="animate"
        >
          <IconComponent className={`text-5xl ${color}`} />
        </motion.div>

        {/* Cara trasera (Nombre) */}
        <motion.div
          className={`absolute inset-0 rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center ${bgColor}`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <span className="text-white text-sm font-semibold text-center leading-tight">
            {name}
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

IconCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  bgColor: PropTypes.string,
};

export default IconCard;
