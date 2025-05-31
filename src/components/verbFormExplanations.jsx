import CardTabs from "@/components/ui/card-tabs";

import { VERB_FORM_EXPLANATIONS } from "@/lib/grammar-data";

function VerbFormExplanations() {
  const VerbFormUse = ({ verbFormUseData, index }) => {
    return (
      <li>
        <p className="mt-2 mb-2 text-xl font-bold">{`${index}. ${verbFormUseData.heading}`}</p>
        <p className="whitespace-pre">{verbFormUseData.description}</p>
        <p className="text-l mt-2 font-semibold">Examples</p>
        <ul>
          {verbFormUseData.examples.map((example) => (
            <p
              key={example.key}
              className="italic"
              dangerouslySetInnerHTML={{ __html: example.value }}
            />
          ))}
        </ul>
      </li>
    );
  };
  const VerbFormExplanation = ({ verbFormData }) => {
    return (
      <div>
        <p className="text-3xl font-extrabold">{verbFormData.heading}</p>
        <p className="mt-4 mb-2 text-2xl font-extrabold">
          How to create it from the base verb
        </p>
        <p className="whitespace-pre">{verbFormData.howToCreate}</p>
        <p className="mt-2 mb-2 text-2xl font-extrabold">Creation examples</p>
        <ul>
          {verbFormData.creationExamples.map((example) => (
            <li key={example.key}>{example.value}</li>
          ))}
        </ul>
        <p className="mt-2 mb-2 text-2xl font-extrabold">Where it is used</p>
        <ul>
          {verbFormData.uses.map((use, index) => (
            <VerbFormUse
              key={use.key}
              verbFormUseData={use}
              index={index + 1}
            ></VerbFormUse>
          ))}
        </ul>
      </div>
    );
  };

  const verbFormExplanations = [
    <VerbFormExplanation verbFormData={VERB_FORM_EXPLANATIONS.base} />,
    <VerbFormExplanation verbFormData={VERB_FORM_EXPLANATIONS.pastSimple} />,
    <VerbFormExplanation
      verbFormData={VERB_FORM_EXPLANATIONS.pastParticiple}
    />,
    <VerbFormExplanation
      verbFormData={VERB_FORM_EXPLANATIONS.presentParticiple}
    />,
    <VerbFormExplanation
      verbFormData={VERB_FORM_EXPLANATIONS.thirdPersonSingular}
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
        tabs={[
          VERB_FORM_EXPLANATIONS.base.heading,
          VERB_FORM_EXPLANATIONS.pastSimple.heading,
          VERB_FORM_EXPLANATIONS.pastParticiple.heading,
          VERB_FORM_EXPLANATIONS.presentParticiple.heading,
          VERB_FORM_EXPLANATIONS.thirdPersonSingular.heading,
        ]}
        className="mx-auto mb-4 w-3/4 bg-white"
      >
        {verbFormExplanations}
      </CardTabs>
    </div>
  );
}

export default VerbFormExplanations;
