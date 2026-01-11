export default function SectionTitle({ title, desc }: { title: string; desc?: string }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <h2>{title}</h2>
      {desc ? <p style={{ marginTop: 10, maxWidth: 760 }}>{desc}</p> : null}
    </div>
  );
}
