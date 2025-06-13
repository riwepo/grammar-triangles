function PageContent({ sentences }) {
  return (
    <ul className="py-4 text-center">
      {sentences.map((sentence) => {
        return (
          <li key={sentence.key}>
            <p className="pt-4 text-xl">{sentence.content}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default PageContent;
