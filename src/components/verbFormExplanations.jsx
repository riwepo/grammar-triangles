import CardTabs from "@/components/ui/card-tabs";

import { VERB_FORM_EXPLANATIONS } from "@/lib/grammar-data";

function VerbFormExplanations2() {
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
  const verbExplanations = [
    <VerbExplanation verbData={VERB_FORM_EXPLANATIONS.base} />,
    <VerbExplanation verbData={VERB_FORM_EXPLANATIONS.pastSimple} />,
    <VerbExplanation verbData={VERB_FORM_EXPLANATIONS.pastParticiple} />,
    <VerbExplanation verbData={VERB_FORM_EXPLANATIONS.presentParticiple} />,
    <VerbExplanation verbData={VERB_FORM_EXPLANATIONS.thirdPersonSingular} />,
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
        className="mx-auto h-full w-3/4 bg-white"
      >
        {verbExplanations}
      </CardTabs>
    </div>
  );
}

export default VerbFormExplanations2;
