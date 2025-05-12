"use client";
import { useState, useEffect } from "react";

import { nanoid } from "nanoid";

import NormalVerbTriangle from "@/components/basic-triangles/verbs/normal-verb-triangle";

import { VERBS } from "@/lib/utils/words";

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
    <div className="border-red grid h-screen w-full grid-cols-[auto_1fr_1fr_1fr] grid-rows-[minmax(0,1fr)_minmax(0,0.02fr)_minmax(0,1fr)_minmax(0,0.02fr)_minmax(0,1fr)_minmax(0,0.02fr)_minmax(0,1fr)] overflow-hidden border-2">
      <p className="col-start-1 row-start-1 mx-auto content-center">Simple</p>
      <NormalVerbTriangle
        uuid={ids[0]}
        className="col-start-4 row-start-1"
        verb={bossVerb}
        visibility={{ head: true }}
        colour="black"
      />

      <div className="col-span-4 col-start-1 row-start-2 bg-gray-200"></div>

      <p className="col-start-1 row-start-3 mx-auto content-center">
        Continuous
      </p>
      <NormalVerbTriangle
        uuid={ids[1]}
        className="col-start-3 row-start-3"
        verb={VERBS.be}
        visibility={{ head: true }}
        colour="blue"
      />
      <NormalVerbTriangle
        uuid={ids[2]}
        className="col-start-4 row-start-3"
        verb={bossVerb}
        visibility={{ presentParticiple: true }}
        colour="black"
      />

      <div className="col-span-4 col-start-1 row-start-4 bg-gray-200"></div>

      <p className="col-start-1 row-start-5 mx-auto content-center">
        Perfect Simple
      </p>
      <NormalVerbTriangle
        uuid={ids[3]}
        className="col-start-2 row-start-5"
        verb={VERBS.have}
        visibility={{ head: true }}
        colour="green"
      />
      <NormalVerbTriangle
        uuid={ids[4]}
        className="col-start-4 row-start-5"
        verb={bossVerb}
        visibility={{ pastParticiple: true }}
        colour="black"
      />

      <div className="col-span-4 col-start-1 row-start-6 bg-gray-200"></div>

      <p className="mx-autov col-start-1 row-start-7 content-center">
        Perfect Continuous
      </p>
      <NormalVerbTriangle
        uuid={ids[5]}
        className="col-start-2 row-start-7"
        verb={VERBS.have}
        visibility={{ head: true }}
        colour="green"
      />
      <NormalVerbTriangle
        uuid={ids[6]}
        className="col-start-3 row-start-7"
        verb={VERBS.be}
        visibility={{ pastParticiple: true }}
        colour="blue"
      />
      <NormalVerbTriangle
        uuid={ids[7]}
        className="col-start-4 row-start-7"
        verb={bossVerb}
        visibility={{ presentParticiple: true }}
        colour="black"
      />
    </div>
  );
}

export default TensesBlueprint;
