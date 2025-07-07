import PageContent from "@/components/page-content";

import { PAGE_EXPLANATIONS } from "@/lib/explanation-data";

function TensesExplanations() {
  return (
    <div className="mb-2 text-center print:hidden">
      <PageContent sentences={PAGE_EXPLANATIONS.tenses} />
    </div>
  );
}

export default TensesExplanations;
