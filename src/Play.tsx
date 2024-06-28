import React, { createContext, useContext } from "react";

// Create a Context
const color: string[] = ["blue", "green", "red"];
const ThemeContext = createContext(color);

function Play() {
  return (
    <ThemeContext.Provider value={color}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme: string[] = useContext(ThemeContext);
  return (
    <button style={{ background: theme[0] === "blue" ? "blue" : "#CCC" }}>
      Theme
    </button>
  );
}

export default Play;
