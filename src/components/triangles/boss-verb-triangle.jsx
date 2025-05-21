import NormalVerbTriangle from "../basic-triangles/verbs/normal-verb-triangle";

import { cn } from "@/lib/utils/css-class";

function BossVerbTriangle({ uuid, verb, classNames }) {
  const bossVerbClassNames = {
    ...classNames,
    triangle: cn(classNames.triangle, "visible stroke-black fill-none"),
  };

  return (
    <NormalVerbTriangle
      uuid={uuid}
      verb={verb}
      classNames={bossVerbClassNames}
    />
  );
}

export default BossVerbTriangle;
