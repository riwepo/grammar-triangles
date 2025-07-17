"use client";
import { useState } from "react";

import GrammarContainer, {
  SVG_USE_ID_PLACEHOLDERS,
} from "@/components/grammar-container";
import NormalPronounTriangle from "@/components/triangles/basic/pronouns/normal-pronoun-triangle";
import ToBePronounTriangle from "@/components/triangles/basic/pronouns/to-be-pronoun-triangle";
import BossVerbTriangle from "@/components/triangles/boss-verb-triangle";
import HelperVerbHaveTriangle from "@/components/triangles/helper-verb-have-triangle";
import HelperVerbBeTriangle from "@/components/triangles/helper-verb-be-triangle";
import HelperVerbDoTriangle from "@/components/triangles/helper-verb-do-triangle";
import Card from "@/components/ui/card";

import { SENTENCE_TYPES, VERBS } from "@/lib/grammar-data";
import { uncapitalizeFirstLetter } from "@/lib/utils/change-first-letter";
import TensesExplanations from "@/components/tenses-explanations";
import PassivesExplanations from "./passives-explanations";

function Passives() {
  const easeInVisible =
    "opacity-100 transition-opacity duration-2000 ease-in-out";
  const easeOutInvisible =
    "opacity-0 transition-opacity duration-2000 ease-in-out";

  const classNamesDict = {
    active: {
      simple: {
        helperVerbBePassive: {
          svg: `${easeOutInvisible} col-start-4 row-start-1`,
          am: easeOutInvisible,
          are: easeOutInvisible,
          is: easeOutInvisible,
          was: easeOutInvisible,
          were: easeOutInvisible,
          tenseLine: easeOutInvisible,
        },
        helperVerbBePassivePronouns: {
          svg: `${easeOutInvisible} col-start-4 row-start-1`,
          amPronouns: easeOutInvisible,
          arePronouns: easeOutInvisible,
          isPronouns: easeOutInvisible,
          wasPronouns: easeOutInvisible,
          werePronouns: easeOutInvisible,
        },
        bossVerbActive: {
          svg: `${easeInVisible} col-start-4 row-start-1`,
          head: easeInVisible,
          thirdPersonSingular: easeInVisible,
          preterite: easeInVisible,
          pastParticiple: easeInVisible,
          tenseLine: easeInVisible,
        },
        bossVerbActivePronouns: {
          svg: `${easeInVisible} col-start-4 row-start-1`,
          headPronouns: easeInVisible,
          thirdPersonSingularPronouns: easeInVisible,
          preteritePronouns: easeInVisible,
          pastParticiplePronouns: easeInVisible,
        },
        bossVerbPassive: {
          svg: `${easeOutInvisible} col-start-5 row-start-1`,
          pastParticiple: easeOutInvisible,
        },
      },
      continuous: {
        helperVerbBe: {
          svg: "col-start-3 row-start-3",
          am: "visible",
          are: "visible",
          is: "visible",
          was: "visible",
          were: "visible",
          tenseLine: "visible",
        },
        helperVerbBePronouns: {
          svg: "col-start-3 row-start-3",
          amPronouns: "visible",
          arePronouns: "visible",
          isPronouns: "visible",
          wasPronouns: "visible",
          werePronouns: "visible",
        },
        helperVerbBePassive: {
          svg: `${easeOutInvisible} col-start-4 row-start-3`,
          presentParticiple: easeOutInvisible,
        },
        bossVerbActive: {
          svg: `${easeInVisible} col-start-4 row-start-3`,
          presentParticiple: easeInVisible,
        },
        bossVerbPassive: {
          svg: `${easeOutInvisible} col-start-5 row-start-3`,
          pastParticiple: easeOutInvisible,
        },
      },
      perfect: {
        helperVerbHaveQuestion: {
          svg: `${easeOutInvisible} col-start-2 row-start-5`,
          head: "visible",
          preterite: "visible",
          thirdPersonSingular: "visible",
          tenseLine: "visible",
        },
        helperVerbHave: {
          svg: `${easeInVisible} col-start-3 row-start-5`,
          head: "visible",
          preterite: "visible",
          thirdPersonSingular: "visible",
          tenseLine: "visible",
        },
        helperVerbHavePronouns: {
          svg: "col-start-3 row-start-5",
          headPronouns: "visible",
          thirdPersonSingularPronouns: "visible",
          preteritePronouns: "visible",
        },
        not: `${easeOutInvisible} col-start-4 row-start-5 m-auto text-2xl font-bold text-red-500`,
        bossVerb: {
          svg: "col-start-7 row-start-5",
          pastParticiple: "visible",
        },
      },
      perfectContinuous: {
        helperVerbHaveQuestion: {
          svg: `${easeOutInvisible} col-start-2 row-start-7`,
          head: "visible",
          preterite: "visible",
          thirdPersonSingular: "visible",
          tenseLine: "visible",
        },
        helperVerbHave: {
          svg: `${easeInVisible} col-start-3 row-start-7`,
          head: "visible",
          preterite: "visible",
          thirdPersonSingular: "visible",
          tenseLine: "visible",
        },
        helperVerbHavePronouns: {
          svg: "col-start-3 row-start-7",
          headPronouns: "visible",
          thirdPersonSingularPronouns: "visible",
          preteritePronouns: "visible",
        },
        not: `${easeOutInvisible} col-start-4 row-start-7 m-auto text-2xl font-bold text-red-500`,
        helperVerbBe: {
          svg: "col-start-5 row-start-7",
          pastParticiple: "visible",
        },
        bossVerb: {
          svg: "col-start-7 row-start-7",
          presentParticiple: "visible",
        },
      },
    },
    passive: {
      simple: {
        helperVerbBePassive: {
          svg: `${easeInVisible} col-start-4 row-start-1`,
          am: easeInVisible,
          are: easeInVisible,
          is: easeInVisible,
          was: easeInVisible,
          were: easeInVisible,
          tenseLine: easeInVisible,
        },
        helperVerbBePassivePronouns: {
          svg: `${easeInVisible} col-start-4 row-start-1`,
          amPronouns: easeInVisible,
          arePronouns: easeInVisible,
          isPronouns: easeInVisible,
          wasPronouns: easeInVisible,
          werePronouns: easeInVisible,
        },
        bossVerbActive: {
          svg: `${easeOutInvisible} col-start-4 row-start-1`,
          head: easeOutInvisible,
          thirdPersonSingular: easeOutInvisible,
          preterite: easeOutInvisible,
          pastParticiple: easeOutInvisible,
          tenseLine: easeOutInvisible,
        },
        bossVerbActivePronouns: {
          svg: `${easeOutInvisible} col-start-4 row-start-1`,
          headPronouns: easeOutInvisible,
          thirdPersonSingularPronouns: easeOutInvisible,
          preteritePronouns: easeOutInvisible,
          pastParticiplePronouns: easeOutInvisible,
        },
        bossVerbPassive: {
          svg: `${easeInVisible} col-start-5 row-start-1`,
          pastParticiple: easeInVisible,
        },
      },
      continuous: {
        helperVerbBe: {
          svg: "col-start-3 row-start-3",
          am: "visible",
          are: "visible",
          is: "visible",
          was: "visible",
          were: "visible",
          tenseLine: "visible",
        },
        helperVerbBePronouns: {
          svg: "col-start-3 row-start-3",
          amPronouns: "visible",
          arePronouns: "visible",
          isPronouns: "visible",
          wasPronouns: "visible",
          werePronouns: "visible",
        },
        helperVerbBePassive: {
          svg: `${easeInVisible} col-start-4 row-start-3`,
          presentParticiple: easeInVisible,
        },
        bossVerbActive: {
          svg: `${easeOutInvisible} col-start-4 row-start-3`,
          presentParticiple: easeOutInvisible,
        },
        bossVerbPassive: {
          svg: `${easeInVisible} col-start-5 row-start-3`,
          pastParticiple: easeInVisible,
        },
      },
      perfect: {
        helperVerbHaveQuestion: {
          svg: `${easeOutInvisible} col-start-2 row-start-5`,
          head: "visible",
          preterite: "visible",
          thirdPersonSingular: "visible",
          tenseLine: "visible",
        },
        helperVerbHave: {
          svg: `${easeInVisible} col-start-3 row-start-5`,
          head: "visible",
          preterite: "visible",
          thirdPersonSingular: "visible",
          tenseLine: "visible",
        },
        helperVerbHavePronouns: {
          svg: "col-start-3 row-start-5",
          headPronouns: "visible",
          thirdPersonSingularPronouns: "visible",
          preteritePronouns: "visible",
        },
        not: `${easeInVisible} col-start-4 row-start-5 m-auto text-2xl font-bold text-red-500`,
        bossVerb: {
          svg: "col-start-7 row-start-5",
          pastParticiple: "visible",
        },
      },
      perfectContinuous: {
        helperVerbHaveQuestion: {
          svg: `${easeOutInvisible} col-start-2 row-start-7`,
          head: "visible",
          preterite: "visible",
          thirdPersonSingular: "visible",
          tenseLine: "visible",
        },
        helperVerbHave: {
          svg: `${easeInVisible} col-start-3 row-start-7`,
          head: "visible",
          preterite: "visible",
          thirdPersonSingular: "visible",
          tenseLine: "visible",
        },
        helperVerbHavePronouns: {
          svg: "col-start-3 row-start-7",
          headPronouns: "visible",
          thirdPersonSingularPronouns: "visible",
          preteritePronouns: "visible",
        },
        not: `${easeInVisible} col-start-4 row-start-7 m-auto text-2xl font-bold text-red-500`,
        helperVerbBe: {
          svg: "col-start-5 row-start-7",
          pastParticiple: "visible",
        },
        bossVerb: {
          svg: "col-start-7 row-start-7",
          presentParticiple: "visible",
        },
      },
    },
  };

  const [selectedSentenceType, setSentenceType] = useState(
    SENTENCE_TYPES.active,
  );

  const [selectedVerb, setSelectedVerb] = useState(
    VERBS[Object.keys(VERBS)[0]],
  );
  const [classNames, setClassNames] = useState(classNamesDict.active);

  let svgUseIds = SVG_USE_ID_PLACEHOLDERS;
  const handleContainerLoaded = (mySvgUseIds) => {
    svgUseIds = mySvgUseIds;
  };

  const handleVerbSelected = (key) => {
    setSelectedVerb(VERBS[key]);
  };

  const handleSentenceTypeSelected = (key) => {
    setSentenceType(key);
    if (key === SENTENCE_TYPES.active) {
      setClassNames(classNamesDict.active);
    } else if (key === SENTENCE_TYPES.passive) {
      setClassNames(classNamesDict.passive);
    }
  };

  const voiceType =
    selectedSentenceType === SENTENCE_TYPES.active ? "Active" : "Passive";

  const heading = `${voiceType} voice for verb '${uncapitalizeFirstLetter(selectedVerb.head)}'`;

  const printableDiagramContent = (
    <Card className="absolute top-0 right-0 bottom-0 left-0 row-start-2 m-4 bg-white">
      <div className="grid h-full grid-cols-[auto_10fr_10fr_10fr_10fr] grid-rows-[1fr_2px_1fr_2px_1fr_2px_1fr] gap-y-1">
        <div className="col-start-1 row-start-1 mx-auto grid grid-rows-[1fr_2px_1fr] items-center justify-center">
          <p className="row-start-1">Present Simple</p>
          <div className="row-start-2 h-full bg-red-500"></div>
          <p className="row-start-3">Past Simple</p>
        </div>
        <HelperVerbBeTriangle
          uuid={svgUseIds[0]}
          classNames={classNames.simple.helperVerbBePassive}
        />
        <ToBePronounTriangle
          uuid={svgUseIds[1]}
          classNames={classNames.simple.helperVerbBePassivePronouns}
        />
        <HelperVerbBeTriangle
          uuid={svgUseIds[2]}
          classNames={classNames.simple.helperVerbBePassive}
        />
        <BossVerbTriangle
          uuid={svgUseIds[3]}
          verb={selectedVerb}
          classNames={classNames.simple.bossVerbActive}
        />
        <NormalPronounTriangle
          uuid={svgUseIds[4]}
          verb={selectedVerb}
          classNames={classNames.simple.bossVerbActivePronouns}
        />
        <BossVerbTriangle
          uuid={svgUseIds[5]}
          verb={selectedVerb}
          classNames={classNames.simple.bossVerbPassive}
        />

        <div className="col-span-7 col-start-1 row-start-2 bg-gray-200"></div>
        <div className="col-start-1 row-start-3 mx-auto grid grid-rows-[1fr_2px_1fr] items-center justify-center">
          <p className="row-start-1">Present Continuous</p>
          <div className="row-start-2 h-full bg-red-500"></div>
          <p className="row-start-3">Past Continuous</p>
        </div>

        <HelperVerbBeTriangle
          uuid={svgUseIds[6]}
          classNames={classNames.continuous.helperVerbBe}
        />
        <ToBePronounTriangle
          uuid={svgUseIds[7]}
          classNames={classNames.continuous.helperVerbBePronouns}
        />
        <HelperVerbBeTriangle
          uuid={svgUseIds[8]}
          classNames={classNames.continuous.helperVerbBePassive}
        />
        <BossVerbTriangle
          uuid={svgUseIds[9]}
          verb={selectedVerb}
          classNames={classNames.continuous.bossVerbActive}
        />
        <BossVerbTriangle
          uuid={svgUseIds[10]}
          verb={selectedVerb}
          classNames={classNames.continuous.bossVerbPassive}
        />
        <div className="col-span-7 col-start-1 row-start-4 bg-gray-200"></div>
        <div className="col-start-1 row-start-5 mx-auto grid grid-rows-[1fr_2px_1fr] items-center justify-center">
          <p className="row-start-1">Present Perfect Simple</p>
          <div className="row-start-2 h-full bg-red-500"></div>
          <p className="row-start-3">Past Perfect Simple</p>
        </div>
        <HelperVerbHaveTriangle
          uuid={svgUseIds[11]}
          classNames={classNames.perfect.helperVerbHaveQuestion}
        />
        <HelperVerbHaveTriangle
          uuid={svgUseIds[12]}
          classNames={classNames.perfect.helperVerbHave}
        />
        <NormalPronounTriangle
          uuid={svgUseIds[13]}
          verb={selectedVerb}
          classNames={classNames.perfect.helperVerbHavePronouns}
        />
        <p className={classNames.perfect.not}>not</p>
        <BossVerbTriangle
          uuid={svgUseIds[14]}
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
          uuid={svgUseIds[15]}
          classNames={classNames.perfectContinuous.helperVerbHaveQuestion}
        />
        <HelperVerbHaveTriangle
          uuid={svgUseIds[16]}
          classNames={classNames.perfectContinuous.helperVerbHave}
        />
        <NormalPronounTriangle
          uuid={svgUseIds[17]}
          verb={selectedVerb}
          classNames={classNames.perfectContinuous.helperVerbHavePronouns}
        />
        <p className={classNames.perfectContinuous.not}>not</p>
        <HelperVerbBeTriangle
          uuid={svgUseIds[18]}
          classNames={classNames.perfectContinuous.helperVerbBe}
        />
        <BossVerbTriangle
          uuid={svgUseIds[19]}
          verb={selectedVerb}
          classNames={classNames.perfectContinuous.bossVerb}
        />
      </div>
    </Card>
  );

  const explanationsContent = <PassivesExplanations />;

  return (
    <GrammarContainer
      printableDiagramHeading={heading}
      printableDiagramContent={printableDiagramContent}
      explanationsContent={explanationsContent}
      sentenceTypes={[SENTENCE_TYPES.active, SENTENCE_TYPES.passive]}
      allowShowPronouns={false}
      onVerbSelected={handleVerbSelected}
      onSentenceTypeSelected={handleSentenceTypeSelected}
      onLoaded={handleContainerLoaded}
    />
  );
}

export default Passives;
