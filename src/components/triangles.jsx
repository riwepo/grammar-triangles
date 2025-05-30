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

  const items = [
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

  const verbExplanations = {
    base: {
      heading: "V1 - Base Form",
      intro:
        "This is the root form of the verb, used in the present tense and infinitives.",
      howToCreate: "This is itself the base form",
      uses: [
        {
          key: 1,
          heading: "Present simple tense",
          examples: ["One", "two", "three"],
        },
        {
          key: 2,
          heading: "To-plus infinitives",
          examples: ["One", "two", "three"],
        },
        {
          key: 3,
          heading: "Bare infinitives",
          examples: ["One", "two", "three"],
        },
        { key: 4, heading: "Imperatives", examples: ["One", "two", "three"] },
        {
          key: 5,
          heading: "After modal verbs",
          examples: ["One", "two", "three"],
        },
      ],
    },
    pastSimple: {
      heading: "V2 - Past Simple",
      intro:
        "It represents actions that occurred in the past and is often formed by adding -ed to regular verbs. However, irregular verbs change unpredictably.",
      howToCreate:
        "For regular verbs we add -ed to the base verb. Somethimes a small spelling change is needed. Some verbs are irregular and the change is unpredictably.",
      uses: [
        {
          key: 1,
          heading: "Past simple tense",
          examples: ["One", "two", "three"],
        },
        {
          key: 2,
          heading: "Second conditional sentences",
          examples: ["One", "two", "three"],
        },
        {
          key: 3,
          heading: "Reported speech",
          examples: ["One", "two", "three"],
        },
        {
          key: 4,
          heading: "Past narratives",
          examples: ["One", "two", "three"],
        },
      ],
    },
    pastParticiple: {
      heading: "V3 - Past Participle",
      intro:
        "It is used in perfect tenses and passive sentences and is often formed by adding -ed to regular verbs. However, irregular verbs change unpredictably.",
      howToCreate:
        "For regular verbs we add -ed to the base verb. Somethimes a small spelling change is needed. Some verbs are irregular and the change is unpredictably.",
      uses: [
        {
          key: 1,
          heading: "Present perfect tense",
          examples: ["One", "two", "three"],
        },
        {
          key: 2,
          heading: "Past perfect tense",
          examples: ["One", "two", "three"],
        },
        { key: 3, heading: "Passive voice", examples: ["One", "two", "three"] },
        { key: 4, heading: "Adjectives", examples: ["One", "two", "three"] },
      ],
    },
    presentParticiple: {
      heading: "V4 - Present Participle",
      intro: "It is formed by adding -ing to the base verb",
      howToCreate:
        "We add -ing to the base verb. Somethimes a small spelling change is needed.",
      uses: [
        {
          key: 1,
          heading: "Present continuous tense",
          examples: ["One", "two", "three"],
        },
        {
          key: 2,
          heading: "Present perfect continuous tense",
          examples: ["One", "two", "three"],
        },
        {
          key: 3,
          heading: "Past continuous tense",
          examples: ["One", "two", "three"],
        },
        {
          key: 4,
          heading: "Past perfect continuous tense",
          examples: ["One", "two", "three"],
        },
        {
          key: 5,
          heading: "Adjectives",
          examples: ["One", "two", "three"],
        },
        {
          key: 6,
          heading: "Gerunds",
          examples: ["One", "two", "three"],
        },
      ],
    },
    thirdPersonSingular: {
      heading: "V5 - Third Person Singular",
      intro:
        " It is used in the present simple tense when the subject is he, she, or it.",
      howToCreate:
        "We add -s to the base verb. Somethimes a small spelling change is needed.",
      uses: [
        {
          key: 1,
          heading: "Present simple tense",
          examples: ["One", "two", "three"],
        },
      ],
    },
  };

  const VerbExplanation = ({ verbData }) => {
    return (
      <li>
        <p className="text-xl font-bold">{verbData.heading}</p>
        <p>{verbData.intro}</p>
        <p>How to create it from the base verb</p>
        <p>{verbData.howToCreate}</p>
        <p>Where it is used</p>
        <ul>
          {verbData.uses.map((use) => (
            <li key={use.key}>{use.heading}</li>
          ))}
        </ul>
      </li>
    );
  };

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
            className="col-start-1 row-start-3 mx-auto h-full w-1/2 bg-white"
          >
            {items}
          </CardTabs>
        </div>
      </GrammarContainer>
      <div className="text-center">
        <p>
          In English grammar, verbs have five main forms, often labeled as V1 to
          V5
        </p>
        <p>
          These numbers correspond to the labels on the points in the triangle
          above.
        </p>
        <ol>
          <VerbExplanation verbData={verbExplanations.base} />
          <VerbExplanation verbData={verbExplanations.pastSimple} />
          <VerbExplanation verbData={verbExplanations.pastParticiple} />
          <VerbExplanation verbData={verbExplanations.presentParticiple} />
          <VerbExplanation verbData={verbExplanations.thirdPersonSingular} />
        </ol>
      </div>
    </>
  );
}

export default Triangles;
