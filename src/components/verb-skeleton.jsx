import VerbTriangle from "@/components/verb-triangle";

function VerbSkeleton({ bossVerb }) {
  return (
    <div className="grid grid-cols-3 grid-rows-3 w-full h-full max-h-full border border-black overflow-hidden">
      <VerbTriangle
        className="col-start-3 row-start-1"
        verbForms={bossVerb}
        colour="black"
      />
      <VerbTriangle
        className="col-start-3 row-start-2"
        verbForms={bossVerb}
        colour="black"
      />
      <VerbTriangle
        className="col-start-3 row-start-3"
        verbForms={bossVerb}
        colour="black"
      />
    </div>
  );
}

export default VerbSkeleton;
