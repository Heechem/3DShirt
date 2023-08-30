import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state);

  // check if the tab is active

  const activeStyles =
    isFilterTab && isActiveTab
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : { backgroundColor: "transparent", opacity: 1 };

  return (
    <div
      key={tab.name}
      className={`tab-btn${
        isFilterTab ? "glassmorphism rounded-full" : "rounded-4"
      }`}
      onClick={handleClick}
    >
      <img src={tab.icon} alt="" />
    </div>
  );
};

export default Tab;
