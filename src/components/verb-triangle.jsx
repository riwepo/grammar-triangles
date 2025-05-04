import { cn } from "@/lib/utils/css-class";

function VerbTriangle({ colour, verbForms, className }) {
  return (
    <div className={cn(className, "bg-amber-100")}>
      <svg
        width="100%"
        height="100%"
        viewBox="-50 -75 150 150"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <polygon
            id="triangle"
            points="-50,43 0,-43 50,43"
            fill="none"
            stroke={colour}
          />
          <g id="head">
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
          <g id="preterite">
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
          <g id="past-participle">
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
          <g id="present-participle">
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
        <use href="#triangle" x="0" y="0" />
        <use href="#head" x="0" y="0" />
        <use href="#preterite" x="0" y="0" />
        <use href="#past-participle" x="0" y="0" />
        <use href="#present-participle" x="0" y="0" />
        <use href="#heart" transform="scale(0.1, 0.1)" x="0" y="0" />
      </svg>
    </div>
  );
}

export default VerbTriangle;
