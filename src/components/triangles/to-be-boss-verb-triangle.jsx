import ToBeVerbTriangle from "@/components/basic-triangles/verbs/to-be-verb-triangle";

import { cn } from "@/lib/utils/css-class";

function ToBeBossVerbTriangle({ uuid, verb, classNames }) {
  const toBeBossVerbClassNames = {
    ...classNames,
    triangle: cn(classNames.triangle, "visible stroke-black fill-none"),
  };

  return (
    <ToBeVerbTriangle
      uuid={uuid}
      verb={verb}
      classNames={toBeBossVerbClassNames}
    />
  );
}

export default ToBeBossVerbTriangle;
