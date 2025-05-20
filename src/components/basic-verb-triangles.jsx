"use client";

import { useState } from "react";

import GrammarContainer, {
  SVG_USE_ID_PLACEHOLDERS,
} from "@/components/grammar-container";
import NormalVerbTriangle, {
  DEFAULT_CLASS_NAMES,
} from "@/components/basic-triangles/verbs/normal-verb-triangle";
import ToBeVerbTriangle from "@/components/basic-triangles/verbs/to-be-verb-triangle";
import Card from "@/components/ui/card";

import { VERBS } from "@/lib/grammar-data";

function BasicVerbTriangles() {
  const [selectedVerb, setSelectedVerb] = useState(
    VERBS[Object.keys(VERBS)[0]],
  );
  let svgUseIds = SVG_USE_ID_PLACEHOLDERS;
  const handleContainerLoaded = (mySvgUseIds) => {
    svgUseIds = mySvgUseIds;
  };

  const handleVerbSelected = (key) => {
    setSelectedVerb(VERBS[key]);
  };

  if (svgUseIds === null) {
    return <p>Loading...</p>; // Render a placeholder while waiting
  }

  return (
    <GrammarContainer
      onVerbSelected={handleVerbSelected}
      onLoaded={handleContainerLoaded}
    >
      <div className="grid grid-cols-2 grid-rows-[auto_1fr] gap-y-2">
        <p className="col-span-2 col-start-1 row-start-1 mx-auto pt-2 text-2xl font-bold">
          Basic Verb Triangles
        </p>
        <Card className="col-start-1 row-start-2 bg-white">
          <div className="flex flex-col items-center gap-4">
            <p className="text-2xl font-bold">All Verbs Except 'To Be'</p>
            <NormalVerbTriangle
              uuid={svgUseIds[0]}
              colour="black"
              verb={selectedVerb}
              /*  visibility={{
                triangle: true,
                head: true,
                preterite: true,
                pastParticiple: true,
                presentParticiple: true,
                thirdPersonSingular: true,
                numbers: true,
              }} */
              classNames={{
                ...DEFAULT_CLASS_NAMES,
                triangle: "visible stroke-black fill-none",
                head: "visible",
                preterite: "visible",
                pastParticiple: "visible",
                presentParticiple: "visible",
                thirdPersonSingular: "visible",
                numbers: "visible",
              }}
            />
          </div>
        </Card>
        <Card className="col-start-2 row-start-2 bg-white">
          <div className="flex flex-col items-center gap-4">
            <p className="text-2xl font-bold">The Verb 'To Be'</p>
            <ToBeVerbTriangle
              uuid={svgUseIds[1]}
              /* visibility={{
                head: true,
                pastParticiple: true,
                presentParticiple: true,
                am: true,
                is: true,
                are: true,
                was: true,
                were: true,
                numbers: true,
              }} */
              classNames={{
                ...DEFAULT_CLASS_NAMES,
                triangle: "visible stroke-black fill-none",
                head: "visible",
                pastParticiple: "visible",
                presentParticiple: "visible",
                am: "visible",
                is: "visible",
                are: "visible",
                was: "visible",
                were: "visible",
                numbers: "visible",
              }}
            />
          </div>
        </Card>
      </div>
    </GrammarContainer>
  );
}

export default BasicVerbTriangles;
