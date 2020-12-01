import React from "react";

export const Theme = () => {
  const [theme, setTheme] = React.useState("dark");
  return (
    <div className={`theme-container ${theme}`}>
      {theme === "dark" ? (
        <button className="btn" onClick={() => setTheme("light")}>
          Light
        </button>
      ) : (
        <button className="btn" onClick={() => setTheme("dark")}>
          Dark
        </button>
      )}
    </div>
  );
};
