import React, { createContext, useState } from "react";

export const ModeContext = createContext();

export const ThemeMode = (props) => {
  const [bgColor, setBgColor] = useState(true);
  const [txtColor, setTxtColor] = useState(true);
  const [elemColor, setElemColor] = useState(true);

  return (
    <ModeContext.Provider
      value={{
        bgColor,
        setBgColor,
        txtColor,
        setTxtColor,
        elemColor,
        setElemColor,
      }}
    >
      {props.children}
    </ModeContext.Provider>
  );
};
