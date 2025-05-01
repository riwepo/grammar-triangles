function Triangle() {
  return (
    <div>
      <svg
        width="1000"
        height="1000"
        viewBox="-100 -100 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="-50,43 0,-43 50,43" fill="none" stroke="black" />
        <circle cx="-40" cy="37" r="2" stroke="black" fill="black" />
        <circle cx="0" cy="-33" r="2" stroke="black" fill="black" />
        <circle cx="40" cy="37" r="2" stroke="black" fill="black" />
        <circle cx="0" cy="0" r="2" stroke="black" fill="black" />
      </svg>
    </div>
  );
}

export default Triangle;
