"use client";
import { useState } from "react";

import GrammarContainer, {
  SVG_USE_ID_PLACEHOLDERS,
} from "@/components/grammar-container";
import NormalVerbTriangle, {
  DEFAULT_CLASS_NAMES as DEFAULT_VERB_CLASS_NAMES,
} from "@/components/triangles/basic/verbs/normal-verb-triangle";
import NormalPronounTriangle, {
  DEFAULT_CLASS_NAMES as DEFAULT_PRONOUN_CLASS_NAMES,
} from "@/components/triangles/basic/pronouns/normal-pronoun-triangle";
import ToBeVerbTriangle, {
  DEFAULT_CLASS_NAMES as DEFAULT_TO_BE_VERB_CLASS_NAMES,
} from "@/components/triangles/basic/verbs/to-be-verb-triangle";
import ToBePronounTriangle, {
  DEFAULT_CLASS_NAMES as DEFAULT_TO_BE_PRONOUN_CLASS_NAMES,
} from "@/components/triangles/basic/pronouns/to-be-pronoun-triangle";
import BossVerbTriangle from "@/components/triangles/boss-verb-triangle";
import HelperVerbHaveTriangle from "@/components/triangles/helper-verb-have-triangle";
import HelperVerbBeTriangle from "@/components/triangles/helper-verb-be-triangle";
import HelperVerbDoTriangle from "@/components/triangles/helper-verb-do-triangle";
import Card from "@/components/ui/card";

import { SENTENCE_TYPES, VERBS } from "@/lib/grammar-data";

function Tenses() {
  const easeInVisible =
    "opacity-100 transition-opacity duration-2000 ease-in-out";
  const easeOutInvisible =
    "opacity-0 transition-opacity duration-2000 ease-in-out";

  const classNamesDict = {
    statement: {
      simple: {
        helperVerbDo: {
          ...DEFAULT_VERB_CLASS_NAMES,
          svg: `${easeOutInvisible} col-start-4 row-start-1`,
          head: "visible",
          thirdPersonSingular: "visible",
          preterite: "visible",
          tenseLine: "visible",
        },
        helperVerbDoPronouns: {
          ...DEFAULT_PRONOUN_CLASS_NAMES,
          svg: `${easeOutInvisible} col-start-4 row-start-1`,
          headPronouns: "visible",
          thirdPersonSingularPronouns: "visible",
          preteritePronouns: "visible",
        },
        not: `${easeOutInvisible} col-start-5 row-start-1 m-auto text-2xl font-bold text-red-500`,
        bossVerb: {
          ...DEFAULT_VERB_CLASS_NAMES,
          svg: "col-start-6 row-start-1",
          head: "visible",
          thirdPersonSingular: easeInVisible,
          preterite: easeInVisible,
          tenseLine: easeInVisible,
        },
        bossVerbPronouns: {
          ...DEFAULT_PRONOUN_CLASS_NAMES,
          svg: "col-start-6 row-start-1",
          headPronouns: easeInVisible,
          thirdPersonSingularPronouns: easeInVisible,
          preteritePronouns: easeInVisible,
        },
      },
      continuous: { helperVerbBe: 1, bossVerb: 2, bossVerbPronouns: 3 },
      perfect: { helperVerbHave: 1, bossVerb: 2, bossVerbPronouns: 3 },
      perfectContinuous: {
        helperVerbHave: 1,
        helperVerbBe: 2,
        bossVerb: 3,
        bossVerbPronouns: 4,
      },
    },
    negative: {
      simple: {
        helperVerbDo: {
          ...DEFAULT_VERB_CLASS_NAMES,
          svg: `${easeInVisible} col-start-4 row-start-1`,
          head: "visible",
          thirdPersonSingular: "visible",
          preterite: "visible",
          tenseLine: "visible",
        },
        helperVerbDoPronouns: {
          ...DEFAULT_PRONOUN_CLASS_NAMES,
          svg: `${easeInVisible} col-start-4 row-start-1`,
          headPronouns: "visible",
          thirdPersonSingularPronouns: "visible",
          preteritePronouns: "visible",
        },
        not: `${easeInVisible} col-start-5 row-start-1 m-auto text-2xl font-bold text-red-500`,
        bossVerb: {
          ...DEFAULT_VERB_CLASS_NAMES,
          svg: "col-start-6 row-start-1",
          head: "visible",
          thirdPersonSingular: easeOutInvisible,
          preterite: easeOutInvisible,
          tenseLine: easeOutInvisible,
        },
        bossVerbPronouns: {
          ...DEFAULT_PRONOUN_CLASS_NAMES,
          svg: "col-start-6 row-start-1",
          headPronouns: easeOutInvisible,
          thirdPersonSingularPronouns: easeOutInvisible,
          preteritePronouns: easeOutInvisible,
        },
      },
      continuous: { helperVerbBe: 1, bossVerb: 2, bossVerbPronouns: 3 },
      perfect: { helperVerbHave: 1, bossVerb: 2, bossVerbPronouns: 3 },
      perfectContinuous: {
        helperVerbHave: 1,
        helperVerbBe: 2,
        bossVerb: 3,
        bossVerbPronouns: 4,
      },
    },
    question: {
      simple: { helperVerbDo: 1, bossVerb: 2, bossVerbPronouns: 3 },
      continuous: { helperVerbBe: 1, bossVerb: 2, bossVerbPronouns: 3 },
      perfect: { helperVerbHave: 1, bossVerb: 2, bossVerbPronouns: 3 },
      perfectContinuous: {
        helperVerbHave: 1,
        helperVerbBe: 2,
        bossVerb: 3,
        bossVerbPronouns: 4,
      },
    },
  };

  const [selectedSentenceType, setSentenceType] = useState(
    SENTENCE_TYPES.statement,
  );

  const [selectedVerb, setSelectedVerb] = useState(
    VERBS[Object.keys(VERBS)[0]],
  );
  const [classNames, setClassNames] = useState(classNamesDict.statement);

  let svgUseIds = SVG_USE_ID_PLACEHOLDERS;
  const handleContainerLoaded = (mySvgUseIds) => {
    svgUseIds = mySvgUseIds;
  };

  const handleVerbSelected = (key) => {
    setSelectedVerb(VERBS[key]);
  };
  const handleSentenceTypeSelected = (key) => {
    setSentenceType(key);
    if (key === SENTENCE_TYPES.statement) {
      setClassNames(classNamesDict.statement);
    } else if (key === SENTENCE_TYPES.negative) {
      setClassNames(classNamesDict.negative);
    } else if (key === SENTENCE_TYPES.question) {
      setClassNames(classNamesDict.question);
    }
  };

  const negative = selectedSentenceType === SENTENCE_TYPES.negative;
  const visibleForNot = negative
    ? "opacity-100 transition-opacity duration-2000 ease-in-out"
    : "opacity-0 transition-opacity duration-2000 ease-in-out";

  return (
    <GrammarContainer
      sentenceTypes={[
        SENTENCE_TYPES.statement,
        SENTENCE_TYPES.negative,
        SENTENCE_TYPES.question,
      ]}
      onVerbSelected={handleVerbSelected}
      onSentenceTypeSelected={handleSentenceTypeSelected}
      onLoaded={handleContainerLoaded}
    >
      <div className="absolute top-0 right-0 bottom-0 left-0 grid grid-rows-[auto_1fr] gap-y-2">
        <p className="row-start-1 mx-auto pt-2 text-2xl font-bold">Tenses</p>
        <Card className="absolute top-0 right-0 bottom-0 left-0 row-start-2 m-4 bg-white">
          <div className="grid h-full grid-cols-[auto_10fr_1fr_10fr_1fr_10fr] grid-rows-[1fr_2px_1fr_2px_1fr_2px_1fr] gap-y-1">
            <div className="col-start-1 row-start-1 mx-auto grid grid-rows-[1fr_2px_1fr] items-center justify-center">
              <p className="row-start-1">Present Simple</p>
              <div className="row-start-2 h-full bg-red-500"></div>
              <p className="row-start-3">Past Simple</p>
            </div>
            <HelperVerbDoTriangle
              uuid={svgUseIds[0]}
              classNames={classNames.simple.helperVerbDo}
            />
            <NormalPronounTriangle
              uuid={svgUseIds[1]}
              verb={VERBS.do}
              classNames={classNames.simple.helperVerbDoPronouns}
            />
            <p className={classNames.simple.not}>not</p>
            <BossVerbTriangle
              uuid={svgUseIds[2]}
              verb={selectedVerb}
              classNames={classNames.simple.bossVerb}
            />
            <NormalPronounTriangle
              uuid={svgUseIds[3]}
              verb={selectedVerb}
              classNames={classNames.simple.bossVerbPronouns}
            />
            <div className="col-span-6 col-start-1 row-start-2 bg-gray-200"></div>
            <div className="col-start-1 row-start-3 mx-auto grid grid-rows-[1fr_2px_1fr] items-center justify-center">
              <p className="row-start-1">Present Continuous</p>
              <div className="row-start-2 h-full bg-red-500"></div>
              <p className="row-start-3">Past Continuous</p>
            </div>
            <HelperVerbBeTriangle
              uuid={svgUseIds[4]}
              /* visibility={{
                am: true,
                are: true,
                is: true,
                was: true,
                were: true,
                tenseLine: true,
              }} */
              classNames={{
                ...DEFAULT_TO_BE_VERB_CLASS_NAMES,
                svg: "col-start-4 row-start-3",
                am: "visible",
                are: "visible",
                is: "visible",
                was: "visible",
                were: "visible",
                tenseLine: "visible",
              }}
            />
            <ToBePronounTriangle
              uuid={svgUseIds[5]}
              /* visibility={{
                amPronouns: true,
                arePronouns: true,
                isPronouns: true,
                wasPronouns: true,
                werePronouns: true,
              }} */
              classNames={{
                ...DEFAULT_TO_BE_PRONOUN_CLASS_NAMES,
                svg: "col-start-4 row-start-3",
                amPronouns: "visible",
                arePronouns: "visible",
                isPronouns: "visible",
                wasPronouns: "visible",
                werePronouns: "visible",
              }}
            />
            <p
              className={`${visibleForNot} col-start-5 row-start-3 m-auto text-2xl font-bold text-red-500`}
            >
              not
            </p>
            <BossVerbTriangle
              uuid={svgUseIds[6]}
              verb={selectedVerb}
              // visibility={{ presentParticiple: true }}
              classNames={{
                ...DEFAULT_VERB_CLASS_NAMES,
                svg: "col-start-6 row-start-3",
                presentParticiple: "visible",
              }}
            />
            <div className="col-span-6 col-start-1 row-start-4 bg-gray-200"></div>
            <div className="col-start-1 row-start-5 mx-auto grid grid-rows-[1fr_2px_1fr] items-center justify-center">
              <p className="row-start-1">Present Perfect Simple</p>
              <div className="row-start-2 h-full bg-red-500"></div>
              <p className="row-start-3">Past Perfect Simple</p>
            </div>
            <HelperVerbHaveTriangle
              uuid={svgUseIds[7]}
              classNames={{
                ...DEFAULT_VERB_CLASS_NAMES,
                svg: "col-start-2 row-start-5",
                head: "visible",
                preterite: "visible",
                thirdPersonSingular: "visible",
                tenseLine: "visible",
              }}
            />
            <NormalPronounTriangle
              uuid={svgUseIds[8]}
              verb={selectedVerb}
              /* visibility={{
                headPronouns: true,
                thirdPersonSingularPronouns: true,
                preteritePronouns: true,
              }} */
              classNames={{
                ...DEFAULT_PRONOUN_CLASS_NAMES,
                svg: "col-start-2 row-start-5",
                headPronouns: "visible",
                thirdPersonSingularPronouns: "visible",
                preteritePronouns: "visible",
              }}
            />
            <p
              className={`${visibleForNot} col-start-3 row-start-5 m-auto text-2xl font-bold text-red-500`}
            >
              not
            </p>
            <BossVerbTriangle
              uuid={svgUseIds[9]}
              verb={selectedVerb}
              visibility={{ pastParticiple: true }}
              classNames={{
                ...DEFAULT_VERB_CLASS_NAMES,
                svg: "col-start-6 row-start-5",
                pastParticiple: "visible",
              }}
            />
            <div className="col-span-6 col-start-1 row-start-6 bg-gray-200"></div>
            <div className="col-start-1 row-start-7 mx-auto grid grid-rows-[1fr_2px_1fr] items-center justify-center">
              <p className="row-start-1">Present Perfect Continuous</p>
              <div className="row-start-2 h-full bg-red-500"></div>
              <p className="row-start-3">Past Perfect Continuous</p>
            </div>
            <HelperVerbHaveTriangle
              uuid={svgUseIds[10]}
              classNames={{
                ...DEFAULT_VERB_CLASS_NAMES,
                svg: "col-start-2 row-start-7",
                head: "visible",
                preterite: "visible",
                thirdPersonSingular: "visible",
                tenseLine: "visible",
              }}
            />
            <NormalPronounTriangle
              uuid={svgUseIds[11]}
              verb={selectedVerb}
              /* visibility={{
                headPronouns: true,
                thirdPersonSingularPronouns: true,
                preteritePronouns: true,
              }} */
              classNames={{
                ...DEFAULT_PRONOUN_CLASS_NAMES,
                svg: "col-start-2 row-start-7",
                headPronouns: "visible",
                thirdPersonSingularPronouns: "visible",
                preteritePronouns: "visible",
              }}
            />
            <p
              className={`${visibleForNot} col-start-3 row-start-7 m-auto text-2xl font-bold text-red-500`}
            >
              not
            </p>
            <HelperVerbBeTriangle
              uuid={svgUseIds[12]}
              classNames={{
                ...DEFAULT_VERB_CLASS_NAMES,
                svg: "col-start-4 row-start-7",
                pastParticiple: "visible",
              }}
            />
            <BossVerbTriangle
              uuid={svgUseIds[13]}
              verb={selectedVerb}
              // visibility={{ presentParticiple: true }}
              classNames={{
                ...DEFAULT_VERB_CLASS_NAMES,
                svg: "col-start-6 row-start-7",
                presentParticiple: "visible",
              }}
            />
          </div>
        </Card>
      </div>
    </GrammarContainer>
  );
}

export default Tenses;
