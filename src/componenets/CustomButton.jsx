import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);

  // function to generate the button style
  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff",
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
