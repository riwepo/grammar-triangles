import { nanoid } from "nanoid";

import ToBeTriangle from "@/components/to-be-triangle";

export const metadata = {
  title: "To Be Triangle",
  description: "To Be Triangle",
};

export default function ToBeTrianglePage() {
  return (
    <div className="h-screen w-full overflow-hidden border-2 border-black">
      <ToBeTriangle
        uid={nanoid()}
        colour="black"
        visibility={{
          head: true,
          am: true,
          are: true,
          is: true,
          preterite: true,
          was: true,
          were: true,
          presentParticiple: true,
          pastParticiple: true,
          thirdPersonSingular: true,
        }}
      />{" "}
    </div>
  );
}
