import { nanoid } from "nanoid";
import VerbTriangle from "@/components/verb-triangle";

function VerbSkeleton({ bossVerb }) {
  const helperBe = {
    head: "be",
    preterite: "was",
    pastParticiple: "been",
    presentParticiple: "beeing",
  };
  const helperHave = {
    head: "have",
    preterite: "had",
    pastParticiple: "had",
    presentParticiple: "having",
  };
  return (
    <div className="grid grid-cols-3 grid-rows-4 h-screen w-full border-2 border-black overflow-hidden">
      <VerbTriangle
        uuid={nanoid()}
        className="col-start-3 row-start-1  "
        verbForms={bossVerb}
        colour="black"
      />
      <VerbTriangle
        uuid={nanoid()}
        className="col-start-2 row-start-2  "
        verbForms={helperBe}
        colour="blue"
      />
      <VerbTriangle
        uuid={nanoid()}
        className="col-start-3 row-start-2  "
        verbForms={bossVerb}
        colour="black"
      />
      <VerbTriangle
        uuid={nanoid()}
        className="col-start-1 row-start-3  "
        verbForms={helperHave}
        colour="green"
      />
      <VerbTriangle
        uuid={nanoid()}
        className="col-start-3 row-start-3  "
        verbForms={bossVerb}
        colour="black"
      />{" "}
      <VerbTriangle
        uuid={nanoid()}
        className="col-start-1 row-start-4  "
        verbForms={helperHave}
        colour="green"
      />
      <VerbTriangle
        uuid={nanoid()}
        className="col-start-2 row-start-4  "
        verbForms={helperBe}
        colour="blue"
      />
      <VerbTriangle
        uuid={nanoid()}
        className="col-start-3 row-start-4  "
        verbForms={bossVerb}
        colour="black"
      />
    </div>
  );
}

export default VerbSkeleton;
