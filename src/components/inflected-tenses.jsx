"use client";
import { useState, useEffect } from "react";

import { nanoid } from "nanoid";

import BasicTriangle from "@/components/basic-triangle";

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
    <div className="grid h-screen w-full grid-cols-[auto_1fr_1fr_1fr] grid-rows-[minmax(0,1fr)_minmax(0,0.02fr)_minmax(0,1fr)_minmax(0,0.02fr)_minmax(0,1fr)_minmax(0,0.02fr)_minmax(0,1fr)] overflow-hidden border-2 border-black px-4">
      <div className="col-start-1 row-start-1 m-0 mx-auto grid grid-rows-6 items-center justify-center p-0">
        <p className="row-start-2">Present Simple</p>
        <div className="row-start-3 h-full border-b-2 border-red-500"></div>
        <p className="row-start-5">Past Simple</p>
      </div>

      <BasicTriangle
        uuid={ids[0]}
        className="col-start-4 row-start-1"
        verbForms={bossVerb}
        visibility={{
          head: true,
          thirdPersonSingular: true,
          preterite: true,
          tenseLine: true,
        }}
        colour="black"
      />

      <div className="col-span-4 col-start-1 row-start-2 bg-gray-200"></div>

      <div className="col-start-1 row-start-3 m-0 mx-auto grid grid-rows-6 items-center justify-center p-0">
        <p className="row-start-2">Present Continuous</p>
        <div className="row-start-3 h-full border-b-2 border-red-500"></div>
        <p className="row-start-5">Past Continuous</p>
      </div>

      <BasicTriangle
        uuid={ids[1]}
        className="col-start-3 row-start-3"
        verbForms={VERBS.be}
        visibility={{ head: true, tenseLine: true }}
        colour="blue"
      />
      <BasicTriangle
        uuid={ids[2]}
        className="col-start-4 row-start-3"
        verbForms={bossVerb}
        visibility={{ presentParticiple: true }}
        colour="black"
      />

      <div className="col-span-4 col-start-1 row-start-4 bg-gray-200"></div>

      <div className="col-start-1 row-start-5 m-0 mx-auto grid grid-rows-6 items-center justify-center p-0">
        <p className="row-start-2">Present Perfect</p>
        <div className="row-start-3 h-full border-b-2 border-red-500"></div>
        <p className="row-start-5">Past Perfect</p>
      </div>

      <BasicTriangle
        uuid={ids[3]}
        className="col-start-2 row-start-5"
        verbForms={VERBS.have}
        visibility={{ head: true, tenseLine: true }}
        colour="green"
      />
      <BasicTriangle
        uuid={ids[4]}
        className="col-start-4 row-start-5"
        verbForms={bossVerb}
        visibility={{ pastParticiple: true }}
        colour="black"
      />

      <div className="col-span-4 col-start-1 row-start-6 bg-gray-200"></div>

      <div className="col-start-1 row-start-7 m-0 mx-auto grid grid-rows-6 items-center justify-center p-0">
        <p className="row-start-2">Present Perfect Continuous</p>
        <div className="row-start-3 h-full border-b-2 border-red-500"></div>
        <p className="row-start-5">Past Perfect Continuous</p>
      </div>

      <BasicTriangle
        uuid={ids[5]}
        className="col-start-2 row-start-7"
        verbForms={VERBS.have}
        visibility={{ head: true, tenseLine: true }}
        colour="green"
      />
      <BasicTriangle
        uuid={ids[6]}
        className="col-start-3 row-start-7"
        verbForms={VERBS.be}
        visibility={{ pastParticiple: true }}
        colour="blue"
      />
      <BasicTriangle
        uuid={ids[7]}
        className="col-start-4 row-start-7"
        verbForms={bossVerb}
        visibility={{ presentParticiple: true }}
        colour="black"
      />
    </div>
  );
}

export default TensesBlueprint;
