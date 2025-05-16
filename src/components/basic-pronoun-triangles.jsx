"use client";

import { useState } from "react";

import GrammarContainer from "@/components/grammar-container";
import NormalPronounTriangle from "@/components/basic-triangles/pronouns/normal-pronoun-triangle";
import ToBePronounTriangle from "@/components/basic-triangles/pronouns/to-be-pronoun-triangle";
import Card from "@/components/ui/card";

import { VERBS } from "@/lib/grammar-data";
import { SVG_USE_ID_COUNT } from "@/lib/constants";

function BasicPronounTriangles() {
  // the selected verb
  const [selectedVerb, setSelectedVerb] = useState(
    VERBS[Object.keys(VERBS)[0]],
  );
  let svgUseIds = [...Array(SVG_USE_ID_COUNT)];
  const handleContainerLoaded = (mySvgUseIds) => {
    svgUseIds = mySvgUseIds;
  };

  const handleVerbSelected = (key) => {
    setSelectedVerb(VERBS[key]);
  };

  return (
    <GrammarContainer
      onVerbSelected={handleVerbSelected}
      onLoaded={handleContainerLoaded}
    >
      <div className="grid grid-cols-2 grid-rows-[auto_1fr] gap-y-2">
        <p className="col-span-2 col-start-1 row-start-1 mx-auto pt-2 text-2xl font-bold">
          Basic Pronoun Triangles
        </p>
        <Card className="col-start-1 row-start-2 bg-white">
          <div className="flex flex-col items-center gap-4">
            <p className="text-2xl font-bold">All Verbs Except 'To Be'</p>
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
          </div>
        </Card>
        <Card className="col-start-2 row-start-2 bg-white">
          <div className="flex flex-col items-center gap-4">
            <p className="text-2xl font-bold">The Verb 'To Be'</p>
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
          </div>
        </Card>
      </div>
    </GrammarContainer>
  );
}

export default BasicPronounTriangles;
