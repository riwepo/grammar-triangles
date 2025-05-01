function Triangle() {
  return (
    <div>
      <svg
        width="1000"
        height="1000"
        viewBox="-100 -100 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <polygon
            id="triangle"
            points="-50,43 0,-43 50,43"
            fill="none"
            stroke="black"
          />
          <circle
            id="bottom-left-mark"
            cx="-40"
            cy="37"
            r="2"
            stroke="black"
            fill="black"
          />
          <circle
            id="top-mark"
            cx="0"
            cy="-33"
            r="2"
            stroke="black"
            fill="black"
          />
          <circle
            id="bottom-right-mark"
            cx="40"
            cy="37"
            r="2"
            stroke="black"
            fill="black"
          />
          <circle
            id="center-mark"
            cx="0"
            cy="0"
            r="2"
            stroke="black"
            fill="black"
          />
        </defs>
        <use href="#triangle" x="0" y="0" />
        <use href="#bottom-left-mark" x="0" y="0" />
        <use href="#top-mark" x="0" y="0" />
        <use href="#bottom-right-mark" x="0" y="0" />
        <use href="#center-mark" x="0" y="0" />
      </svg>
    </div>
  );
}

export default Triangle;
