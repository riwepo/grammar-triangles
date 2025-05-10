"use client";

import { useState, useEffect } from "react";

import { nanoid } from "nanoid";

import BasicTriangle from "@/components/basic-triangle";
import ToBeTriangle from "@/components/to-be-triangle";

import { VERBS } from "@/lib/utils/words";

function BasicTriangles() {
  // generate unique ids for all the basic triangle components
  // only run once when this component loads
  const [ids, setIds] = useState(null);
  useEffect(() => {
    const generateIds = () => {
      return "01".split("").map((n) => nanoid());
    };
    const ids = generateIds();
    setIds(ids);
  }, []);

  if (ids === null) {
    return <p>Loading...</p>; // Render a placeholder while waiting for the ID
  }

  return (
    <div className="grid h-screen w-full grid-cols-2 overflow-hidden border-2 border-black">
      <BasicTriangle
        uuid={ids[0]}
        colour="black"
        verbForms={VERBS.eat}
        formVisibility={{
          head: true,
          preterite: true,
          pastParticiple: true,
          presentParticiple: true,
          thirdPersonSingular: true,
          numbers: true,
        }}
        className="col-start-1"
      />
      <ToBeTriangle
        uuid={ids[1]}
        colour="black"
        formVisibility={{
          head: true,
          preterite: true,
          pastParticiple: true,
          presentParticiple: true,
          thirdPersonSingular: true,
          am: true,
          is: true,
          are: true,
          was: true,
          were: true,
        }}
        className="col-start-2"
      />
    </div>
  );
}

export default BasicTriangles;
