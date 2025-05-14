"use client";
import { useState } from "react";

import GrammarContainer from "@/components/grammar-container";
import NormalVerbTriangle from "@/components/basic-triangles/verbs/normal-verb-triangle";
import NormalPronounTriangle from "@/components/basic-triangles/pronouns/normal-pronoun-triangle";
import ToBeVerbTriangle from "@/components/basic-triangles/verbs/to-be-verb-triangle";
import ToBePronounTriangle from "@/components/basic-triangles/pronouns/to-be-pronoun-triangle";

import { VERBS } from "@/lib/utils/words";

function InflectedTenses() {
  // the selected verb
  const [selectedVerb, setSelectedVerb] = useState(
    VERBS[Object.keys(VERBS)[0]],
  );
  let svgUseIds = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
  ];
  const handleContainerLoaded = (mySvgUseIds) => {
    svgUseIds = mySvgUseIds;
  };

  const handleVerbSelected = (key) => {
    setSelectedVerb(VERBS[key]);
  };

  return (
    <GrammarContainer
      svgUseIdSeed="01234567"
      onVerbSelected={handleVerbSelected}
      onLoaded={handleContainerLoaded}
    >
      <div className="grid h-screen w-full grid-cols-[auto_1fr_1fr_1fr] grid-rows-[1fr_2px_1fr_2px_1fr_2px_1fr] bg-white">
        <div className="col-start-1 row-start-1 m-0 mx-auto grid grid-rows-6 items-center justify-center p-0">
          <p className="row-start-2">Present Simple</p>
          <div className="row-start-3 h-full border-b-2 border-red-500"></div>
          <p className="row-start-5">Past Simple</p>
        </div>

        <NormalVerbTriangle
          uuid={svgUseIds[0]}
          className="col-start-4 row-start-1"
          verb={selectedVerb}
          visibility={{
            head: true,
            thirdPersonSingular: true,
            preterite: true,
            tenseLine: true,
          }}
          colour="black"
        />
        <NormalPronounTriangle
          uuid={svgUseIds[1]}
          className="col-start-4 row-start-1"
          verb={selectedVerb}
          visibility={{
            headPronouns: true,
            thirdPersonSingularPronouns: true,
            preteritePronouns: true,
          }}
          colour="black"
        />

        <div className="col-span-4 col-start-1 row-start-2 bg-gray-200"></div>

        <div className="col-start-1 row-start-3 m-0 mx-auto grid grid-rows-6 items-center justify-center p-0">
          <p className="row-start-2">Present Continuous</p>
          <div className="row-start-3 h-full border-b-2 border-red-500"></div>
          <p className="row-start-5">Past Continuous</p>
        </div>

        <ToBeVerbTriangle
          uuid={svgUseIds[2]}
          className="col-start-3 row-start-3"
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
          uuid={svgUseIds[3]}
          className="col-start-3 row-start-3"
          visibility={{
            amPronouns: true,
            arePronouns: true,
            isPronouns: true,
            wasPronouns: true,
            werePronouns: true,
          }}
          colour="black"
        />

        <NormalVerbTriangle
          uuid={svgUseIds[4]}
          className="col-start-4 row-start-3"
          verb={selectedVerb}
          visibility={{ presentParticiple: true }}
          colour="black"
        />

        <div className="col-span-4 col-start-1 row-start-4 bg-gray-200"></div>

        <div className="col-start-1 row-start-5 m-0 mx-auto grid grid-rows-6 items-center justify-center p-0">
          <p className="row-start-2">Present Perfect Simple</p>
          <div className="row-start-3 h-full border-b-2 border-red-500"></div>
          <p className="row-start-5">Past Perfect Simple</p>
        </div>

        <NormalVerbTriangle
          uuid={svgUseIds[5]}
          className="col-start-2 row-start-5"
          verb={VERBS.have}
          visibility={{
            head: true,
            preterite: true,
            thirdPersonSingular: true,
            tenseLine: true,
          }}
          colour="green"
        />
        <NormalPronounTriangle
          uuid={svgUseIds[6]}
          className="col-start-2 row-start-5"
          verb={selectedVerb}
          visibility={{
            headPronouns: true,
            thirdPersonSingularPronouns: true,
            preteritePronouns: true,
          }}
          colour="green"
        />
        <NormalVerbTriangle
          uuid={svgUseIds[7]}
          className="col-start-4 row-start-5"
          verb={selectedVerb}
          visibility={{ pastParticiple: true }}
          colour="black"
        />

        <div className="col-span-4 col-start-1 row-start-6 bg-gray-200"></div>

        <div className="col-start-1 row-start-7 m-0 mx-auto grid grid-rows-6 items-center justify-center p-0">
          <p className="row-start-2">Present Perfect Continuous</p>
          <div className="row-start-3 h-full border-b-2 border-red-500"></div>
          <p className="row-start-5">Past Perfect Continuous</p>
        </div>

        <NormalVerbTriangle
          uuid={svgUseIds[8]}
          className="col-start-2 row-start-7"
          verb={VERBS.have}
          visibility={{
            head: true,
            preterite: true,
            thirdPersonSingular: true,
            tenseLine: true,
          }}
          colour="green"
        />
        <NormalPronounTriangle
          uuid={svgUseIds[9]}
          className="col-start-2 row-start-7"
          verb={selectedVerb}
          visibility={{
            headPronouns: true,
            thirdPersonSingularPronouns: true,
            preteritePronouns: true,
          }}
          colour="green"
        />
        <NormalVerbTriangle
          uuid={svgUseIds[10]}
          className="col-start-3 row-start-7"
          verb={VERBS.be}
          visibility={{ pastParticiple: true }}
          colour="blue"
        />
        <NormalVerbTriangle
          uuid={svgUseIds[11]}
          className="col-start-4 row-start-7"
          verb={selectedVerb}
          visibility={{ presentParticiple: true }}
          colour="black"
        />
      </div>
    </GrammarContainer>
  );
}

export default InflectedTenses;
