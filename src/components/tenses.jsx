"use client";
import { useState } from "react";

import GrammarContainer, {
  SVG_USE_ID_PLACEHOLDERS,
} from "@/components/grammar-container";
import { DEFAULT_CLASS_NAMES as DEFAULT_VERB_CLASS_NAMES } from "@/components/triangles/basic/verbs/normal-verb-triangle";
import NormalPronounTriangle, {
  DEFAULT_CLASS_NAMES as DEFAULT_PRONOUN_CLASS_NAMES,
} from "@/components/triangles/basic/pronouns/normal-pronoun-triangle";
import { DEFAULT_CLASS_NAMES as DEFAULT_TO_BE_VERB_CLASS_NAMES } from "@/components/triangles/basic/verbs/to-be-verb-triangle";
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
          svg: `${easeOutInvisible} col-start-5 row-start-1`,
          head: "visible",
          thirdPersonSingular: "visible",
          preterite: "visible",
          tenseLine: "visible",
        },
        helperVerbDoPronouns: {
          ...DEFAULT_PRONOUN_CLASS_NAMES,
          svg: `${easeOutInvisible} col-start-5 row-start-1`,
          headPronouns: "visible",
          thirdPersonSingularPronouns: "visible",
          preteritePronouns: "visible",
        },
        not: `${easeOutInvisible} col-start-6 row-start-1 m-auto text-2xl font-bold text-red-500`,
        bossVerb: {
          ...DEFAULT_VERB_CLASS_NAMES,
          svg: "col-start-7 row-start-1",
          head: "visible",
          thirdPersonSingular: easeInVisible,
          preterite: easeInVisible,
          tenseLine: easeInVisible,
        },
        bossVerbPronouns: {
          ...DEFAULT_PRONOUN_CLASS_NAMES,
          svg: "col-start-7 row-start-1",
          headPronouns: easeInVisible,
          thirdPersonSingularPronouns: easeInVisible,
          preteritePronouns: easeInVisible,
        },
      },
      continuous: {
        helperVerbBeQuestion: {
          ...DEFAULT_TO_BE_VERB_CLASS_NAMES,
          svg: `${easeOutInvisible} col-start-3 row-start-3`,
          am: "visible",
          are: "visible",
          is: "visible",
          was: "visible",
          were: "visible",
          tenseLine: "visible",
        },
        helperVerbBe: {
          ...DEFAULT_TO_BE_VERB_CLASS_NAMES,
          svg: `${easeInVisible} col-start-5 row-start-3`,
          am: "visible",
          are: "visible",
          is: "visible",
          was: "visible",
          were: "visible",
          tenseLine: "visible",
        },
        helperVerbBePronouns: {
          ...DEFAULT_TO_BE_PRONOUN_CLASS_NAMES,
          svg: "col-start-5 row-start-3",
          amPronouns: "visible",
          arePronouns: "visible",
          isPronouns: "visible",
          wasPronouns: "visible",
          werePronouns: "visible",
        },
        not: `${easeOutInvisible} col-start-6 row-start-3 m-auto text-2xl font-bold text-red-500`,
        bossVerb: {
          ...DEFAULT_VERB_CLASS_NAMES,
          svg: "col-start-7 row-start-3",
          presentParticiple: "visible",
        },
      },
      perfect: {
        helperVerbHaveQuestion: {
          ...DEFAULT_VERB_CLASS_NAMES,
          svg: `${easeOutInvisible} col-start-2 row-start-5`,
          head: "visible",
          preterite: "visible",
          thirdPersonSingular: "visible",
          tenseLine: "visible",
        },
        helperVerbHave: {
          ...DEFAULT_VERB_CLASS_NAMES,
          svg: `${easeInVisible} col-start-3 row-start-5`,
          head: "visible",
          preterite: "visible",
          thirdPersonSingular: "visible",
          tenseLine: "visible",
        },
        helperVerbHavePronouns: {
          ...DEFAULT_PRONOUN_CLASS_NAMES,
          svg: "col-start-3 row-start-5",
          headPronouns: "visible",
          thirdPersonSingularPronouns: "visible",
          preteritePronouns: "visible",
        },
        not: `${easeOutInvisible} col-start-4 row-start-5 m-auto text-2xl font-bold text-red-500`,
        bossVerb: {
          ...DEFAULT_VERB_CLASS_NAMES,
          svg: "col-start-7 row-start-5",
          pastParticiple: "visible",
        },
      },
      perfectContinuous: {
        helperVerbHaveQuestion: {
          ...DEFAULT_VERB_CLASS_NAMES,
          svg: `${easeOutInvisible} col-start-2 row-start-7`,
          head: "visible",
          preterite: "visible",
          thirdPersonSingular: "visible",
          tenseLine: "visible",
        },
        helperVerbHave: {
          ...DEFAULT_VERB_CLASS_NAMES,
          svg: `${easeInVisible} col-start-3 row-start-7`,
          head: "visible",
          preterite: "visible",
          thirdPersonSingular: "visible",
          tenseLine: "visible",
        },
        helperVerbHavePronouns: {
          ...DEFAULT_PRONOUN_CLASS_NAMES,
          svg: "col-start-3 row-start-7",
          headPronouns: "visible",
          thirdPersonSingularPronouns: "visible",
          preteritePronouns: "visible",
        },
        not: `${easeOutInvisible} col-start-4 row-start-7 m-auto text-2xl font-bold text-red-500`,
        helperVerbBe: {
          ...DEFAULT_TO_BE_VERB_CLASS_NAMES,
          svg: "col-start-5 row-start-7",
          pastParticiple: "visible",
        },
        bossVerb: {
          ...DEFAULT_VERB_CLASS_NAMES,
          svg: "col-start-7 row-start-7",
          presentParticiple: "visible",
        },
      },
    },
    negative: {
      simple: {
        helperVerbDo: {
          ...DEFAULT_VERB_CLASS_NAMES,
          svg: `${easeInVisible} col-start-5 row-start-1`,
          head: "visible",
          thirdPersonSingular: "visible",
          preterite: "visible",
          tenseLine: "visible",
        },
        helperVerbDoPronouns: {
          ...DEFAULT_PRONOUN_CLASS_NAMES,
          svg: `${easeInVisible} col-start-5 row-start-1`,
          headPronouns: "visible",
          thirdPersonSingularPronouns: "visible",
          preteritePronouns: "visible",
        },
        not: `${easeInVisible} col-start-6 row-start-1 m-auto text-2xl font-bold text-red-500`,
        bossVerb: {
          ...DEFAULT_VERB_CLASS_NAMES,
          svg: "col-start-7 row-start-1",
          head: "visible",
          thirdPersonSingular: easeOutInvisible,
          preterite: easeOutInvisible,
          tenseLine: easeOutInvisible,
        },
        bossVerbPronouns: {
          ...DEFAULT_PRONOUN_CLASS_NAMES,
          svg: "col-start-7 row-start-1",
          headPronouns: easeOutInvisible,
          thirdPersonSingularPronouns: easeOutInvisible,
          preteritePronouns: easeOutInvisible,
        },
      },
      continuous: {
        helperVerbBeQuestion: {
          ...DEFAULT_TO_BE_VERB_CLASS_NAMES,
          svg: `${easeOutInvisible} col-start-3 row-start-3`,
          am: "visible",
          are: "visible",
          is: "visible",
          was: "visible",
          were: "visible",
          tenseLine: "visible",
        },
        helperVerbBe: {
          ...DEFAULT_TO_BE_VERB_CLASS_NAMES,
          svg: `${easeInVisible} col-start-5 row-start-3`,
          am: "visible",
          are: "visible",
          is: "visible",
          was: "visible",
          were: "visible",
          tenseLine: "visible",
        },
        helperVerbBePronouns: {
          ...DEFAULT_TO_BE_PRONOUN_CLASS_NAMES,
          svg: "col-start-5 row-start-3",
          amPronouns: "visible",
          arePronouns: "visible",
          isPronouns: "visible",
          wasPronouns: "visible",
          werePronouns: "visible",
        },
        not: `${easeInVisible} col-start-6 row-start-3 m-auto text-2xl font-bold text-red-500`,
        bossVerb: {
          ...DEFAULT_VERB_CLASS_NAMES,
          svg: "col-start-7 row-start-3",
          presentParticiple: "visible",
        },
      },
      perfect: {
        helperVerbHaveQuestion: {
          ...DEFAULT_VERB_CLASS_NAMES,
          svg: `${easeOutInvisible} col-start-2 row-start-5`,
          head: "visible",
          preterite: "visible",
          thirdPersonSingular: "visible",
          tenseLine: "visible",
        },
        helperVerbHave: {
          ...DEFAULT_VERB_CLASS_NAMES,
          svg: `${easeInVisible} col-start-3 row-start-5`,
          head: "visible",
          preterite: "visible",
          thirdPersonSingular: "visible",
          tenseLine: "visible",
        },
        helperVerbHavePronouns: {
          ...DEFAULT_PRONOUN_CLASS_NAMES,
          svg: "col-start-3 row-start-5",
          headPronouns: "visible",
          thirdPersonSingularPronouns: "visible",
          preteritePronouns: "visible",
        },
        not: `${easeInVisible} col-start-4 row-start-5 m-auto text-2xl font-bold text-red-500`,
        bossVerb: {
          ...DEFAULT_VERB_CLASS_NAMES,
          svg: "col-start-7 row-start-5",
          pastParticiple: "visible",
        },
      },
      perfectContinuous: {
        helperVerbHaveQuestion: {
          ...DEFAULT_VERB_CLASS_NAMES,
          svg: `${easeOutInvisible} col-start-2 row-start-7`,
          head: "visible",
          preterite: "visible",
          thirdPersonSingular: "visible",
          tenseLine: "visible",
        },
        helperVerbHave: {
          ...DEFAULT_VERB_CLASS_NAMES,
          svg: `${easeInVisible} col-start-3 row-start-7`,
          head: "visible",
          preterite: "visible",
          thirdPersonSingular: "visible",
          tenseLine: "visible",
        },
        helperVerbHavePronouns: {
          ...DEFAULT_PRONOUN_CLASS_NAMES,
          svg: "col-start-3 row-start-7",
          headPronouns: "visible",
          thirdPersonSingularPronouns: "visible",
          preteritePronouns: "visible",
        },
        not: `${easeInVisible} col-start-4 row-start-7 m-auto text-2xl font-bold text-red-500`,
        helperVerbBe: {
          ...DEFAULT_TO_BE_VERB_CLASS_NAMES,
          svg: "col-start-5 row-start-7",
          pastParticiple: "visible",
        },
        bossVerb: {
          ...DEFAULT_VERB_CLASS_NAMES,
          svg: "col-start-7 row-start-7",
          presentParticiple: "visible",
        },
      },
    },
    question: {
      simple: {
        helperVerbDo: {
          ...DEFAULT_VERB_CLASS_NAMES,
          svg: `${easeInVisible} col-start-5 row-start-1`,
          head: "visible",
          thirdPersonSingular: "visible",
          preterite: "visible",
          tenseLine: "visible",
        },
        helperVerbDoPronouns: {
          ...DEFAULT_PRONOUN_CLASS_NAMES,
          svg: `${easeOutInvisible} col-start-5 row-start-1`,
          headPronouns: "visible",
          thirdPersonSingularPronouns: "visible",
          preteritePronouns: "visible",
        },
        not: `${easeOutInvisible} col-start-6 row-start-1 m-auto text-2xl font-bold text-red-500`,
        bossVerb: {
          ...DEFAULT_VERB_CLASS_NAMES,
          svg: "col-start-7 row-start-1",
          head: "visible",
          thirdPersonSingular: easeOutInvisible,
          preterite: easeOutInvisible,
          tenseLine: easeOutInvisible,
        },
        bossVerbPronouns: {
          ...DEFAULT_PRONOUN_CLASS_NAMES,
          svg: "col-start-7 row-start-1",
          headPronouns: easeInVisible,
          thirdPersonSingularPronouns: easeInVisible,
          preteritePronouns: easeInVisible,
        },
      },
      continuous: {
        helperVerbBeQuestion: {
          ...DEFAULT_TO_BE_VERB_CLASS_NAMES,
          svg: `${easeInVisible} col-start-3 row-start-3`,
          am: "visible",
          are: "visible",
          is: "visible",
          was: "visible",
          were: "visible",
          tenseLine: "visible",
        },
        helperVerbBe: {
          ...DEFAULT_TO_BE_VERB_CLASS_NAMES,
          svg: `${easeOutInvisible} col-start-5 row-start-3`,
          am: "visible",
          are: "visible",
          is: "visible",
          was: "visible",
          were: "visible",
          tenseLine: "visible",
        },
        helperVerbBePronouns: {
          ...DEFAULT_TO_BE_PRONOUN_CLASS_NAMES,
          svg: "col-start-5 row-start-3",
          amPronouns: "visible",
          arePronouns: "visible",
          isPronouns: "visible",
          wasPronouns: "visible",
          werePronouns: "visible",
        },
        not: `${easeOutInvisible} col-start-6 row-start-3 m-auto text-2xl font-bold text-red-500`,
        bossVerb: {
          ...DEFAULT_VERB_CLASS_NAMES,
          svg: "col-start-7 row-start-3",
          presentParticiple: "visible",
        },
      },
      perfect: {
        helperVerbHaveQuestion: {
          ...DEFAULT_VERB_CLASS_NAMES,
          svg: `${easeInVisible} col-start-2 row-start-5`,
          head: "visible",
          preterite: "visible",
          thirdPersonSingular: "visible",
          tenseLine: "visible",
        },
        helperVerbHave: {
          ...DEFAULT_VERB_CLASS_NAMES,
          svg: `${easeOutInvisible} col-start-3 row-start-5`,
          head: "visible",
          preterite: "visible",
          thirdPersonSingular: "visible",
          tenseLine: "visible",
        },
        helperVerbHavePronouns: {
          ...DEFAULT_PRONOUN_CLASS_NAMES,
          svg: "col-start-3 row-start-5",
          headPronouns: "visible",
          thirdPersonSingularPronouns: "visible",
          preteritePronouns: "visible",
        },
        not: `${easeOutInvisible} col-start-4 row-start-5 m-auto text-2xl font-bold text-red-500`,
        bossVerb: {
          ...DEFAULT_VERB_CLASS_NAMES,
          svg: "col-start-7 row-start-5",
          pastParticiple: "visible",
        },
      },
      perfectContinuous: {
        helperVerbHaveQuestion: {
          ...DEFAULT_VERB_CLASS_NAMES,
          svg: `${easeInVisible} col-start-2 row-start-7`,
          head: "visible",
          preterite: "visible",
          thirdPersonSingular: "visible",
          tenseLine: "visible",
        },
        helperVerbHave: {
          ...DEFAULT_VERB_CLASS_NAMES,
          svg: `${easeOutInvisible} col-start-3 row-start-7`,
          head: "visible",
          preterite: "visible",
          thirdPersonSingular: "visible",
          tenseLine: "visible",
        },
        helperVerbHavePronouns: {
          ...DEFAULT_PRONOUN_CLASS_NAMES,
          svg: "col-start-3 row-start-7",
          headPronouns: "visible",
          thirdPersonSingularPronouns: "visible",
          preteritePronouns: "visible",
        },
        not: `${easeOutInvisible} col-start-4 row-start-7 m-auto text-2xl font-bold text-red-500`,
        helperVerbBe: {
          ...DEFAULT_TO_BE_VERB_CLASS_NAMES,
          svg: "col-start-5 row-start-7",
          pastParticiple: "visible",
        },
        bossVerb: {
          ...DEFAULT_VERB_CLASS_NAMES,
          svg: "col-start-7 row-start-7",
          presentParticiple: "visible",
        },
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
          <div className="grid h-full grid-cols-[auto_10fr_10fr_1fr_10fr_1fr_10fr] grid-rows-[1fr_2px_1fr_2px_1fr_2px_1fr] gap-y-1">
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
            <div className="col-span-7 col-start-1 row-start-2 bg-gray-200"></div>
            <div className="col-start-1 row-start-3 mx-auto grid grid-rows-[1fr_2px_1fr] items-center justify-center">
              <p className="row-start-1">Present Continuous</p>
              <div className="row-start-2 h-full bg-red-500"></div>
              <p className="row-start-3">Past Continuous</p>
            </div>
            <HelperVerbBeTriangle
              uuid={svgUseIds[4]}
              classNames={classNames.continuous.helperVerbBeQuestion}
            />
            <HelperVerbBeTriangle
              uuid={svgUseIds[5]}
              classNames={classNames.continuous.helperVerbBe}
            />
            <ToBePronounTriangle
              uuid={svgUseIds[6]}
              classNames={classNames.continuous.helperVerbBePronouns}
            />
            <p className={classNames.continuous.not}>not</p>
            <BossVerbTriangle
              uuid={svgUseIds[7]}
              verb={selectedVerb}
              classNames={classNames.continuous.bossVerb}
            />
            <div className="col-span-7 col-start-1 row-start-4 bg-gray-200"></div>
            <div className="col-start-1 row-start-5 mx-auto grid grid-rows-[1fr_2px_1fr] items-center justify-center">
              <p className="row-start-1">Present Perfect Simple</p>
              <div className="row-start-2 h-full bg-red-500"></div>
              <p className="row-start-3">Past Perfect Simple</p>
            </div>
            <HelperVerbHaveTriangle
              uuid={svgUseIds[8]}
              classNames={classNames.perfect.helperVerbHaveQuestion}
            />
            <HelperVerbHaveTriangle
              uuid={svgUseIds[9]}
              classNames={classNames.perfect.helperVerbHave}
            />
            <NormalPronounTriangle
              uuid={svgUseIds[10]}
              verb={selectedVerb}
              classNames={classNames.perfect.helperVerbHavePronouns}
            />
            <p className={classNames.perfect.not}>not</p>
            <BossVerbTriangle
              uuid={svgUseIds[11]}
              verb={selectedVerb}
              classNames={classNames.perfect.bossVerb}
            />
            <div className="col-span-7 col-start-1 row-start-6 bg-gray-200"></div>
            <div className="col-start-1 row-start-7 mx-auto grid grid-rows-[1fr_2px_1fr] items-center justify-center">
              <p className="row-start-1">Present Perfect Continuous</p>
              <div className="row-start-2 h-full bg-red-500"></div>
              <p className="row-start-3">Past Perfect Continuous</p>
            </div>
            <HelperVerbHaveTriangle
              uuid={svgUseIds[12]}
              classNames={classNames.perfectContinuous.helperVerbHaveQuestion}
            />
            <HelperVerbHaveTriangle
              uuid={svgUseIds[13]}
              classNames={classNames.perfectContinuous.helperVerbHave}
            />
            <NormalPronounTriangle
              uuid={svgUseIds[14]}
              verb={selectedVerb}
              classNames={classNames.perfectContinuous.helperVerbHavePronouns}
            />
            <p className={classNames.perfectContinuous.not}>not</p>
            <HelperVerbBeTriangle
              uuid={svgUseIds[15]}
              classNames={classNames.perfectContinuous.helperVerbBe}
            />
            <BossVerbTriangle
              uuid={svgUseIds[16]}
              verb={selectedVerb}
              classNames={classNames.perfectContinuous.bossVerb}
            />
          </div>
        </Card>
      </div>
    </GrammarContainer>
  );
}

export default Tenses;
