import { useEffect } from "react";
import { useTheme } from "../Context/ThemeContext.jsx";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ display: "flex", justifyContent: "end" }}>
      <button
        style={{
          height: "30px",
          padding: "10px",
          borderRadius: "10px",
          backgroundColor: "lightblue",
        }}
        onClick={toggleTheme}
      >
        Toggle theme
      </button>
    </div>
  );
};

export default Navbar;
