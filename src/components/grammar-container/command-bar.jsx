import SelectDropdownVerb from "@/components/grammar-container/select-dropdown-verb";
import SelectDropdown from "@/components/ui/select-dropdown";

import { cn } from "@/lib/utils/css-class";

function CommandBar({
  sentenceTypeOptions,
  verbOptions,
  showPronounsOptions,
  onSentenceTypeSelect,
  onVerbSelect,
  onShowPronounsSelect,
  className,
}) {
  return (
    <div
      className={cn(
        "flex h-auto flex-wrap items-center justify-center gap-4 border-t-1 border-black print:hidden",
        className,
      )}
    >
      {sentenceTypeOptions && (
        <SelectDropdown
          title="Sentence Type:"
          options={sentenceTypeOptions}
          onSelect={onSentenceTypeSelect}
          className="py-2"
        />
      )}
      <SelectDropdownVerb
        title="Boss Verb:"
        options={verbOptions}
        onSelect={onVerbSelect}
        className="py-2"
      />
      {showPronounsOptions && (
        <SelectDropdown
          title="Show Pronouns:"
          options={showPronounsOptions}
          onSelect={onShowPronounsSelect}
          className="py-2"
        />
      )}
    </div>
  );
}

export default CommandBar;
