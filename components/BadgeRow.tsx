export default function BadgeRow({ items }: { items: string[] }) {
  return (
    <div className="tags">
      {items.map((t) => (
        <span className="tag" key={t}>
          {t}
        </span>
      ))}
    </div>
  );
}
