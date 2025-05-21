import ToBeVerbTriangle from "@/components/basic-triangles/verbs/to-be-verb-triangle";

import { cn } from "@/lib/utils/css-class";

import { VERBS } from "@/lib/grammar-data";

function HelperVerbBeTriangle({ uuid, classNames }) {
  const helperVerbBeClassNames = {
    ...classNames,
    triangle: cn(
      classNames.triangle,
      "visible stroke-blue-500 fill-blue-500/10",
    ),
  };

  return (
    <ToBeVerbTriangle
      uuid={uuid}
      verb={VERBS.be}
      classNames={helperVerbBeClassNames}
    />
  );
}

export default HelperVerbBeTriangle;
