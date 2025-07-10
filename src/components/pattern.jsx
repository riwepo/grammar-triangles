"use client";
import { useState } from "react";

import GrammarContainer, {
  SVG_USE_ID_PLACEHOLDERS,
} from "@/components/grammar-container";
import BossVerbTriangle from "@/components/triangles/boss-verb-triangle";
import HelperVerbHaveTriangle from "@/components/triangles/helper-verb-have-triangle";
import HelperVerbBeTriangle from "@/components/triangles/helper-verb-be-triangle";

import Card from "@/components/ui/card";

import { VERBS } from "@/lib/grammar-data";
import PatternExplanations from "@/components/pattern-explanations";

function Pattern() {
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

  const printableDiagramContent = (
    <Card className="absolute top-0 right-0 bottom-0 left-0 row-start-2 m-4 bg-white">
      <div className="grid h-full grid-cols-[auto_1fr_1fr_1fr] grid-rows-[1fr_2px_1fr_2px_1fr_2px_1fr] bg-white">
        <p className="col-start-1 row-start-1 mx-auto content-center">Simple</p>
        <BossVerbTriangle
          uuid={svgUseIds[0]}
          verb={selectedVerb}
          classNames={{
            svg: "col-start-4 row-start-1",
            head: "visible",
          }}
        />

        <div className="col-span-4 col-start-1 row-start-2 bg-gray-200"></div>

        <p className="col-start-1 row-start-3 mx-auto content-center">
          Continuous
        </p>
        <HelperVerbBeTriangle
          uuid={svgUseIds[1]}
          classNames={{
            svg: "col-start-3 row-start-3",
            head: "visible",
          }}
        />
        <BossVerbTriangle
          uuid={svgUseIds[2]}
          verb={selectedVerb}
          classNames={{
            svg: "col-start-4 row-start-3",
            presentParticiple: "visible",
          }}
        />

        <div className="col-span-4 col-start-1 row-start-4 bg-gray-200"></div>

        <p className="col-start-1 row-start-5 mx-auto content-center">
          Perfect Simple
        </p>
        <HelperVerbHaveTriangle
          uuid={svgUseIds[3]}
          classNames={{
            svg: "col-start-2 row-start-5",
            head: "visible",
          }}
        />
        <BossVerbTriangle
          uuid={svgUseIds[4]}
          verb={selectedVerb}
          classNames={{
            svg: "col-start-4 row-start-5",
            pastParticiple: "visible",
          }}
        />

        <div className="col-span-4 col-start-1 row-start-6 bg-gray-200"></div>

        <p className="mx-autov col-start-1 row-start-7 content-center">
          Perfect Continuous
        </p>
        <HelperVerbHaveTriangle
          uuid={svgUseIds[5]}
          classNames={{
            svg: "col-start-2 row-start-7",
            head: "VISIBLE",
          }}
        />
        <HelperVerbBeTriangle
          uuid={svgUseIds[6]}
          classNames={{
            svg: "col-start-3 row-start-7",
            pastParticiple: "visible",
          }}
        />
        <BossVerbTriangle
          uuid={svgUseIds[7]}
          verb={selectedVerb}
          classNames={{
            svg: "col-start-4 row-start-7",
            presentParticiple: "VISIBLE",
          }}
        />
      </div>
    </Card>
  );

  const explanationsContent = <PatternExplanations />;

  return (
    <GrammarContainer
      printableDiagramHeading="Pattern"
      printableDiagramContent={printableDiagramContent}
      explanationsContent={explanationsContent}
      onVerbSelected={handleVerbSelected}
      onLoaded={handleContainerLoaded}
    />
  );
}

export default Pattern;
