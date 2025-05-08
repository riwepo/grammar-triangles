import TensesBlueprint from "@/components/tenses-blueprint";
import { VERBS } from "@/lib/utils/words";

export const metadata = {
  title: "Tenses Blueprint",
  description: "Tenses Blueprint",
};

export default function TensesBlueprintPage() {
  return <TensesBlueprint bossVerb={VERBS.choose} />;
}
