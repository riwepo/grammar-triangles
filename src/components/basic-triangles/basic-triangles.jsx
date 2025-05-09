import React from "react";
import TabControl from "@/components/basic-triangles/tab-control";

function BasicTriangles({ bossVerb }) {
  const tabs = [
    { label: "Normal Verbs", content: <p>Content for Tab 1</p> },
    { label: "To Be", content: <p>Content for Tab 2</p> },
  ];

  return <TabControl tabs={tabs} />;
}

export default BasicTriangles;
