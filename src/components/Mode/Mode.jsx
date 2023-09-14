import React, { useContext } from "react";
import { ModeContext } from "../../Context/ModeContext";

import "./style.sass";

export default function Mode() {
  const {
    bgColor,
    setBgColor,
    txtColor,
    setTxtColor,
    elemColor,
    setElemColor,
  } = useContext(ModeContext);

  const toggleTheme = () => {
    setBgColor(!bgColor);
    setTxtColor(!txtColor);
    setElemColor(!elemColor);
  };

  const textColor = txtColor ? "#fff" : "#313131";

  return (
    <div className="mode">
      <div className="switch">
        <input
          id="toggle__switch"
          type="checkbox"
          checked={bgColor}
          onChange={toggleTheme}
        />
        <label htmlFor="toggle__switch"></label>
      </div>

      <label className="mode__label" style={{ color: textColor }}>
        Mode
      </label>
    </div>
  );
}
