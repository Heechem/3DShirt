import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";
import { getContrastingColor } from "../config/helpers";

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);

  // function to generate the button style
  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      return {
        borderWidth: "1px",
        borderColor: snap.color,
        color: snap.color,
      };
    }
  };

  return (
    <button
      className={`py-1.2 flex-1 rounded-md px-2 ${customStyles} `}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
