"use client";

import { useState, useEffect } from "react";

import { nanoid } from "nanoid";

import NormalPronounTriangle from "@/components/normal-pronoun-triangle";
import ToBePronounTriangle from "@/components/to-be-pronoun-triangle";

import { VERBS } from "@/lib/utils/words";

function BasicPronounTriangles() {
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
      <NormalPronounTriangle
        uuid={ids[0]}
        colour="black"
        verb={VERBS.eat}
        visibility={{
          triangle: true,
          head: true,
          headPronouns: true,
          preterite: true,
          preteritePronouns: true,
          thirdPersonSingular: true,
          thirdPersonSingularPronouns: true,
        }}
        className="col-start-1"
      />

      <ToBePronounTriangle
        uuid={ids[1]}
        colour="black"
        visibility={{
          triangle: true,
          am: true,
          amPronouns: true,
          are: true,
          arePronouns: true,
          is: true,
          isPronouns: true,
          was: true,
          wasPronouns: true,
          were: true,
          werePronouns: true,
        }}
        className="col-start-2"
      />
    </div>
  );
}

export default BasicPronounTriangles;
