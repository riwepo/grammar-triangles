import VerbSkeleton from "@/components/tenses_blueprint";
import VerbTriangle from "@/components/basic-triangle";
import VERBS from "@/lib/utils/verb-data";
import { nanoid } from "nanoid";

export const metadata = {
  title: "To Be Triangle",
  description: "To Be Triangle",
};

export default function ToBeTrianglePage() {
  return (
    <VerbTriangle
      uid={nanoid()}
      colour="black"
      verbForms={VERBS.eat}
      formVisibility={{
        head: true,
        preterite: true,
        presentParticiple: true,
        pastParticiple: true,
        thirdPersonSingular: true,
      }}
    />
  );
}
