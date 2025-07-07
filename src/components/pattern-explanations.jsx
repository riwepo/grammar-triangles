import PageContent from "@/components/page-content";

import {
  PAGE_EXPLANATIONS,  
} from "@/lib/explanation-data";

function PatternExplanations() {     
  return (
    <div className="text-center">
      <PageContent sentences={PAGE_EXPLANATIONS.pattern} />      
    </div>
  );
}

export default PatternExplanations;
