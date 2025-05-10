import InflectedTensesNot from "@/components/inflected-tenses-not";
import { VERBS } from "@/lib/utils/words";

export const metadata = {
  title: "Inflected Tenses Not",
  description: "Inflected Tenses Not",
};

export default function InflectedTensesNotPage() {
  return <InflectedTensesNot bossVerb={VERBS.sing} />;
}
