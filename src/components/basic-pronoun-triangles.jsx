"use client";

import { useState } from "react";

import GrammarContainer, {
  SVG_USE_ID_PLACEHOLDERS,
} from "@/components/grammar-container";
import NormalPronounTriangle, {
  DEFAULT_CLASS_NAMES,
} from "@/components/basic-triangles/pronouns/normal-pronoun-triangle";
import ToBePronounTriangle from "@/components/basic-triangles/pronouns/to-be-pronoun-triangle";
import Card from "@/components/ui/card";

import { VERBS } from "@/lib/grammar-data";

function BasicPronounTriangles() {
  // the selected verb
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
              classNames={{
                ...DEFAULT_CLASS_NAMES,
                triangle: "visible stroke-black fill-none",
                head: "visible",
                headPronouns: "visible",
                preterite: "visible",
                preteritePronouns: "visible",
                thirdPersonSingular: "visible",
                thirdPersonSingularPronouns: "visible",
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
              classNames={{
                ...DEFAULT_CLASS_NAMES,
                triangle: "visible stroke-black fill-none",
                am: "visible",
                amPronouns: "visible",
                are: "visible",
                arePronouns: "visible",
                is: "visible",
                isPronouns: "visible",
                was: "visible",
                wasPronouns: "visible",
                were: "visible",
                werePronouns: "visible",
              }}
            />
          </div>
        </Card>
      </div>
    </GrammarContainer>
  );
}

export default BasicPronounTriangles;
