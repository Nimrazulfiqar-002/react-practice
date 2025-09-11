// import React, { useState } from "react";
// import { ThemeContext } from "./ThemeContext";
// import ThemeButton from "./ThemeButton";

// function ToggleApp() {
//   const [theme, setTheme] = useState("light");

//   return (
//     <ThemeContext.Provider value={theme}>
//       <h1>Current Theme: {theme}</h1>
//       <ThemeButton />
//       <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
//         Toggle button
//       </button>
//     </ThemeContext.Provider>
//   );
// }

// export default ToggleApp;
import React, { useContext } from 'react'
import { themeContext } from './ThemeContext'

const ToggleApp = () => {
  const {theme,ToggleHandler}=useContext(themeContext)
  return (
    <>
    <div  style={{ background: theme === "light" ? "#333" : "#fff" }}>
      <h1>{theme}</h1>
    <button onClick={ToggleHandler}>Toggle</button>
    </div>
    
    </>
  )
}

export default ToggleApp
