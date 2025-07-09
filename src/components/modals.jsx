"use client";

import { useState } from "react";

import GrammarContainer2, {
  SVG_USE_ID_PLACEHOLDERS,
} from "@/components/grammar-container2";
import BossVerbTriangle from "@/components/triangles/boss-verb-triangle";
import HelperVerbHaveTriangle from "@/components/triangles/helper-verb-have-triangle";
import HelperVerbBeTriangle from "@/components/triangles/helper-verb-be-triangle";
import Card from "@/components/ui/card";
import ModalExplanations from "@/components/modal-explanations";

import {
  VERBS,
  MODAL_VERBS,
  SUBJECT_PRONOUNS,
  SENTENCE_TYPES,
} from "@/lib/grammar-data";

function Modals() {
  const [selectedSentenceType, setSentenceType] = useState(
    SENTENCE_TYPES.statement,
  );

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

  const handleSentenceTypeSelected = (key) => {
    setSentenceType(key);
  };

  const statement = selectedSentenceType === SENTENCE_TYPES.statement;
  const question = selectedSentenceType === SENTENCE_TYPES.question;

  const gridTemplateCols = statement
    ? "grid-cols-[0.1fr_2px_0.2fr_2px_0.7fr]"
    : "grid-cols-[0.2fr_2px_0.1fr_2px_0.7fr]";

  const printableDiagramContent = (
    <Card className="absolute top-0 right-0 bottom-0 left-0 row-start-2 m-4 bg-white">
      <div
        className={`grid h-full ${gridTemplateCols} transition-all duration-500`}
      >
        {statement && (
          <div
            className={`col-start-1 row-start-1 grid h-full auto-rows-auto place-items-center py-2 transition-all duration-500`}
          >
            {SUBJECT_PRONOUNS.map((sp) => (
              <p key={sp}>{sp}</p>
            ))}
          </div>
        )}

        {question && (
          <div
            className={`col-start-1 row-start-1 grid h-full auto-rows-auto place-items-center py-2`}
          >
            {MODAL_VERBS.map((mv) => (
              <p key={mv} className="text-yellow-500">
                {mv}
              </p>
            ))}
          </div>
        )}

        <div className="col-start-2 bg-gray-200"></div>

        {question && (
          <div
            className={`col-start-3 row-start-1 grid h-full auto-rows-auto place-items-center py-2`}
          >
            {SUBJECT_PRONOUNS.map((sp) => (
              <p key={sp}>{sp}</p>
            ))}
          </div>
        )}

        {statement && (
          <div
            className={`col-start-3 row-start-1 grid h-full auto-rows-auto place-items-center py-2`}
          >
            {MODAL_VERBS.map((mv) => (
              <p key={mv} className="text-yellow-500">
                {mv}
              </p>
            ))}
          </div>
        )}

        <div className="col-start-4 bg-gray-200"></div>

        <div className="col-start-5 row-start-1 grid h-full grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_2px_1fr_2px_1fr_2px_1fr] gap-y-1 overflow-auto">
          <BossVerbTriangle
            uuid={svgUseIds[0]}
            verb={selectedVerb}
            classNames={{
              svg: "col-start-3 row-start-1",
              head: "visible",
            }}
          />

          <div className="col-span-3 col-start-1 row-start-2 bg-gray-200"></div>

          <HelperVerbBeTriangle
            uuid={svgUseIds[1]}
            classNames={{
              svg: "col-start-2 row-start-3",
              head: "visible",
            }}
          />
          <BossVerbTriangle
            uuid={svgUseIds[2]}
            verb={selectedVerb}
            classNames={{
              svg: "col-start-3 row-start-3",
              presentParticiple: "visible",
            }}
          />

          <div className="col-span-3 col-start-1 row-start-4 bg-gray-200"></div>

          <HelperVerbHaveTriangle
            uuid={svgUseIds[3]}
            classNames={{
              svg: "col-start-1 row-start-5",
              head: "visible",
            }}
          />
          <BossVerbTriangle
            uuid={svgUseIds[4]}
            className=""
            verb={selectedVerb}
            classNames={{
              svg: "col-start-3 row-start-5",
              pastParticiple: "visible",
            }}
          />

          <div className="col-span-3 col-start-1 row-start-6 bg-gray-200"></div>

          <HelperVerbHaveTriangle
            uuid={svgUseIds[5]}
            classNames={{
              svg: "col-start-1 row-start-7",
              head: "visible",
            }}
          />
          <HelperVerbBeTriangle
            uuid={svgUseIds[6]}
            classNames={{
              svg: "col-start-2 row-start-7",
              pastParticiple: "visible",
            }}
          />
          <BossVerbTriangle
            uuid={svgUseIds[7]}
            verb={selectedVerb}
            classNames={{
              svg: "col-start-3 row-start-7",
              presentParticiple: "visible",
            }}
          />
        </div>
      </div>
    </Card>
  );

  const explanationsContent = <ModalExplanations />;

  return (
    <GrammarContainer2
      printableDiagramHeading="Modals"
      printableDiagramContent={printableDiagramContent}
      explanationsContent={explanationsContent}
      sentenceTypes={[SENTENCE_TYPES.statement, SENTENCE_TYPES.question]}
      onVerbSelected={handleVerbSelected}
      onSentenceTypeSelected={handleSentenceTypeSelected}
      onLoaded={handleContainerLoaded}
    />
  );
}

export default Modals;
