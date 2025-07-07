import PageContent from "@/components/page-content";

import { PAGE_EXPLANATIONS } from "@/lib/explanation-data";

function ModalExplanations() {
  return (
    <div className="text-center print:hidden">
      <PageContent sentences={PAGE_EXPLANATIONS.modals} />
    </div>
  );
}

export default ModalExplanations;
