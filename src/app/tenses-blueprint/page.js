import VerbSkeleton from "@/components/tenses_blueprint";
import VerbTriangle from "@/components/basic-triangle";
import VERBS from "@/lib/utils/verb-data";
import { nanoid } from "nanoid";

export const metadata = {
  title: "Tenses Blueprint",
  description: "Tenses Blueprint",
};

export default function TensesBlueprintPage() {
  return <VerbSkeleton bossVerb={VERBS.choose} />;
}
