import VerbSkeleton from "@/components/verb-skeleton";
import VERBS from "@/lib/utils/verb-data";

export default function Home() {
  return <VerbSkeleton bossVerb={VERBS.eat} />;
}
