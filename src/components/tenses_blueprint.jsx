"use client";
import { useState, useEffect } from "react";

import { nanoid } from "nanoid";

import BasicTriangle from "@/components/basic-triangle";

import VERBS from "@/lib/utils/verb-data";

function TensesBlueprint({ bossVerb }) {
  // generate unique ids for all the basic triangle components
  // only run once when this component loads
  const [ids, setIds] = useState(null);
  useEffect(() => {
    const generateIds = () => {
      return "01234567".split("").map((n) => nanoid());
    };
    const ids = generateIds();
    setIds(ids);
  }, []);

  if (ids === null) {
    return <p>Loading...</p>; // Render a placeholder while waiting for the ID
  }

  return (
    <div className="grid grid-cols-3 grid-rows-4 h-screen w-full border-2 border-black overflow-hidden">
      {/* simple */}
      <BasicTriangle
        uuid={ids[0]}
        className="col-start-3 row-start-1  "
        verbForms={bossVerb}
        formVisibility={{ head: true }}
        colour="black"
      />
      {/* continuous */}
      <BasicTriangle
        uuid={ids[1]}
        className="col-start-2 row-start-2  "
        verbForms={VERBS.be}
        formVisibility={{ head: true }}
        colour="blue"
      />
      <BasicTriangle
        uuid={ids[2]}
        className="col-start-3 row-start-2  "
        verbForms={bossVerb}
        formVisibility={{ presentParticiple: true }}
        colour="black"
      />
      {/* perfect */}
      <BasicTriangle
        uuid={ids[3]}
        className="col-start-1 row-start-3  "
        verbForms={VERBS.have}
        formVisibility={{ head: true }}
        colour="green"
      />
      <BasicTriangle
        uuid={ids[4]}
        className="col-start-3 row-start-3  "
        verbForms={bossVerb}
        formVisibility={{ pastParticiple: true }}
        colour="black"
      />
      {/* perfect continuous*/}
      <BasicTriangle
        uuid={ids[5]}
        className="col-start-1 row-start-4  "
        verbForms={VERBS.have}
        formVisibility={{ head: true }}
        colour="green"
      />
      <BasicTriangle
        uuid={ids[6]}
        className="col-start-2 row-start-4  "
        verbForms={VERBS.be}
        formVisibility={{ pastParticiple: true }}
        colour="blue"
      />
      <BasicTriangle
        uuid={ids[7]}
        className="col-start-3 row-start-4  "
        verbForms={bossVerb}
        formVisibility={{ presentParticiple: true }}
        colour="black"
      />
    </div>
  );
}

export default TensesBlueprint;
