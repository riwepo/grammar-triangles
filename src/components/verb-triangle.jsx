import { cn } from "@/lib/utils/css-class";

function VerbTriangle({ uuid, colour, verbForms, verbVisibility, className }) {
  return (
    <div className={cn(className)}>
      <svg
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
              {verbForms.head}
            </text>
          </g>
          <g id={`${uuid}preterite`}>
            <circle cx="-40" cy="37" r="2" stroke="black" fill="black" />
            <text
              x="-50"
              y="37"
              fill="black"
              stroke="black"
              strokeWidth="0.5"
              fontSize="10px"
              textAnchor="end"
              dominantBaseline="middle"
            >
              {verbForms.preterite}
            </text>
          </g>
          <g id={`${uuid}past-participle`}>
            <circle cx="40" cy="37" r="2" stroke="black" fill="black" />
            <text
              x="50"
              y="37"
              fill="black"
              stroke="black"
              strokeWidth="0.5"
              fontSize="10px"
              textAnchor="start"
              dominantBaseline="middle"
            >
              {verbForms.pastParticiple}
            </text>
          </g>
          <g id={`${uuid}present-participle`}>
            <path
              transform="scale(0.1, 0.1)"
              d="M0,-30
          C 35,-60 90,-20 0,80
          C -90,-20 -35,-60 0,-30"
              fill="red"
              stroke="black"
              strokeWidth="2"
            />
            <text
              x="0"
              y="15"
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
        </defs>
        <use href={`#${uuid}triangle`} x="0" y="0" />
        {verbVisibility.head && <use href={`#${uuid}head`} x="0" y="0" />}
        {verbVisibility.preterite && (
          <use href={`#${uuid}preterite`} x="0" y="0" />
        )}
        {verbVisibility.pastParticiple && (
          <use href={`#${uuid}past-participle`} x="0" y="0" />
        )}
        {verbVisibility.presentParticiple && (
          <use href={`#${uuid}present-participle`} x="0" y="0" />
        )}
      </svg>
    </div>
  );
}

export default VerbTriangle;
