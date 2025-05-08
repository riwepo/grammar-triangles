import { cn } from "@/lib/utils/css-class";

import { VERBS } from "@/lib/utils/words";

function ToBeTriangle({ uuid, colour, formVisibility, className }) {
  const toBeVerb = VERBS.be;
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="-70 -75 150 150"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <defs>
        <polygon
          id={`${uuid}triangle`}
          points="-50,43 0,-43 50,43"
          fill="none"
          stroke={colour}
        />
        <g id={`${uuid}head`}>
          <circle cx="0" cy="-33" r="2" stroke="black" fill="black" />
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
          <circle cx="10" cy="-33" r="2" stroke="black" fill="black" />
          <text
            x="15"
            y="-33"
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
        <g id={`${uuid}are`}>
          <circle cx="16" cy="-24" r="2" stroke="black" fill="black" />
          <text
            x="21"
            y="-24"
            fill="black"
            stroke="black"
            strokeWidth="0.5"
            fontSize="10px"
            textAnchor="start"
            dominantBaseline="middle"
          >
            are
          </text>
        </g>
        <g id={`${uuid}is`}>
          <circle cx="22" cy="-15" r="2" stroke="black" fill="black" />
          <text
            x="27"
            y="-15"
            fill="black"
            stroke="black"
            strokeWidth="0.5"
            fontSize="10px"
            textAnchor="start"
            dominantBaseline="middle"
          >
            is
          </text>
        </g>
        <g id={`${uuid}preterite`}>
          <circle cx="-40" cy="37" r="2" stroke="black" fill="black" />
          <text
            x="-40"
            y="52"
            fill="black"
            stroke="black"
            strokeWidth="0.5"
            fontSize="10px"
            textAnchor="middle"
          >
            was
          </text>
        </g>
        <g id={`${uuid}was`}>
          <circle cx="-46" cy="28" r="2" stroke="black" fill="black" />
          <text
            x="-50"
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
        <g id={`${uuid}were`}>
          <circle cx="-52" cy="37" r="2" stroke="black" fill="black" />
          <text
            x="-56"
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
        <g id={`${uuid}past-participle`}>
          <circle cx="40" cy="37" r="2" stroke="black" fill="black" />
          <text
            x="40"
            y="52"
            fill="black"
            stroke="black"
            strokeWidth="0.5"
            fontSize="10px"
            textAnchor="middle"
          >
            been
          </text>
        </g>
        <g id={`${uuid}present-participle`}>
          <path
            transform="scale(0.1, 0.1)"
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
            {toBeVerb.presentParticiple}
          </text>
        </g>
      </defs>
      <use href={`#${uuid}triangle`} x="0" y="0" />
      {formVisibility.head && <use href={`#${uuid}head`} x="0" y="0" />}
      {formVisibility.am && <use href={`#${uuid}am`} x="0" y="0" />}
      {formVisibility.are && <use href={`#${uuid}are`} x="0" y="0" />}
      {formVisibility.is && <use href={`#${uuid}is`} x="0" y="0" />}
      {formVisibility.preterite && (
        <use href={`#${uuid}preterite`} x="0" y="0" />
      )}
      {formVisibility.was && <use href={`#${uuid}was`} x="0" y="0" />}
      {formVisibility.were && <use href={`#${uuid}were`} x="0" y="0" />}
      {formVisibility.pastParticiple && (
        <use href={`#${uuid}past-participle`} x="0" y="0" />
      )}
      {formVisibility.presentParticiple && (
        <use href={`#${uuid}present-participle`} x="0" y="0" />
      )}
    </svg>
  );
}

export default ToBeTriangle;
