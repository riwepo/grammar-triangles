"use client";

import { useState } from "react";

import GrammarContainer from "@/components/grammar-container";
import NormalPronounTriangle from "@/components/basic-triangles/pronouns/normal-pronoun-triangle";
import ToBePronounTriangle from "@/components/basic-triangles/pronouns/to-be-pronoun-triangle";
import Card from "@/components/ui/card";

import { VERBS } from "@/lib/utils/words";

function BasicPronounTriangles() {
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

  return (
    <GrammarContainer
      svgUseIdSeed="01"
      onVerbSelected={handleVerbSelected}
      onLoaded={handleContainerLoaded}
    >
      <Card className="col-start-1 bg-white">
        <NormalPronounTriangle
          uuid={svgUseIds[0]}
          colour="black"
          verb={selectedVerb}
          visibility={{
            triangle: true,
            head: true,
            headPronouns: true,
            preterite: true,
            preteritePronouns: true,
            thirdPersonSingular: true,
            thirdPersonSingularPronouns: true,
          }}
        />
      </Card>
      <Card className="col-start-2 bg-white">
        <ToBePronounTriangle
          uuid={svgUseIds[1]}
          colour="black"
          visibility={{
            triangle: true,
            am: true,
            amPronouns: true,
            are: true,
            arePronouns: true,
            is: true,
            isPronouns: true,
            was: true,
            wasPronouns: true,
            were: true,
            werePronouns: true,
          }}
        />
      </Card>
    </GrammarContainer>
  );
}

export default BasicPronounTriangles;
