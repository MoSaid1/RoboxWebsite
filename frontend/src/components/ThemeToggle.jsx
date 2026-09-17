import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { getCurrentTheme, setTheme, subscribeToTheme } from "../lib/theme.js";
import "./ThemeToggle.css";

export default function ThemeToggle({ className = "" }) {
  const [theme, setLocalTheme] = useState(getCurrentTheme);

  useEffect(() => subscribeToTheme(setLocalTheme), []);

  const toggle = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <button
      type="button"
      className={`theme-toggle ${className}`}
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className={`theme-toggle-icon ${theme === "dark" ? "sun" : "moon"}`}>
        {theme === "dark" ? <FaSun size={14} /> : <FaMoon size={14} />}
      </span>
    </button>
  );
}
