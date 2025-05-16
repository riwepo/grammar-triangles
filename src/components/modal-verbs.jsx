"use client";

import { useState } from "react";

import GrammarContainer from "@/components/grammar-container";
import NormalVerbTriangle from "@/components/basic-triangles/verbs/normal-verb-triangle";
import Card from "@/components/ui/card";

import {
  VERBS,
  MODAL_VERBS,
  SUBJECT_PRONOUNS,
  SENTENCE_TYPES,
} from "@/lib/grammar-data";

function ModalVerbs() {
  const [selectedSentenceType, setSentenceType] = useState(
    SENTENCE_TYPES.statement,
  );

  const [selectedVerb, setSelectedVerb] = useState(
    VERBS[Object.keys(VERBS)[0]],
  );
  let svgUseIds = ["0", "1", "2", "3", "4", "5", "6", "7"];
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

  return (
    <GrammarContainer
      sentenceTypes={[SENTENCE_TYPES.statement, SENTENCE_TYPES.question]}
      onVerbSelected={handleVerbSelected}
      onSentenceTypeSelected={handleSentenceTypeSelected}
      onLoaded={handleContainerLoaded}
    >
      <div className="absolute top-0 right-0 bottom-0 left-0 grid grid-rows-[auto_1fr] gap-y-2">
        <p className="row-start-1 mx-auto pt-2 text-2xl font-bold">
          Modal Verbs
        </p>
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
              <NormalVerbTriangle
                uuid={svgUseIds[0]}
                className="col-start-3 row-start-1"
                verb={selectedVerb}
                visibility={{ head: true }}
                colour="black"
              />

              <div className="col-span-3 col-start-1 row-start-2 bg-gray-200"></div>

              <NormalVerbTriangle
                uuid={svgUseIds[1]}
                className="col-start-2 row-start-3"
                verb={VERBS.be}
                visibility={{ head: true }}
                colour="blue"
              />
              <NormalVerbTriangle
                uuid={svgUseIds[2]}
                className="col-start-3 row-start-3"
                verb={selectedVerb}
                visibility={{ presentParticiple: true }}
                colour="black"
              />

              <div className="col-span-3 col-start-1 row-start-4 bg-gray-200"></div>

              <NormalVerbTriangle
                uuid={svgUseIds[3]}
                className="col-start-1 row-start-5"
                verb={VERBS.have}
                visibility={{ head: true }}
                colour="green"
              />
              <NormalVerbTriangle
                uuid={svgUseIds[4]}
                className="col-start-3 row-start-5"
                verb={selectedVerb}
                visibility={{ pastParticiple: true }}
                colour="black"
              />

              <div className="col-span-3 col-start-1 row-start-6 bg-gray-200"></div>

              <NormalVerbTriangle
                uuid={svgUseIds[5]}
                className="col-start-1 row-start-7"
                verb={VERBS.have}
                visibility={{ head: true }}
                colour="green"
              />
              <NormalVerbTriangle
                uuid={svgUseIds[6]}
                className="col-start-2 row-start-7"
                verb={VERBS.be}
                visibility={{ pastParticiple: true }}
                colour="blue"
              />
              <NormalVerbTriangle
                uuid={svgUseIds[7]}
                className="col-start-3 row-start-7"
                verb={selectedVerb}
                visibility={{ presentParticiple: true }}
                colour="black"
              />
            </div>
          </div>
        </Card>
      </div>
    </GrammarContainer>
  );
}

export default ModalVerbs;
