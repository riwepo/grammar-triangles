import VerbSkeleton from "@/components/verb-skeleton";

export default function Home() {
  const bossVerb = {
    head: "eat",
    preterite: "ate",
    pastParticiple: "eaten",
    presentParticiple: "eating",
  };
  return <VerbSkeleton bossVerb={bossVerb} />;
}
