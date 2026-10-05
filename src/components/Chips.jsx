// A row of small square badges (stand-ins for tech logos).
export default function Chips({ items }) {
  return (
    <div className="chips">
      {items.map((item) => (
        <div className="chip" key={item} title={item}>{item}</div>
      ))}
    </div>
  );
}
