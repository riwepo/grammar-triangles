"use client";

import { useState } from "react";

import GrammarContainer, {
  SVG_USE_ID_PLACEHOLDERS,
} from "@/components/grammar-container";
import Card from "@/components/ui/card";
import { DEFAULT_CLASS_NAMES } from "./basic-triangles/verbs/normal-verb-triangle";
import BossVerbTriangle from "@/components/triangles/boss-verb-triangle";
import ToBeBossVerbTriangle from "@/components/triangles/to-be-boss-verb-triangle";

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
            <BossVerbTriangle
              uuid={svgUseIds[0]}
              verb={selectedVerb}
              classNames={{
                ...DEFAULT_CLASS_NAMES,
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
            <ToBeBossVerbTriangle
              uuid={svgUseIds[1]}
              classNames={{
                ...DEFAULT_CLASS_NAMES,
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
