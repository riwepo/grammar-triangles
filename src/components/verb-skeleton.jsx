import VerbTriangle from "@/components/verb-triangle";

function VerbSkeleton({ bossVerb }) {
  return (
    <div className="grid grid-cols-3 grid-rows-3 h-screen w-full border-2 border-black overflow-hidden">
      <VerbTriangle
        className="col-start-3 row-start-1 border border-black "
        verbForms={bossVerb}
        colour="black"
      />
      <VerbTriangle
        className="col-start-3 row-start-2 border border-black "
        verbForms={bossVerb}
        colour="black"
      />
      <VerbTriangle
        className="col-start-3 row-start-3 border border-black "
        verbForms={bossVerb}
        colour="black"
      />

      <div className="border border-black col-start-2 row-start-1">12</div>

      <div className="border border-black col-start-1 row-start-2">21</div>
      <div className="border border-black col-start-2 row-start-2">22</div>

      <div className="border border-black col-start-1 row-start-3">31</div>
      <div className="border border-black col-start-2 row-start-3">32</div>
    </div>
  );
}

export default VerbSkeleton;
