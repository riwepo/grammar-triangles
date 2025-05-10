import { cn } from "@/lib/utils/css-class";

import { VERBS } from "@/lib/utils/words";

function ToBeTriangle({ uuid, colour, formVisibility, className }) {
  const toBeVerb = VERBS.be;
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="-72 -75 150 150"
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
            be
          </text>
        </g>
        <g id={`${uuid}am`}>
          <circle cx="16" cy="-28" r="4" stroke="black" fill="black" />
          <text
            x="22"
            y="-28"
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
          <circle cx="22" cy="-19" r="4" stroke="black" fill="black" />
          <text
            x="28"
            y="-19"
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
          <circle cx="28" cy="-10" r="4" stroke="black" fill="black" />
          <text
            x="34"
            y="-10"
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
            been
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
            {toBeVerb.presentParticiple}
          </text>
        </g>
      </defs>
      <use href={`#${uuid}triangle`} x="0" y="0" />
      {formVisibility.head && <use href={`#${uuid}head`} x="0" y="0" />}
      {formVisibility.am && <use href={`#${uuid}am`} x="0" y="0" />}
      {formVisibility.are && <use href={`#${uuid}are`} x="0" y="0" />}
      {formVisibility.is && <use href={`#${uuid}is`} x="0" y="0" />}
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
