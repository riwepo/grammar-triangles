import BasicTriangle from "@/components/basic-triangle";
import { VERBS } from "@/lib/utils/words";
import { nanoid } from "nanoid";

export const metadata = {
  title: "Basic Triangle",
  description: "Basic Triangle",
};

export default function BasicTrianglePage() {
  return (
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
      }}
    />
  );
}
