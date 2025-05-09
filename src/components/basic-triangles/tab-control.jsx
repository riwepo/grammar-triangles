"use client";

import React, { useState } from "react";

const TabControl = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={activeTab === index ? "active" : ""}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </>
  );
};

export default TabControl;
