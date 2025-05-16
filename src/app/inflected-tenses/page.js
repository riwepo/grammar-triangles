import InflectedTenses from "@/components/inflected-tenses";
import { VERBS } from "@/lib/grammar-data";

export const metadata = {
  title: "Inflected Tenses",
  description: "Inflected Tenses",
};

export default function InflectedTensesPage() {
  return <InflectedTenses bossVerb={VERBS.sing} />;
}
