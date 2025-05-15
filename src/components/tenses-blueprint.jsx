"use client";
import { useState } from "react";

import GrammarContainer from "@/components/grammar-container";
import NormalVerbTriangle from "@/components/basic-triangles/verbs/normal-verb-triangle";
import Card from "@/components/ui/card";

import { VERBS } from "@/lib/utils/words";

function TensesBlueprint({ bossVerb }) {
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
      <div className="absolute top-0 right-0 bottom-0 left-0 grid grid-rows-[auto_1fr] gap-y-2">
        <p className="row-start-1 mx-auto pt-2 text-2xl font-bold">
          Tenses Blueprint
        </p>
        <Card className="absolute top-0 right-0 bottom-0 left-0 row-start-2 m-4 bg-white">
          <div className="grid h-full grid-cols-[auto_1fr_1fr_1fr] grid-rows-[1fr_2px_1fr_2px_1fr_2px_1fr] bg-white">
            <p className="col-start-1 row-start-1 mx-auto content-center">
              Simple
            </p>
            <NormalVerbTriangle
              uuid={svgUseIds[0]}
              className="col-start-4 row-start-1"
              verb={selectedVerb}
              visibility={{ head: true }}
              colour="black"
            />

            <div className="col-span-4 col-start-1 row-start-2 bg-gray-200"></div>

            <p className="col-start-1 row-start-3 mx-auto content-center">
              Continuous
            </p>
            <NormalVerbTriangle
              uuid={svgUseIds[1]}
              className="col-start-3 row-start-3"
              verb={VERBS.be}
              visibility={{ head: true }}
              colour="blue"
            />
            <NormalVerbTriangle
              uuid={svgUseIds[2]}
              className="col-start-4 row-start-3"
              verb={selectedVerb}
              visibility={{ presentParticiple: true }}
              colour="black"
            />

            <div className="col-span-4 col-start-1 row-start-4 bg-gray-200"></div>

            <p className="col-start-1 row-start-5 mx-auto content-center">
              Perfect Simple
            </p>
            <NormalVerbTriangle
              uuid={svgUseIds[3]}
              className="col-start-2 row-start-5"
              verb={VERBS.have}
              visibility={{ head: true }}
              colour="green"
            />
            <NormalVerbTriangle
              uuid={svgUseIds[4]}
              className="col-start-4 row-start-5"
              verb={selectedVerb}
              visibility={{ pastParticiple: true }}
              colour="black"
            />

            <div className="col-span-4 col-start-1 row-start-6 bg-gray-200"></div>

            <p className="mx-autov col-start-1 row-start-7 content-center">
              Perfect Continuous
            </p>
            <NormalVerbTriangle
              uuid={svgUseIds[5]}
              className="col-start-2 row-start-7"
              verb={VERBS.have}
              visibility={{ head: true }}
              colour="green"
            />
            <NormalVerbTriangle
              uuid={svgUseIds[6]}
              className="col-start-3 row-start-7"
              verb={VERBS.be}
              visibility={{ pastParticiple: true }}
              colour="blue"
            />
            <NormalVerbTriangle
              uuid={svgUseIds[7]}
              className="col-start-4 row-start-7"
              verb={selectedVerb}
              visibility={{ presentParticiple: true }}
              colour="black"
            />
          </div>
        </Card>
      </div>
    </GrammarContainer>
  );
}

export default TensesBlueprint;
