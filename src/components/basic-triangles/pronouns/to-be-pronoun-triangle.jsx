import { cn } from "@/lib/utils/css-class";

import { BASIC_TRIANGLE_VIEWBOX } from "@/lib/constants";
export const DEFAULT_CLASS_NAMES = {
  svg: "",
  am: "invisible",
  amPronouns: "invisible",
  are: "invisible",
  arePronouns: "invisible",
  is: "invisible",
  isPronouns: "invisible",
  was: "invisible",
  wasPronouns: "invisible",
  were: "invisible",
  werePronouns: "invisible",
};

function ToBePronounTriangle({
  uuid,
  colour,
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
      className={cn(classNames.svg)}
    >
      <defs>
        <polygon
          id={`${uuid}triangle`}
          points="-50,43 0,-43 50,43"
          fill="none"
          stroke={colour}
          strokeWidth="2"
        />
        <g id={`${uuid}head`}>
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
            be
          </text>
        </g>
        <g id={`${uuid}am`}>
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
            am
          </text>
        </g>
        <text
          id={`${uuid}am-pronouns`}
          x="-18"
          y="-26"
          fill="red"
          stroke="red"
          strokeWidth="0.5"
          fontSize="10px"
          textAnchor="end"
          dominantBaseline="middle"
        >
          I
        </text>
        <g id={`${uuid}are`}>
          <circle cx="24" cy="-16" r="4" stroke="black" fill="black" />
          <text
            x="30"
            y="-16"
            fill="black"
            stroke="black"
            strokeWidth="0.5"
            fontSize="10px"
            textAnchor="start"
            dominantBaseline="middle"
          >
            are
          </text>
        </g>{" "}
        <text
          id={`${uuid}are-pronouns`}
          x="-20"
          y="-16"
          fill="red"
          stroke="red"
          strokeWidth="0.5"
          fontSize="10px"
          textAnchor="end"
          dominantBaseline="middle"
        >
          you, we, they
        </text>
        <g id={`${uuid}is`}>
          <circle cx="30" cy="-6" r="4" stroke="black" fill="black" />
          <text
            x="36"
            y="-6"
            fill="black"
            stroke="black"
            strokeWidth="0.5"
            fontSize="10px"
            textAnchor="start"
            dominantBaseline="middle"
          >
            is
          </text>
        </g>{" "}
        <text
          id={`${uuid}is-pronouns`}
          x="-26"
          y="-6"
          fill="red"
          stroke="red"
          strokeWidth="0.5"
          fontSize="10px"
          textAnchor="end"
          dominantBaseline="middle"
        >
          he, she, it
        </text>
        <g id={`${uuid}was`}>
          <circle cx="-48" cy="28" r="4" stroke="black" fill="black" />
          <text
            x="-54"
            y="28"
            fill="black"
            stroke="black"
            strokeWidth="0.5"
            fontSize="10px"
            textAnchor="end"
            dominantBaseline="middle"
          >
            was
          </text>
        </g>
        <text
          id={`${uuid}was-pronouns`}
          x="-78"
          y="28"
          fill="red"
          stroke="red"
          strokeWidth="0.5"
          fontSize="10px"
          textAnchor="end"
          dominantBaseline="middle"
        >
          I, he, she, it
        </text>
        <g id={`${uuid}were`}>
          <circle cx="-54" cy="37" r="4" stroke="black" fill="black" />
          <text
            x="-60"
            y="37"
            fill="black"
            stroke="black"
            strokeWidth="0.5"
            fontSize="10px"
            textAnchor="end"
            dominantBaseline="middle"
          >
            were
          </text>
        </g>
        <text
          id={`${uuid}were-pronouns`}
          x="-84"
          y="37"
          fill="red"
          stroke="red"
          strokeWidth="0.5"
          fontSize="10px"
          textAnchor="end"
          dominantBaseline="middle"
        >
          we, you, they
        </text>
      </defs>
      <use
        href={`#${uuid}triangle`}
        x="0"
        y="0"
        className={classNames.triangle}
      />
      <use href={`#${uuid}am`} x="0" y="0" className={classNames.amPronouns} />
      <use
        href={`#${uuid}am-pronouns`}
        x="0"
        y="0"
        className={classNames.amPronouns}
      />
      <use href={`#${uuid}are`} x="0" y="0" className={classNames.are} />
      <use
        href={`#${uuid}are-pronouns`}
        x="0"
        y="0"
        className={classNames.arePronouns}
      />
      <use href={`#${uuid}is`} x="0" y="0" className={classNames.is} />
      <use
        href={`#${uuid}is-pronouns`}
        x="0"
        y="0"
        className={classNames.isPronouns}
      />
      <use href={`#${uuid}was`} x="0" y="0" className={classNames.was} />
      <use
        href={`#${uuid}was-pronouns`}
        x="0"
        y="0"
        className={classNames.wasPronouns}
      />
      <use href={`#${uuid}were`} x="0" y="0" className={classNames.were} />
      <use
        href={`#${uuid}were-pronouns`}
        x="0"
        y="0"
        className={classNames.werePronouns}
      />
    </svg>
  );
}

export default ToBePronounTriangle;
