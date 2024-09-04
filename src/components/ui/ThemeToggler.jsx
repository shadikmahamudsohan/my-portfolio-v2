import { useEffect, useState } from "react";

const themes = ["forest", "dracula", "night"]; // List of available themes

const ThemeToggler = () => {
  const [selectedTheme, setSelectedTheme] = useState("forest"); // Default theme

  useEffect(() => {
    // Get theme from local storage or default to 'forest'
    const savedTheme = localStorage.getItem("theme") || "forest";
    setSelectedTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const handleThemeChange = (event) => {
    const newTheme = event.target.value;
    setSelectedTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="flex justify-between items-center">
      <h3 className="text-lg font-bold">Theme</h3>
      <div className="flex justify-between min-w-[100px]">
        {themes.map((theme) => (
          <input
            key={theme}
            type="radio"
            name={theme}
            value={theme}
            checked={selectedTheme === theme}
            onChange={handleThemeChange}
            className={`radio ${
              theme === "forest" && "border-green-500 checked:bg-green-500"
            } ${theme === "dracula" && "border-pink-500 checked:bg-pink-500"} ${
              theme === "night" && "border-blue-500 checked:bg-blue-500"
            } `}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeToggler;
