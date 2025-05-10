import NormalVerbTriangle from "@/components/normal-verb-triangle";
import { VERBS } from "@/lib/utils/words";
import { nanoid } from "nanoid";

export const metadata = {
  title: "Basic Triangle",
  description: "Basic Triangle",
};

export default function BasicTrianglePage() {
  return (
    <div className="h-screen w-full overflow-hidden border-2 border-black">
      <NormalVerbTriangle
        uid={nanoid()}
        colour="black"
        verbForms={VERBS.eat}
        visibility={{
          head: true,
          preterite: true,
          presentParticiple: true,
          pastParticiple: true,
          thirdPersonSingular: true,
          tenseLine: true,
        }}
      />
    </div>
  );
}
