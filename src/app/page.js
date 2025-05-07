import VerbSkeleton from "@/components/verb-skeleton";
import VerbTriangle from "@/components/verb-triangle";
import VERBS from "@/lib/utils/verb-data";
import { nanoid } from "nanoid";

export default function Home() {
  return <VerbSkeleton bossVerb={VERBS.eat} />;
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
