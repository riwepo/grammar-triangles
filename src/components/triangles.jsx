"use client";

import { useState } from "react";

import GrammarContainer, {
  SVG_USE_ID_PLACEHOLDERS,
} from "@/components/grammar-container";
import CardTabs from "@/components/ui/card-tabs";
import BossVerbTriangle from "@/components/triangles/boss-verb-triangle";
import ToBeBossVerbTriangle from "@/components/triangles/to-be-boss-verb-triangle";
import NormalPronounTriangle from "@/components/triangles/basic/pronouns/normal-pronoun-triangle";
import ToBePronounTriangle from "@/components/triangles/basic/pronouns/to-be-pronoun-triangle";

import { VERBS } from "@/lib/grammar-data";
import VerbFormExplanations from "@/components/verbFormExplanations";

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
  const handleShowPronounSelected = (key) => {
    setShowPronouns(key === "true");
  };

  if (svgUseIds === null) {
    return <p>Loading...</p>; // Render a placeholder while waiting
  }

  const verbTypes = [
    <div className="grid h-full w-full grid-cols-1 grid-rows-1 items-center">
      <BossVerbTriangle
        uuid={svgUseIds[0]}
        verb={selectedVerb}
        classNames={{
          svg: "row-start-1 col-start-1",
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
            svg: "row-start-1 col-start-1",
            headPronouns: "visible",
            preteritePronouns: "visible",
            thirdPersonSingularPronouns: "visible",
          }}
        />
      )}
    </div>,
    <div className="grid h-full w-full grid-cols-1 grid-rows-1 items-center">
      <ToBeBossVerbTriangle
        uuid={svgUseIds[2]}
        classNames={{
          svg: "row-start-1 col-start-1",
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
            svg: "row-start-1 col-start-1",
            amPronouns: "visible",
            arePronouns: "visible",
            isPronouns: "visible",
            wasPronouns: "visible",
            werePronouns: "visible",
          }}
        />
      )}
    </div>,
  ];

  return (
    <>
      <GrammarContainer
        showPronounsCombo={true}
        onVerbSelected={handleVerbSelected}
        onShowPronounsSelected={handleShowPronounSelected}
        onLoaded={handleContainerLoaded}
      >
        <div className="grid grid-cols-1 grid-rows-[auto_auto_1fr] gap-y-2">
          <p className="col-start-1 row-start-1 mx-auto pt-2 text-2xl font-bold">
            Triangles
          </p>
          <CardTabs
            tabs={["All verbs except 'To Be'", "The verb 'To Be'"]}
            className="col-start-1 row-start-3 mx-auto mt-4 mb-4 min-h-full w-1/2 bg-white"
          >
            {verbTypes}
          </CardTabs>
        </div>
      </GrammarContainer>
      <VerbFormExplanations />
    </>
  );
}

export default Triangles;
