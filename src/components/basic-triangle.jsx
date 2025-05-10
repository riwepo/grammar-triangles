import { cn } from "@/lib/utils/css-class";

function BasicTriangle({ uuid, colour, verbForms, formVisibility, className }) {
  return (
    <svg
      className={cn(className)}
      width="100%"
      height="100%"
      viewBox="-70 -75 150 150"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <polygon
          id={`${uuid}triangle`}
          points="-50,43 0,-43 50,43"
          fill="none"
          stroke={colour}
        />
        <g id={`${uuid}head`}>
          <circle cx="0" cy="-33" r="4" stroke="black" fill="black" />
          <text
            x="0"
            y="-33"
            stroke="white"
            fontSize="6px"
            strokeWidth="0.5px"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            1
          </text>
          <text
            x="0"
            y="-45"
            fill="black"
            stroke="black"
            strokeWidth="0.5"
            fontSize="10px"
            textAnchor="middle"
          >
            {verbForms.head}
          </text>
        </g>
        <g id={`${uuid}preterite`}>
          <circle cx="-40" cy="37" r="4" stroke="black" fill="black" />
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
            x="-40"
            y="52"
            fill="black"
            stroke="black"
            strokeWidth="0.5"
            fontSize="10px"
            textAnchor="middle"
          >
            {verbForms.preterite}
          </text>
        </g>
        <g id={`${uuid}past-participle`}>
          <circle cx="40" cy="37" r="4" stroke="black" fill="black" />
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
            x="40"
            y="52"
            fill="black"
            stroke="black"
            strokeWidth="0.5"
            fontSize="10px"
            textAnchor="middle"
          >
            {verbForms.pastParticiple}
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
            x="0"
            y="12"
            fill="black"
            stroke="black"
            strokeWidth="0.5"
            fontSize="10px"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {verbForms.presentParticiple}
          </text>
        </g>
        <g id={`${uuid}third-person-singular`}>
          <circle cx="16" cy="-28" r="4" stroke="black" fill="black" />
          <text
            x="16"
            y="-28"
            stroke="white"
            fontSize="6px"
            strokeWidth="0.5px"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            5
          </text>
          <text
            x="21"
            y="-28"
            fill="black"
            stroke="black"
            strokeWidth="0.5"
            fontSize="10px"
            textAnchor="start"
            dominantBaseline="middle"
          >
            {verbForms.thirdPersonSingular}
          </text>
        </g>
        <line
          id={`${uuid}tense-line`}
          x1="-100"
          y1="0"
          x2="25"
          y2="0"
          stroke="red"
          strokeWidth="1"
        ></line>
      </defs>
      <use href={`#${uuid}triangle`} x="0" y="0" />
      {formVisibility.head && <use href={`#${uuid}head`} x="0" y="0" />}
      {formVisibility.preterite && (
        <use href={`#${uuid}preterite`} x="0" y="0" />
      )}
      {formVisibility.pastParticiple && (
        <use href={`#${uuid}past-participle`} x="0" y="0" />
      )}
      {formVisibility.presentParticiple && (
        <use href={`#${uuid}present-participle`} x="0" y="0" />
      )}
      {formVisibility.thirdPersonSingular && (
        <use href={`#${uuid}third-person-singular`} x="0" y="0" />
      )}
      {formVisibility.tenseLine && (
        <use href={`#${uuid}tense-line`} x="0" y="0" />
      )}
    </svg>
  );
}

export default BasicTriangle;
