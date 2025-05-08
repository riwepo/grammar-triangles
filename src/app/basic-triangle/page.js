import BasicTriangle from "@/components/basic-triangle";
import { VERBS } from "@/lib/utils/words";
import { nanoid } from "nanoid";

export const metadata = {
  title: "Basic Triangle",
  description: "Basic Triangle",
};

export default function BasicTrianglePage() {
  return (
    <div className="h-screen w-full overflow-hidden border-2 border-black">
      <BasicTriangle
        uid={nanoid()}
        colour="black"
        verbForms={VERBS.eat}
        formVisibility={{
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
