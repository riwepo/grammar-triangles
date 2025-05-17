import { cn } from "@/lib/utils/css-class";

import { BASIC_TRIANGLE_VIEWBOX } from "@/lib/constants";
export const DEFAULT_CLASS_NAMES = {
  svg: "",
  head: "invisible",
  headPronouns: "invisible",
  preterite: "invisible",
  preteritePronouns: "invisible",
  thirdPersonSingular: "invisible",
  thirdPersonSingularPronouns: "invisible",
};

function NormalPronounTriangle({
  uuid,
  colour,
  verb,
  visibility,
  classNames = DEFAULT_CLASS_NAMES,
}) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox={BASIC_TRIANGLE_VIEWBOX}
      preserveAspectRatio="xMidYMid meet"
      //preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames.svg}
    >
      <defs>
        <polygon
          id={`${uuid}triangle`}
          points="-50,43 0,-43 50,43"
          fill="none"
          stroke={colour}
          strokeWidth="2"
        />
        <g id={`${uuid}head`} className={classNames.head}>
          <circle cx="0" cy="-32" r="4" stroke="black" fill="black" />
          <text
            x="0"
            y="-45"
            fill="black"
            stroke="black"
            strokeWidth="0.5"
            fontSize="10px"
            textAnchor="middle"
          >
            {verb.head}
          </text>
        </g>
        <text
          id={`${uuid}head-pronouns`}
          x="-25"
          y="-45"
          fill="red"
          stroke="red"
          strokeWidth="0.5"
          fontSize="10px"
          textAnchor="end"
          className={classNames.headPronouns}
        >
          I, you, we, they
        </text>

        <g id={`${uuid}preterite`} className={classNames.preterite}>
          <circle cx="-40" cy="37" r="4" stroke="black" fill="black" />
          <text
            x="-40"
            y="52"
            fill="black"
            stroke="black"
            strokeWidth="0.5"
            fontSize="10px"
            textAnchor="middle"
          >
            {verb.preterite}
          </text>
        </g>
        <text
          id={`${uuid}preterite-pronouns`}
          x="-50"
          y="37"
          fill="red"
          stroke="red"
          strokeWidth="0.5"
          fontSize="10px"
          textAnchor="end"
          dominantBaseline="middle"
          className={classNames.preteritePronouns}
        >
          everybody
        </text>

        <g id={`${uuid}third-person-singular`}>
          <circle cx="18" cy="-26" r="4" stroke="black" fill="black" />
          <text
            x="24"
            y="-26"
            fill="black"
            stroke="black"
            strokeWidth="0.5"
            fontSize="10px"
            textAnchor="start"
            dominantBaseline="middle"
          >
            {verb.thirdPersonSingular}
          </text>
        </g>
        <text
          id={`${uuid}third-person-singular-pronouns`}
          x="-15"
          y="-26"
          fill="red"
          stroke="red"
          strokeWidth="0.5"
          fontSize="10px"
          textAnchor="end"
          dominantBaseline="middle"
          className={classNames.thirdPersonSingularPronouns}
        >
          he, she, it
        </text>
      </defs>
      <use href={`#${uuid}triangle`} x="0" y="0" />
      <use href={`#${uuid}head`} x="0" y="0" />
      <use href={`#${uuid}head-pronouns`} x="0" y="0" />
      <use href={`#${uuid}preterite`} x="0" y="0" />
      <use href={`#${uuid}preterite-pronouns`} x="0" y="0" />
      <use href={`#${uuid}third-person-singular`} x="0" y="0" />
      <use href={`#${uuid}third-person-singular-pronouns`} x="0" y="0" />
    </svg>
  );
}

export default NormalPronounTriangle;
