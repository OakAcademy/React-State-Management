import { useState } from "react";
const defaultTheme = localStorage.getItem("theme") || "white";
const useTheme = () => {
  const [theme, setTheme] = useState(defaultTheme);

  const changeTheme = () => {
    setTheme((theme) => (theme === "white" ? "dark" : "white"));
  };
  return { theme, changeTheme };
};
export default useTheme;
