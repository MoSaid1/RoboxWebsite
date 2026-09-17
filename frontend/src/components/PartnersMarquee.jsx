import "./PartnersMarquee.css";

export default function PartnersMarquee({ partners }) {
  if (!partners?.length) return null;
  const doubled = [...partners, ...partners];

  return (
    <div className="partners-marquee">
      <div className="partners-track">
        {doubled.map((p, i) => (
          <div className="partners-item" key={`${p.name}-${i}`}>
            <img src={p.logo} alt={p.name} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
