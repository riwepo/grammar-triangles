import BasicTriangles from "@/components/basic-triangles";
import { VERBS } from "@/lib/utils/words";
import { nanoid } from "nanoid";

export const metadata = {
  title: "Basic Triangles",
  description: "Basic Triangles",
};

export default function BasicTrianglesPage() {
  return (
    <BasicTriangles
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
  );
}
