// Decorative animated ring graphic used in the hero (design "variant A" sunburst).
function buildRays() {
  const c = 140;
  const n = 40;
  const out = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const ri = 64;
    const ro = i % 2 ? 86 : 104;
    out.push({
      x1: c + ri * Math.cos(a),
      y1: c + ri * Math.sin(a),
      x2: c + ro * Math.cos(a),
      y2: c + ro * Math.sin(a),
    });
  }
  return out;
}

const rays = buildRays();

export default function SunRing() {
  return (
    <div className="relative w-[190px] md:w-[320px] max-w-full aspect-square mx-auto">
      <div
        className="absolute -inset-[12%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(74,140,255,.13), transparent 68%)",
        }}
      />
      <svg
        viewBox="0 0 280 280"
        width="100%"
        height="100%"
        fill="none"
        className="relative block overflow-visible"
      >
        <g
          style={{
            transformOrigin: "140px 140px",
            animation: "pf-spin 200s linear infinite",
          }}
        >
          <circle cx="140" cy="140" r="56" stroke="#4a8cff" strokeWidth="1.3" opacity=".85" />
          <circle cx="140" cy="140" r="44" stroke="#4a8cff" strokeWidth="1" opacity=".4" />
          {rays.map((ray, i) => (
            <line
              key={i}
              x1={ray.x1}
              y1={ray.y1}
              x2={ray.x2}
              y2={ray.y2}
              stroke="#4a8cff"
              strokeWidth="1.4"
              strokeLinecap="round"
              opacity=".7"
            />
          ))}
        </g>
        <circle cx="140" cy="140" r="8.5" fill="#4a8cff" />
      </svg>
    </div>
  );
}
