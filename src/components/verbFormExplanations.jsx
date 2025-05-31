import CardTabs from "@/components/ui/card-tabs";

import { VERB_FORM_EXPLANATIONS } from "@/lib/grammar-data";

function VerbFormExplanations() {
  const VerbFormUse = ({ verbFormUseData }) => {
    return (
      <li key={verbFormUseData.key}>
        <p>{verbFormUseData.heading}</p>
        <p className="whitespace-pre">{verbFormUseData.description}</p>
        <ul>
          {verbFormUseData.examples.map((example) => (
            <p key={example.key}>{example.value}</p>
          ))}
        </ul>
      </li>
    );
  };
  const VerbFormExplanation = ({ verbFormData }) => {
    return (
      <div>
        <p className="text-xl font-bold">{verbFormData.heading}</p>
        <p className="text-l font-semibold">
          How to create it from the base verb
        </p>
        <p className="whitespace-pre">{verbFormData.howToCreate}</p>
        <p className="text-l font-semibold">Creation examples</p>
        <ul>
          {verbFormData.creationExamples.map((eg) => (
            <li key={eg.key}>{eg.value}</li>
          ))}
        </ul>
        <p className="text-l font-semibold">Where it is used</p>
        <ul>
          {verbFormData.uses.map((use) => (
            <VerbFormUse verbFormUseData={use}></VerbFormUse>
          ))}
        </ul>
      </div>
    );
  };

  {
    /* <VerbFormExplanation verbFormData={VERB_FORM_EXPLANATIONS.base} />,
    <VerbFormExplanation verbFormData={VERB_FORM_EXPLANATIONS.pastSimple} />,
    <VerbFormExplanation
      verbFormData={VERB_FORM_EXPLANATIONS.pastParticiple}
    />,
    <VerbFormExplanation
      verbFormData={VERB_FORM_EXPLANATIONS.presentParticiple}
    />,
    <VerbFormExplanation
      verbFormData={VERB_FORM_EXPLANATIONS.thirdPersonSingular}
    />, */
  }

  const verbFormExplanations = [
    <VerbFormExplanation
      verbFormData={VERB_FORM_EXPLANATIONS.presentParticiple}
    />,
  ];
  return (
    <div className="text-center">
      <p>
        In English grammar, verbs have five main forms, often labeled as V1 to
        V5
      </p>
      <p>
        These numbers correspond to the labels on the points in the triangle
        above.
      </p>
      <CardTabs
        tabs={[VERB_FORM_EXPLANATIONS.presentParticiple.heading]}
        className="mx-auto h-full w-3/4 bg-white"
      >
        {verbFormExplanations}
      </CardTabs>
    </div>
  );
}

export default VerbFormExplanations;
/* VERB_FORM_EXPLANATIONS.base.heading,
          VERB_FORM_EXPLANATIONS.pastSimple.heading,
          VERB_FORM_EXPLANATIONS.pastParticiple.heading,
          VERB_FORM_EXPLANATIONS.presentParticiple.heading,
          VERB_FORM_EXPLANATIONS.thirdPersonSingular.heading, */
