"use client";
import { useState } from "react";

import GrammarContainer from "@/components/grammar-container";
import NormalVerbTriangle from "@/components/basic-triangles/verbs/normal-verb-triangle";
import NormalPronounTriangle from "@/components/basic-triangles/pronouns/normal-pronoun-triangle";
import ToBeVerbTriangle from "@/components/basic-triangles/verbs/to-be-verb-triangle";
import ToBePronounTriangle from "@/components/basic-triangles/pronouns/to-be-pronoun-triangle";
import Card from "@/components/ui/card";

import { SENTENCE_TYPES, VERBS } from "@/lib/grammar-data";

function InflectedTenses() {
  const [selectedSentenceType, setSentenceType] = useState(
    SENTENCE_TYPES.statement,
  );

  const [selectedVerb, setSelectedVerb] = useState(
    VERBS[Object.keys(VERBS)[0]],
  );
  const [bossVerbVisibility, setBossVerbVisibility] = useState({
    head: "opacity-100",
    thirdPersonSingular: true,
    preterite: true,
    tenseLine: true,
  });

  let svgUseIds = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
  ];
  const handleContainerLoaded = (mySvgUseIds) => {
    svgUseIds = mySvgUseIds;
  };

  const handleVerbSelected = (key) => {
    setSelectedVerb(VERBS[key]);
  };
  const handleSentenceTypeSelected = (key) => {
    setSentenceType(key);
    // todo fix this
    const myNegative = key === SENTENCE_TYPES.negative;
    const myVisibleForNot = myNegative
      ? "opacity-100 transition-opacity duration-2000 ease-in-out"
      : "opacity-0 transition-opacity duration-2000 ease-in-out";
    setBossVerbVisibility({
      head: { myVisibleForNot },
      thirdPersonSingular: true,
      preterite: true,
      tenseLine: true,
    });
  };

  const statement = selectedSentenceType === SENTENCE_TYPES.statement;
  const question = selectedSentenceType === SENTENCE_TYPES.question;

  const negative = selectedSentenceType === SENTENCE_TYPES.negative;
  const visibleForNot = negative
    ? "opacity-100 transition-opacity duration-2000 ease-in-out"
    : "opacity-0 transition-opacity duration-2000 ease-in-out";
  const hiddenForNot = negative
    ? "opacity-0 transition-opacity duration-2000 ease-in-out"
    : "opacity-100 transition-opacity duration-2000 ease-in-out";

  return (
    <GrammarContainer
      sentenceTypes={[
        SENTENCE_TYPES.statement,
        SENTENCE_TYPES.question,
        SENTENCE_TYPES.negative,
      ]}
      onVerbSelected={handleVerbSelected}
      onSentenceTypeSelected={handleSentenceTypeSelected}
      onLoaded={handleContainerLoaded}
    >
      <div className="absolute top-0 right-0 bottom-0 left-0 grid grid-rows-[auto_1fr] gap-y-2">
        <p className="row-start-1 mx-auto pt-2 text-2xl font-bold">
          Inflected Tenses
        </p>
        <Card className="absolute top-0 right-0 bottom-0 left-0 row-start-2 m-4 bg-white">
          <div className="grid h-full grid-cols-[auto_10fr_1fr_10fr_1fr_10fr] grid-rows-[1fr_2px_1fr_2px_1fr_2px_1fr] gap-y-1">
            <div className="col-start-1 row-start-1 mx-auto grid grid-rows-[1fr_2px_1fr] items-center justify-center">
              <p className="row-start-1">Present Simple</p>
              <div className="row-start-2 h-full bg-red-500"></div>
              <p className="row-start-3">Past Simple</p>
            </div>
            <NormalVerbTriangle
              uuid={svgUseIds[0]}
              className={`${visibleForNot} col-start-4 row-start-1`}
              verb={VERBS.do}
              visibility={{
                head: true,
                thirdPersonSingular: true,
                preterite: true,
                tenseLine: true,
              }}
              colour="red"
            />
            <NormalPronounTriangle
              uuid={svgUseIds[1]}
              className={`${visibleForNot} col-start-4 row-start-1`}
              verb={VERBS.do}
              visibility={{
                headPronouns: true,
                thirdPersonSingularPronouns: true,
                preteritePronouns: true,
              }}
              colour="red"
            />
            <p
              className={`${visibleForNot} col-start-5 row-start-1 m-auto text-2xl font-bold text-red-500`}
            >
              not
            </p>
            <NormalVerbTriangle
              uuid={svgUseIds[2]}
              className="col-start-6 row-start-1"
              verb={selectedVerb}
              visibility={bossVerbVisibility}
              colour="black"
            />
            <NormalPronounTriangle
              uuid={svgUseIds[3]}
              className={`${hiddenForNot} col-start-6 row-start-1`}
              verb={selectedVerb}
              visibility={{
                headPronouns: true,
                thirdPersonSingularPronouns: true,
                preteritePronouns: true,
              }}
              colour="black"
            />
            <div className="col-span-6 col-start-1 row-start-2 bg-gray-200"></div>
            <div className="col-start-1 row-start-3 mx-auto grid grid-rows-[1fr_2px_1fr] items-center justify-center">
              <p className="row-start-1">Present Continuous</p>
              <div className="row-start-2 h-full bg-red-500"></div>
              <p className="row-start-3">Past Continuous</p>
            </div>
            <ToBeVerbTriangle
              uuid={svgUseIds[4]}
              className="col-start-4 row-start-3"
              visibility={{
                am: true,
                are: true,
                is: true,
                was: true,
                were: true,
                tenseLine: true,
              }}
              colour="blue"
            />
            <ToBePronounTriangle
              uuid={svgUseIds[5]}
              className="col-start-4 row-start-3"
              visibility={{
                amPronouns: true,
                arePronouns: true,
                isPronouns: true,
                wasPronouns: true,
                werePronouns: true,
              }}
              colour="black"
            />
            <p
              className={`${visibleForNot} col-start-5 row-start-3 m-auto text-2xl font-bold text-red-500`}
            >
              not
            </p>
            <NormalVerbTriangle
              uuid={svgUseIds[6]}
              className="col-start-6 row-start-3"
              verb={selectedVerb}
              visibility={{ presentParticiple: true }}
              colour="black"
            />
            <div className="col-span-6 col-start-1 row-start-4 bg-gray-200"></div>
            <div className="col-start-1 row-start-5 mx-auto grid grid-rows-[1fr_2px_1fr] items-center justify-center">
              <p className="row-start-1">Present Perfect Simple</p>
              <div className="row-start-2 h-full bg-red-500"></div>
              <p className="row-start-3">Past Perfect Simple</p>
            </div>
            <NormalVerbTriangle
              uuid={svgUseIds[7]}
              className="col-start-2 row-start-5"
              verb={VERBS.have}
              visibility={{
                head: true,
                preterite: true,
                thirdPersonSingular: true,
                tenseLine: true,
              }}
              colour="green"
            />
            <NormalPronounTriangle
              uuid={svgUseIds[8]}
              className="col-start-2 row-start-5"
              verb={selectedVerb}
              visibility={{
                headPronouns: true,
                thirdPersonSingularPronouns: true,
                preteritePronouns: true,
              }}
              colour="green"
            />
            <p
              className={`${visibleForNot} col-start-3 row-start-5 m-auto text-2xl font-bold text-red-500`}
            >
              not
            </p>
            <NormalVerbTriangle
              uuid={svgUseIds[9]}
              className="col-start-6 row-start-5"
              verb={selectedVerb}
              visibility={{ pastParticiple: true }}
              colour="black"
            />
            <div className="col-span-6 col-start-1 row-start-6 bg-gray-200"></div>
            <div className="col-start-1 row-start-7 mx-auto grid grid-rows-[1fr_2px_1fr] items-center justify-center">
              <p className="row-start-1">Present Perfect Continuous</p>
              <div className="row-start-2 h-full bg-red-500"></div>
              <p className="row-start-3">Past Perfect Continuous</p>
            </div>
            <NormalVerbTriangle
              uuid={svgUseIds[10]}
              className="col-start-2 row-start-7"
              verb={VERBS.have}
              visibility={{
                head: true,
                preterite: true,
                thirdPersonSingular: true,
                tenseLine: true,
              }}
              colour="green"
            />
            <NormalPronounTriangle
              uuid={svgUseIds[11]}
              className="col-start-2 row-start-7"
              verb={selectedVerb}
              visibility={{
                headPronouns: true,
                thirdPersonSingularPronouns: true,
                preteritePronouns: true,
              }}
              colour="green"
            />
            <p
              className={`${visibleForNot} col-start-3 row-start-7 m-auto text-2xl font-bold text-red-500`}
            >
              not
            </p>
            <NormalVerbTriangle
              uuid={svgUseIds[12]}
              className="col-start-4 row-start-7"
              verb={VERBS.be}
              visibility={{ pastParticiple: true }}
              colour="blue"
            />
            <NormalVerbTriangle
              uuid={svgUseIds[13]}
              className="col-start-6 row-start-7"
              verb={selectedVerb}
              visibility={{ presentParticiple: true }}
              colour="black"
            />
          </div>
        </Card>
      </div>
    </GrammarContainer>
  );
}

export default InflectedTenses;
