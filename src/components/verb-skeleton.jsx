"use client";
import { useState, useEffect } from "react";

import { nanoid } from "nanoid";

import VerbTriangle from "@/components/verb-triangle";

function VerbSkeleton({ bossVerb }) {
  // generate unique ids for all the SVG triangle components
  // only run once when this component loads
  const [ids, setIds] = useState(null);
  useEffect(() => {
    const generateIds = () => {
      return "01234567".split("").map((n) => nanoid());
    };
    const ids = generateIds();
    setIds(ids);
  }, []);

  const helperBe = {
    head: "be",
    preterite: "was",
    pastParticiple: "been",
    presentParticiple: "beeing",
  };

  const helperHave = {
    head: "have",
    preterite: "had",
    pastParticiple: "had",
    presentParticiple: "having",
  };

  if (ids === null) {
    return <p>Loading...</p>; // Render a placeholder while waiting for the ID
  }

  return (
    <div className="grid grid-cols-3 grid-rows-4 h-screen w-full border-2 border-black overflow-hidden">
      <VerbTriangle
        uuid={ids[0]}
        className="col-start-3 row-start-1  "
        verbForms={bossVerb}
        colour="black"
      />
      <VerbTriangle
        uuid={ids[1]}
        className="col-start-2 row-start-2  "
        verbForms={helperBe}
        colour="blue"
      />
      <VerbTriangle
        uuid={ids[2]}
        className="col-start-3 row-start-2  "
        verbForms={bossVerb}
        colour="black"
      />
      <VerbTriangle
        uuid={ids[3]}
        className="col-start-1 row-start-3  "
        verbForms={helperHave}
        colour="green"
      />
      <VerbTriangle
        uuid={ids[4]}
        className="col-start-3 row-start-3  "
        verbForms={bossVerb}
        colour="black"
      />{" "}
      <VerbTriangle
        uuid={ids[5]}
        className="col-start-1 row-start-4  "
        verbForms={helperHave}
        colour="green"
      />
      <VerbTriangle
        uuid={ids[6]}
        className="col-start-2 row-start-4  "
        verbForms={helperBe}
        colour="blue"
      />
      <VerbTriangle
        uuid={ids[7]}
        className="col-start-3 row-start-4  "
        verbForms={bossVerb}
        colour="black"
      />
    </div>
  );
}

export default VerbSkeleton;
