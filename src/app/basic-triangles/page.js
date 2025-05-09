import BasicTriangles from "@/components/basic-triangles/basic-triangles";
import { VERBS } from "@/lib/utils/words";
import { nanoid } from "nanoid";

export const metadata = {
  title: "Basic Triangle",
  description: "Basic Triangle",
};

export default function BasicTrianglesPage() {
  return (
    <div className="h-screen w-full overflow-hidden border-2 border-black">
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
    </div>
  );
}
