import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LangContext from "../context/LangContext";

const Main = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const { lang, changeLang } = useContext(LangContext);
  return (
    <div>
      <hr />
      <h1>Main</h1>
      <p>Theme:{theme}</p>
      <p>Language:{lang}</p>
      <button onClick={changeTheme}>Change</button>
      <button onClick={changeLang}>Change Lang</button>
    </div>
  );
};

export default Main;
