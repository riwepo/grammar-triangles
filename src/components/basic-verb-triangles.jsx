"use client";

import { useState } from "react";

import GrammarContainer from "@/components/grammar-container";
import NormalVerbTriangle from "@/components/basic-triangles/verbs/normal-verb-triangle";
import ToBeVerbTriangle from "@/components/basic-triangles/verbs/to-be-verb-triangle";
import Card from "@/components/ui/card";

import { VERBS } from "@/lib/utils/words";

function BasicVerbTriangles() {
  // the selected verb
  const [selectedVerb, setSelectedVerb] = useState(
    VERBS[Object.keys(VERBS)[0]],
  );
  let svgUseIds = ["0", "1"];
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
      svgUseIdSeed="01"
      onVerbSelected={handleVerbSelected}
      onLoaded={handleContainerLoaded}
    >
      <div className="grid grid-cols-2">
        <Card className="col-start-1 bg-white">
          <NormalVerbTriangle
            uuid={svgUseIds[0]}
            colour="black"
            verb={selectedVerb}
            visibility={{
              head: true,
              preterite: true,
              pastParticiple: true,
              presentParticiple: true,
              thirdPersonSingular: true,
              numbers: true,
            }}
          />
        </Card>
        <Card className="col-start-2 bg-white">
          <ToBeVerbTriangle
            uuid={svgUseIds[1]}
            colour="black"
            visibility={{
              head: true,
              pastParticiple: true,
              presentParticiple: true,
              am: true,
              is: true,
              are: true,
              was: true,
              were: true,
              numbers: true,
            }}
          />
        </Card>
      </div>
    </GrammarContainer>
  );
}

export default BasicVerbTriangles;
