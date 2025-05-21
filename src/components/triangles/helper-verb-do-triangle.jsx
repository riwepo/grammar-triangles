import NormalVerbTriangle from "@/components/triangles/basic/verbs/normal-verb-triangle";

import { cn } from "@/lib/utils/css-class";

import { VERBS } from "@/lib/grammar-data";

function HelperVerbDoTriangle({ uuid, classNames }) {
  const helperVerbDoClassNames = {
    ...classNames,
    triangle: cn(classNames.triangle, "visible stroke-red-500 fill-red-500/10"),
  };

  return (
    <NormalVerbTriangle
      uuid={uuid}
      verb={VERBS.do}
      classNames={helperVerbDoClassNames}
    />
  );
}

export default HelperVerbDoTriangle;
