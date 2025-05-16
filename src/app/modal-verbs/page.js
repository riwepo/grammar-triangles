import ModalVerbs from "@/components/modal-verbs";
import { VERBS } from "@/lib/grammar-data";

export const metadata = {
  title: "Modal Verbs",
  description: "Modal Verbs",
};

export default function ModalVerbsPage() {
  return <ModalVerbs bossVerb={VERBS.choose} />;
}
