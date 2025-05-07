import VerbSkeleton from "@/components/tenses_blueprint";
import VerbTriangle from "@/components/basic-triangle";
import VERBS from "@/lib/utils/verb-data";
import { nanoid } from "nanoid";

export default function Home() {
  return <VerbSkeleton bossVerb={VERBS.speak} />;
  /* return (
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
  ); */
}
