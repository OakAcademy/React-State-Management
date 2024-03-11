import { useState } from "react";

const useLang = () => {
  const [lang, setLang] = useState("us");

  const changeLang = () => {
    setLang((lang) => (lang === "en" ? "us" : "en"));
  };

  return { lang, changeLang };
};
export default useLang;
