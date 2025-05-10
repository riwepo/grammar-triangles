"use client";
import { useState, useEffect } from "react";

import { nanoid } from "nanoid";

import NormalVerbTriangle from "@/components/normal-verb-triangle";
import NormalPronounTriangle from "@/components/normal-pronoun-triangle";
import ToBeVerbTriangle from "@/components/to-be-verb-triangle";
import ToBePronounTriangle from "@/components/to-be-pronoun-triangle";

import { VERBS } from "@/lib/utils/words";

function InflectedTensesNot({ bossVerb }) {
  // generate unique ids for all the basic triangle components
  // only run once when this component loads
  const [ids, setIds] = useState(null);
  useEffect(() => {
    const generateIds = () => {
      return "01234567890123".split("").map((n) => nanoid());
    };
    const ids = generateIds();
    setIds(ids);
  }, []);

  if (ids === null) {
    return <p>Loading...</p>; // Render a placeholder while waiting for the ID
  }

  return (
    <div className="grid h-screen w-full grid-cols-[auto_1fr_0.1fr_1fr_0.1fr_1fr] grid-rows-[minmax(0,1fr)_minmax(0,0.02fr)_minmax(0,1fr)_minmax(0,0.02fr)_minmax(0,1fr)_minmax(0,0.02fr)_minmax(0,1fr)] overflow-hidden border-2 border-black px-4">
      <div className="col-start-1 row-start-1 m-0 mx-auto grid grid-rows-6 items-center justify-center p-0">
        <p className="row-start-2">Present Simple</p>
        <div className="row-start-3 h-full border-b-2 border-red-500"></div>
        <p className="row-start-5">Past Simple</p>
      </div>
      <NormalVerbTriangle
        uuid={ids[0]}
        className="col-start-4 row-start-1"
        verbForms={VERBS.do}
        visibility={{
          head: true,
          thirdPersonSingular: true,
          preterite: true,
          tenseLine: true,
        }}
        colour="red"
      />
      <NormalPronounTriangle
        uuid={ids[1]}
        className="col-start-4 row-start-1"
        verbForms={VERBS.do}
        visibility={{
          headPronouns: true,
          thirdPersonSingularPronouns: true,
          preteritePronouns: true,
        }}
        colour="red"
      />
      <p className="col-start-5 row-start-1 my-auto font-bold text-red-500">
        not
      </p>
      <NormalVerbTriangle
        uuid={ids[2]}
        className="col-start-6 row-start-1"
        verbForms={bossVerb}
        visibility={{ head: true }}
        colour="black"
      />
      {/*  <NormalVerbTriangle
        uuid={ids[2]}
        className="col-start-6 row-start-1"
        verbForms={bossVerb}
        visibility={{
          head: true,
          thirdPersonSingular: true,
          preterite: true,
          tenseLine: true,
        }}
        colour="black"
      />
      <NormalPronounTriangle
        uuid={ids[3]}
        className="col-start-6 row-start-1"
        verbForms={bossVerb}
        visibility={{
          headPronouns: true,
          thirdPersonSingularPronouns: true,
          preteritePronouns: true,
        }}
        colour="black"
      /> */}

      <div className="col-span-6 col-start-1 row-start-2 bg-gray-200"></div>

      <div className="col-start-1 row-start-3 m-0 mx-auto grid grid-rows-6 items-center justify-center p-0">
        <p className="row-start-2">Present Continuous</p>
        <div className="row-start-3 h-full border-b-2 border-red-500"></div>
        <p className="row-start-5">Past Continuous</p>
      </div>

      <ToBeVerbTriangle
        uuid={ids[4]}
        className="col-start-4 row-start-3"
        visibility={{
          am: true,
          are: true,
          is: true,
          was: true,
          were: true,
          tenseLine: true,
        }}
        colour="blue"
      />
      <ToBePronounTriangle
        uuid={ids[5]}
        className="col-start-4 row-start-3"
        visibility={{
          amPronouns: true,
          arePronouns: true,
          isPronouns: true,
          wasPronouns: true,
          werePronouns: true,
        }}
        colour="black"
      />
      <p className="col-start-5 row-start-3 my-auto font-bold text-red-500">
        not
      </p>
      <NormalVerbTriangle
        uuid={ids[6]}
        className="col-start-6 row-start-3"
        verbForms={bossVerb}
        visibility={{ presentParticiple: true }}
        colour="black"
      />

      <div className="col-span-6 col-start-1 row-start-4 bg-gray-200"></div>

      <div className="col-start-1 row-start-5 m-0 mx-auto grid grid-rows-6 items-center justify-center p-0">
        <p className="row-start-2">Present Perfect</p>
        <div className="row-start-3 h-full border-b-2 border-red-500"></div>
        <p className="row-start-5">Past Perfect</p>
      </div>

      <NormalVerbTriangle
        uuid={ids[7]}
        className="col-start-2 row-start-5"
        verbForms={VERBS.have}
        visibility={{
          head: true,
          preterite: true,
          thirdPersonSingular: true,
          tenseLine: true,
        }}
        colour="green"
      />
      <NormalPronounTriangle
        uuid={ids[8]}
        className="col-start-2 row-start-5"
        verbForms={bossVerb}
        visibility={{
          headPronouns: true,
          thirdPersonSingularPronouns: true,
          preteritePronouns: true,
        }}
        colour="green"
      />
      <p className="col-start-3 row-start-5 my-auto font-bold text-red-500">
        not
      </p>
      <NormalVerbTriangle
        uuid={ids[9]}
        className="col-start-6 row-start-5"
        verbForms={bossVerb}
        visibility={{ pastParticiple: true }}
        colour="black"
      />

      <div className="col-span-6 col-start-1 row-start-6 bg-gray-200"></div>

      <div className="col-start-1 row-start-7 m-0 mx-auto grid grid-rows-6 items-center justify-center p-0">
        <p className="row-start-2">Present Perfect Continuous</p>
        <div className="row-start-3 h-full border-b-2 border-red-500"></div>
        <p className="row-start-5">Past Perfect Continuous</p>
      </div>

      <NormalVerbTriangle
        uuid={ids[10]}
        className="col-start-2 row-start-7"
        verbForms={VERBS.have}
        visibility={{
          head: true,
          preterite: true,
          thirdPersonSingular: true,
          tenseLine: true,
        }}
        colour="green"
      />
      <NormalPronounTriangle
        uuid={ids[11]}
        className="col-start-2 row-start-7"
        verbForms={bossVerb}
        visibility={{
          headPronouns: true,
          thirdPersonSingularPronouns: true,
          preteritePronouns: true,
        }}
        colour="green"
      />
      <p className="col-start-3 row-start-7 my-auto font-bold text-red-500">
        not
      </p>
      <NormalVerbTriangle
        uuid={ids[12]}
        className="col-start-4 row-start-7"
        verbForms={VERBS.be}
        visibility={{ pastParticiple: true }}
        colour="blue"
      />
      <NormalVerbTriangle
        uuid={ids[13]}
        className="col-start-6 row-start-7"
        verbForms={bossVerb}
        visibility={{ presentParticiple: true }}
        colour="black"
      />
    </div>
  );
}

export default InflectedTensesNot;
