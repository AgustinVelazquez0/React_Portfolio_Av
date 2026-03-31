import PropTypes from "prop-types";

const IconCard = ({
  icon: IconComponent,
  name,
  color,
  duration,
  bgColor = "bg-neutral-900",
  customImage,
}) => {
  const getBorderColor = (colorClass) => {
    const colorMap = {
      "text-red-600": { border: "rgb(220, 38, 38)", shadow: "rgba(220,38,38,0.5)" },
      "text-blue-600": { border: "rgb(37, 99, 235)", shadow: "rgba(37,99,235,0.5)" },
      "text-blue-400": { border: "rgb(96, 165, 250)", shadow: "rgba(96,165,250,0.5)" },
      "text-blue-500": { border: "rgb(59, 130, 246)", shadow: "rgba(59,130,246,0.5)" },
      "text-blue-700": { border: "rgb(29, 78, 216)", shadow: "rgba(29,78,216,0.5)" },
      "text-yellow-400": { border: "rgb(250, 204, 21)", shadow: "rgba(250,204,21,0.5)" },
      "text-yellow-500": { border: "rgb(234, 179, 8)", shadow: "rgba(234,179,8,0.5)" },
      "text-cyan-400": { border: "rgb(34, 211, 238)", shadow: "rgba(34,211,238,0.5)" },
      "text-cyan-300": { border: "rgb(103, 232, 249)", shadow: "rgba(103,232,249,0.5)" },
      "text-green-500": { border: "rgb(34, 197, 94)", shadow: "rgba(34,197,94,0.5)" },
      "text-green-600": { border: "rgb(22, 163, 74)", shadow: "rgba(22,163,74,0.5)" },
      "text-green-700": { border: "rgb(21, 128, 61)", shadow: "rgba(21,128,61,0.5)" },
      "text-emerald-500": { border: "rgb(16, 185, 129)", shadow: "rgba(16,185,129,0.5)" },
      "text-gray-400": { border: "rgb(156, 163, 175)", shadow: "rgba(156,163,175,0.5)" },
      "text-gray-500": { border: "rgb(107, 114, 128)", shadow: "rgba(107,114,128,0.5)" },
      "text-gray-600": { border: "rgb(75, 85, 99)", shadow: "rgba(75,85,99,0.5)" },
      "text-gray-700": { border: "rgb(55, 65, 81)", shadow: "rgba(55,65,81,0.5)" },
      "text-slate-500": { border: "rgb(100, 116, 139)", shadow: "rgba(100,116,139,0.5)" },
      "text-indigo-600": { border: "rgb(79, 70, 229)", shadow: "rgba(79,70,229,0.5)" },
      "text-indigo-500": { border: "rgb(99, 102, 241)", shadow: "rgba(99,102,241,0.5)" },
      "text-orange-500": { border: "rgb(249, 115, 22)", shadow: "rgba(249,115,22,0.5)" },
      "text-orange-600": { border: "rgb(234, 88, 12)", shadow: "rgba(234,88,12,0.5)" },
      "text-red-500": { border: "rgb(239, 68, 68)", shadow: "rgba(239,68,68,0.5)" },
      "text-purple-500": { border: "rgb(168, 85, 247)", shadow: "rgba(168,85,247,0.5)" },
      "text-purple-700": { border: "rgb(126, 34, 206)", shadow: "rgba(126,34,206,0.5)" },
      "text-amber-600": { border: "rgb(217, 119, 6)", shadow: "rgba(217,119,6,0.5)" },
    };
    return colorMap[colorClass] || { border: "rgb(34, 211, 238)", shadow: "rgba(34,211,238,0.5)" };
  };

  const borderColors = getBorderColor(color);

  return (
    <div className="icon-card-root relative h-28 w-28">
      <div
        className="icon-card-float h-full w-full"
        style={{ "--icon-float-duration": `${duration}s` }}
      >
        <div className="icon-card-flip relative h-full w-full">
          <div
            className={`icon-card-face absolute inset-0 flex items-center justify-center rounded-md border-4 p-4 ${bgColor}`}
            style={{
              borderColor: borderColors.border,
              boxShadow: `0 0 15px ${borderColors.shadow}`,
            }}
          >
            {customImage ? (
              <img src={customImage} alt={name} className="h-12 w-12 object-contain" />
            ) : IconComponent ? (
              <IconComponent className={`text-5xl ${color}`} />
            ) : (
              <DefaultIcon className={`text-5xl ${color}`} />
            )}
          </div>

          <div
            className={`icon-card-face icon-card-face--back absolute inset-0 flex items-center justify-center rounded-md border-4 p-4 ${bgColor}`}
            style={{
              borderColor: borderColors.border,
              boxShadow: `0 0 15px ${borderColors.shadow}`,
            }}
          >
            <span
              className="text-center text-sm font-semibold leading-tight"
              style={{ color: borderColors.border }}
            >
              {name}
            </span>
          </div>
        </div>
      </div>
    </div>
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

const DefaultIcon = ({ className }) => (
  <div className={`${className} flex items-center justify-center`}>
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  </div>
);

DefaultIcon.propTypes = {
  className: PropTypes.string,
};

export default IconCard;
