"use client";

import { useState } from "react";

import GrammarContainer2, {
  SVG_USE_ID_PLACEHOLDERS,
} from "@/components/grammar-container2";
import CardTabs from "@/components/ui/card-tabs";
import BossVerbTriangle from "@/components/triangles/boss-verb-triangle";
import ToBeBossVerbTriangle from "@/components/triangles/to-be-boss-verb-triangle";
import NormalPronounTriangle from "@/components/triangles/basic/pronouns/normal-pronoun-triangle";
import ToBePronounTriangle from "@/components/triangles/basic/pronouns/to-be-pronoun-triangle";

import { VERBS } from "@/lib/grammar-data";
import TrianglesExplanations from "@/components/triangles-explanations";

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
    <GrammarContainer2
      printableDiagramHeading="Triangles"
      showPronounsCombo={true}
      onVerbSelected={handleVerbSelected}
      onShowPronounsSelected={handleShowPronounSelected}
      onLoaded={handleContainerLoaded}
    >
      <CardTabs
        tabs={["All verbs except 'To Be'", "The verb 'To Be'"]}
        //className="col-start-1 row-start-3 mx-auto mt-4 mb-4 min-h-full w-1/2 bg-white"
        className="mx-auto my-auto mt-20 max-w-[50rem] bg-white"
      >
        {verbTypes}
      </CardTabs>
    </GrammarContainer2>
  );
}

export default Triangles;
