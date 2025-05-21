import NormalVerbTriangle from "@/components/triangles/basic/verbs/normal-verb-triangle";

import { cn } from "@/lib/utils/css-class";

import { VERBS } from "@/lib/grammar-data";

function HelperVerbHaveTriangle({ uuid, classNames }) {
  const helperVerbHaveClassNames = {
    ...classNames,
    triangle: cn(
      classNames.triangle,
      "visible stroke-green-500 fill-green-500/10",
    ),
  };

  return (
    <NormalVerbTriangle
      uuid={uuid}
      verb={VERBS.have}
      classNames={helperVerbHaveClassNames}
    />
  );
}

export default HelperVerbHaveTriangle;
