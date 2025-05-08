import ModalVerbs from "@/components/modal-verbs";
import { VERBS } from "@/lib/utils/words";

export const metadata = {
  title: "Modal Verbs",
  description: "Modal Verbs",
};

export default function ModalVerbsPage() {
  return <ModalVerbs bossVerb={VERBS.choose} />;
}
