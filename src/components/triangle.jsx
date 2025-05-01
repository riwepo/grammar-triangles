function Triangle() {
  return (
    <div>
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="50,10 90,90 10,90" fill="none" stroke="black" />
        <line x1="50" y1="10" x2="50" y2="90" stroke="red" stroke-width="2" />
      </svg>
    </div>
  );
}

export default Triangle;
