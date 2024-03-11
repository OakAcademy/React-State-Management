import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Test = ({ children }) => {
  const data = useContext(ThemeContext);
  console.log("Data2", data);
  return <div>{children}</div>;
};

export default Test;
