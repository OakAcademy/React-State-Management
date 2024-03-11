import { createContext } from "react";
import useLang from "../hooks/useLang";
const LangContext = createContext();

export const LangContextProvider = ({ children }) => {
  const { lang, changeLang } = useLang();
  return (
    <LangContext.Provider value={{ lang, changeLang }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangContext;
