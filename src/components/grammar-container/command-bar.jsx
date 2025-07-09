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
        "grid h-auto grid-cols-[1fr_auto_auto_auto_1fr] items-center gap-4 border-t-1 border-black print:hidden",
        className,
      )}
    >
      {sentenceTypeOptions && (
        <SelectDropdown
          title="Sentence Type:"
          options={sentenceTypeOptions}
          onSelect={onSentenceTypeSelect}
          className="col-start-2 py-2"
        />
      )}
      <SelectDropdownVerb
        title="Boss Verbxx:"
        options={verbOptions}
        onSelect={onVerbSelect}
        className="col-start-3 py-2"
      />
      {showPronounsOptions && (
        <SelectDropdown
          title="Show Pronouns:"
          options={showPronounsOptions}
          onSelect={onShowPronounsSelect}
          className="col-start-4 py-2"
        />
      )}
    </div>
  );
}

export default CommandBar;
