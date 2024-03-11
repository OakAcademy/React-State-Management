import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LangContext from "../context/LangContext";

const ChangeThemeBtn = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const { lang, changeLang } = useContext(LangContext);
  return (
    <div>
      <h1>Header</h1>
      <p>Theme:{theme}</p>
      <p>Language:{lang}</p>
      <button onClick={changeTheme}>Change</button>
      <button onClick={changeLang}>Change Lang</button>
    </div>
  );
};

export default ChangeThemeBtn;
