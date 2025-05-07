import ToBeTriangle from "@/components/to-be-triangle";

export const metadata = {
  title: "To Be Triangle",
  description: "To Be Triangle",
};

export default function ToBeTrianglePage() {
  return (
    <ToBeTriangle
      uid={nanoid()}
      colour="black"
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
