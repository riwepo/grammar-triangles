import VerbSkeleton from "@/components/tenses_blueprint";
import VerbTriangle from "@/components/basic-triangle";
import VERBS from "@/lib/utils/verb-data";
import { nanoid } from "nanoid";

export const metadata = {
  title: "Basic Triangle",
  description: "Basic Triangle",
};

export default function BasicTrianglePage() {
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
