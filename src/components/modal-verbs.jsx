"use client";

import { useState } from "react";

import GrammarContainer from "@/components/grammar-container";
import NormalVerbTriangle from "@/components/basic-triangles/verbs/normal-verb-triangle";

import { VERBS, MODAL_VERBS, SUBJECT_PRONOUNS } from "@/lib/utils/words";

function ModalVerbs() {
  // the selected verb
  const [selectedVerb, setSelectedVerb] = useState(
    VERBS[Object.keys(VERBS)[0]],
  );
  let svgUseIds = ["0", "1", "2", "3", "4", "5", "6", "7"];
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
      <div className="grid h-screen w-full grid-cols-[0.1fr_2px_0.2fr_2px_0.7fr] bg-white">
        <div className="col-start-1 row-start-1 grid h-full auto-rows-auto place-items-center py-2">
          {SUBJECT_PRONOUNS.map((sp) => (
            <p key={sp}>{sp}</p>
          ))}
        </div>

        <div className="col-start-2 bg-gray-200"></div>

        <div className="col-start-3 row-start-1 grid h-full auto-rows-auto place-items-center py-2">
          {MODAL_VERBS.map((mv) => (
            <p key={mv} className="text-yellow-500">
              {mv}
            </p>
          ))}
        </div>

        <div className="col-start-4 bg-gray-200"></div>

        <div className="col-start-5 row-start-1 grid h-full grid-cols-[1fr_1fr_1fr] grid-rows-[minmax(0,1fr)_minmax(0,0.02fr)_minmax(0,1fr)_minmax(0,0.02fr)_minmax(0,1fr)_minmax(0,0.02fr)_minmax(0,1fr)] overflow-auto">
          <NormalVerbTriangle
            uuid={svgUseIds[0]}
            className="col-start-3 row-start-1"
            verb={selectedVerb}
            visibility={{ head: true }}
            colour="black"
          />

          <div className="col-span-3 col-start-1 row-start-2 bg-gray-200"></div>

          <NormalVerbTriangle
            uuid={svgUseIds[1]}
            className="col-start-2 row-start-3"
            verb={VERBS.be}
            visibility={{ head: true }}
            colour="blue"
          />
          <NormalVerbTriangle
            uuid={svgUseIds[2]}
            className="col-start-3 row-start-3"
            verb={selectedVerb}
            visibility={{ presentParticiple: true }}
            colour="black"
          />

          <div className="col-span-3 col-start-1 row-start-4 bg-gray-200"></div>

          <NormalVerbTriangle
            uuid={svgUseIds[3]}
            className="col-start-1 row-start-5"
            verb={VERBS.have}
            visibility={{ head: true }}
            colour="green"
          />
          <NormalVerbTriangle
            uuid={svgUseIds[4]}
            className="col-start-3 row-start-5"
            verb={selectedVerb}
            visibility={{ pastParticiple: true }}
            colour="black"
          />

          <div className="col-span-3 col-start-1 row-start-6 bg-gray-200"></div>

          <NormalVerbTriangle
            uuid={svgUseIds[5]}
            className="col-start-1 row-start-7"
            verb={VERBS.have}
            visibility={{ head: true }}
            colour="green"
          />
          <NormalVerbTriangle
            uuid={svgUseIds[6]}
            className="col-start-2 row-start-7"
            verb={VERBS.be}
            visibility={{ pastParticiple: true }}
            colour="blue"
          />
          <NormalVerbTriangle
            uuid={svgUseIds[7]}
            className="col-start-3 row-start-7"
            verb={selectedVerb}
            visibility={{ presentParticiple: true }}
            colour="black"
          />
        </div>
      </div>
    </GrammarContainer>
  );
}

export default ModalVerbs;
