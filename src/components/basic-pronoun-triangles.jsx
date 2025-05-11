"use client";

import { useState, useEffect } from "react";

import { nanoid } from "nanoid";

import NormalPronounTriangle from "@/components/basic-triangles/pronouns/normal-pronoun-triangle";
import ToBePronounTriangle from "@/components/basic-triangles/pronouns/to-be-pronoun-triangle";
import Card from "@/components/ui/card";

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
    <div className="grid h-screen w-full grid-cols-2 overflow-hidden border-2 border-red-500 bg-gray-300">
      <Card className="col-start-1 bg-white">
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
        />
      </Card>
      <Card className="col-start-2 bg-white">
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
        />
      </Card>
    </div>
  );
}

export default BasicPronounTriangles;
