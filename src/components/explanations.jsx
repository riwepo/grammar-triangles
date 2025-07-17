function Explanations({ sentences }) {
  return (
    <div className="mb-2 text-center print:hidden">
      <ul className="py-4 text-center">
        {sentences.map((sentence) => {
          return (
            <li key={sentence.key}>
              <p className="pt-4 text-xl">{sentence.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Explanations;
