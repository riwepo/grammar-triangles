import { cn } from "@/lib/utils/css-class";

import { BASIC_TRIANGLE_VIEWBOX } from "@/lib/constants";

export const DEFAULT_CLASS_NAMES = {
  svg: "",
  head: "invisible",
  preterite: "invisible",
  pastParticiple: "invisible",
  presentParticiple: "invisible",
  thirdPersonSingular: "invisible",
  numbers: "invisible",
  tenseLine: "invisible",
};

function NormalVerbTriangle({
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
            {verb.head}
          </text>
        </g>
        <g id={`${uuid}preterite`}>
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
        <g id={`${uuid}past-participle`}>
          <circle cx="40" cy="37" r="4" stroke="black" fill="black" />
          <text
            x="40"
            y="52"
            fill="black"
            stroke="black"
            strokeWidth="0.5"
            fontSize="10px"
            textAnchor="middle"
          >
            {verb.pastParticiple}
          </text>
        </g>
        <g id={`${uuid}present-participle`}>
          <path
            transform="scale(0.12, 0.12)"
            d="M0,-30
          C 35,-60 90,-20 0,50
          C -90,-20 -35,-60 0,-30"
            fill="red"
            stroke="red"
            strokeWidth="2"
          />
          <text
            x="0"
            y="12"
            fill="black"
            stroke="black"
            strokeWidth="0.5"
            fontSize="10px"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {verb.presentParticiple}
          </text>
        </g>
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
        <g id={`${uuid}numbers`}>
          <text
            x="0"
            y="-32"
            stroke="white"
            fontSize="6px"
            strokeWidth="0.5px"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            1
          </text>
          <text
            x="-40"
            y="37"
            stroke="white"
            fontSize="6px"
            strokeWidth="0.5px"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            2
          </text>
          <text
            x="40"
            y="37"
            stroke="white"
            fontSize="6px"
            strokeWidth="0.5px"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            3
          </text>
          <text
            x="0"
            y="1"
            stroke="white"
            fontSize="6px"
            strokeWidth="0.5px"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            4
          </text>
          <text
            x="18"
            y="-26"
            stroke="white"
            fontSize="6px"
            strokeWidth="0.5px"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            5
          </text>
        </g>
        <line
          id={`${uuid}tense-line`}
          x1="-100"
          y1="0"
          x2="25"
          y2="0"
          stroke="red"
          strokeWidth="2"
        ></line>
      </defs>
      <use
        href={`#${uuid}triangle`}
        x="0"
        y="0"
        className={classNames.triangle}
      />
      <use href={`#${uuid}head`} x="0" y="0" className={classNames.head} />
      <use
        href={`#${uuid}preterite`}
        x="0"
        y="0"
        className={classNames.preterite}
      />
      <use
        href={`#${uuid}past-participle`}
        x="0"
        y="0"
        className={classNames.pastParticiple}
      />
      <use
        href={`#${uuid}present-participle`}
        x="0"
        y="0"
        className={classNames.presentParticiple}
      />
      <use
        href={`#${uuid}third-person-singular`}
        x="0"
        y="0"
        className={classNames.thirdPersonSingular}
      />
      <use
        href={`#${uuid}numbers`}
        x="0"
        y="0"
        className={classNames.numbers}
      />
      <use
        href={`#${uuid}tense-line`}
        x="0"
        y="0"
        className={classNames.tenseLine}
      />
    </svg>
  );
}

export default NormalVerbTriangle;
