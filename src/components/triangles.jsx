"use client";

import { useState } from "react";

import GrammarContainer, {
  SVG_USE_ID_PLACEHOLDERS,
} from "@/components/grammar-container";
import Card from "@/components/ui/card";
import { DEFAULT_CLASS_NAMES } from "@/components/triangles/basic/verbs/normal-verb-triangle";
import BossVerbTriangle from "@/components/triangles/boss-verb-triangle";
import ToBeBossVerbTriangle from "@/components/triangles/to-be-boss-verb-triangle";
import NormalPronounTriangle from "@/components/triangles/basic/pronouns/normal-pronoun-triangle";
import ToBePronounTriangle from "@/components/triangles/basic/pronouns/to-be-pronoun-triangle";

import { VERBS } from "@/lib/grammar-data";

function Triangles() {
  const [selectedVerb, setSelectedVerb] = useState(
    VERBS[Object.keys(VERBS)[0]],
  );
  let svgUseIds = SVG_USE_ID_PLACEHOLDERS;
  const handleContainerLoaded = (mySvgUseIds) => {
    svgUseIds = mySvgUseIds;
  };
  // show pronouns options
  const [showPronouns, setShowPronouns] = useState(false);

  const handleVerbSelected = (key) => {
    setSelectedVerb(VERBS[key]);
  };
  const handlePronounSelected = (key) => {
    setShowPronouns(key === "true");
  };

  if (svgUseIds === null) {
    return <p>Loading...</p>; // Render a placeholder while waiting
  }

  return (
    <GrammarContainer
      showPronouns={true}
      onVerbSelected={handleVerbSelected}
      onPronounsSelected={handlePronounSelected}
      onLoaded={handleContainerLoaded}
    >
      <div className="grid grid-cols-2 grid-rows-[auto_1fr] gap-y-2">
        <p className="col-span-2 col-start-1 row-start-1 mx-auto pt-2 text-2xl font-bold">
          Triangles
        </p>
        <Card className="col-start-1 row-start-2 bg-white">
          <div className="grid grid-cols-1 grid-rows-[auto_1fr] items-center gap-4">
            <p className="col-start-1 row-start-1 text-center text-2xl font-bold">
              All Verbs Except 'To Be'
            </p>
            <BossVerbTriangle
              uuid={svgUseIds[0]}
              verb={selectedVerb}
              classNames={{
                ...DEFAULT_CLASS_NAMES,
                svg: "row-start-2 col-start-1",
                head: "visible",
                preterite: "visible",
                pastParticiple: "visible",
                presentParticiple: "visible",
                thirdPersonSingular: "visible",
                numbers: "visible",
              }}
            />
            {showPronouns && (
              <NormalPronounTriangle
                uuid={svgUseIds[1]}
                verb={selectedVerb}
                classNames={{
                  ...DEFAULT_CLASS_NAMES,
                  svg: "row-start-2 col-start-1",
                  headPronouns: "visible",
                  preteritePronouns: "visible",
                  thirdPersonSingularPronouns: "visible",
                }}
              />
            )}
          </div>
        </Card>
        <Card className="col-start-2 row-start-2 bg-white">
          <div className="grid grid-cols-1 grid-rows-[auto_1fr] gap-4">
            <p className="col-start-1 row-start-1 text-center text-2xl font-bold">
              The Verb 'To Be'
            </p>
            <ToBeBossVerbTriangle
              uuid={svgUseIds[2]}
              classNames={{
                ...DEFAULT_CLASS_NAMES,
                svg: "row-start-2 col-start-1",
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
            {showPronouns && (
              <ToBePronounTriangle
                uuid={svgUseIds[3]}
                verb={selectedVerb}
                classNames={{
                  ...DEFAULT_CLASS_NAMES,
                  svg: "row-start-2 col-start-1",
                  amPronouns: "visible",
                  arePronouns: "visible",
                  isPronouns: "visible",
                  wasPronouns: "visible",
                  werePronouns: "visible",
                }}
              />
            )}
          </div>
        </Card>
      </div>
    </GrammarContainer>
  );
}

export default Triangles;
