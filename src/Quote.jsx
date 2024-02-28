export default function Quote(props) {
  return (
    <>
      <div className="border p-4 text-center">
        <p className="">{props.quote.content}</p>
        <p className="font-bold">{props.quote.author}</p>
      </div>
    </>
  );
}
