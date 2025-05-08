import ModalVerbs from "@/components/modal-verbs";
import { VERBS } from "@/lib/utils/verb-data";

export const metadata = {
  title: "Modal Verbs",
  description: "Modal Verbs",
};

export default function TensesBlueprintPage() {
  return <ModalVerbs bossVerb={VERBS.choose} />;
}
