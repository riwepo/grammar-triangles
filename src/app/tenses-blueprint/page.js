import TensesBlueprint from "@/components/tenses-blueprint";
import { VERBS } from "@/lib/utils/grammar-data";

export const metadata = {
  title: "Tenses Blueprint",
  description: "Tenses Blueprint",
};

export default function TensesBlueprintPage() {
  return <TensesBlueprint bossVerb={VERBS.sing} />;
}
