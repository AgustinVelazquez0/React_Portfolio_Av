import { FaSun, FaMoon } from "react-icons/fa6";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-9 h-9 inline-flex items-center justify-center rounded-md
        text-ink-secondary hover:text-ink-primary hover:bg-surface-1
        transition-colors duration-fast
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
    </button>
  );
}
