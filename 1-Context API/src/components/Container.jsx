import React, { useContext } from "react";
import ChangeThemeBtn from "./ChangeThemeBtn";
import Main from "./Main";
import Footer from "./Footer";
import ThemeContext from "../context/ThemeContext";
const Container = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`container ${theme}`}>
      <ChangeThemeBtn />
      <Main />
      <hr />
      <Footer />
    </div>
  );
};

export default Container;
