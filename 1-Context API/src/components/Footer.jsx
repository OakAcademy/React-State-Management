import React, { useContext } from "react";
import LangContext from "../context/LangContext";

const Footer = () => {
  const { lang, changeLang } = useContext(LangContext);
  return (
    <div>
      <h1>Footer</h1>
      <p> Language:{lang}</p>
      <button onClick={changeLang}>Change Lang</button>
    </div>
  );
};

export default Footer;
