import Link from "next/link";

export default function Home() {
  return (
    <main style={{ fontFamily: "inherit" }}>
      {/* HERO */}
      <section
        style={{
          padding: "80px 24px",
          background:
            "radial-gradient(800px circle at 20% 10%, rgba(255,120,60,0.18), transparent 55%), radial-gradient(700px circle at 90% 30%, rgba(255,200,120,0.12), transparent 55%), #0b0b0c",
          color: "white",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              gap: 10,
              alignItems: "center",
              padding: "8px 12px",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 999,
              color: "rgba(255,255,255,0.85)",
              fontSize: 13,
            }}
          >
            <span>Buenos Aires</span>
            <span style={{ opacity: 0.5 }}>•</span>
            <span>Eventos privados & corporativos</span>
            <span style={{ opacity: 0.5 }}>•</span>
            <span>Venta al público</span>
          </div>

          <h1
            style={{
              fontSize: 56,
              lineHeight: 1.05,
              marginTop: 18,
              marginBottom: 12,
              letterSpacing: -1,
              fontWeight: 800,
            }}
          >
            La Fragua
          </h1>

          <p
            style={{
              fontSize: 20,
              color: "rgba(255,255,255,0.8)",
              maxWidth: 720,
              marginBottom: 28,
            }}
          >
            Asado tradicional argentino y pizzas estilo napolitano al horno de leña.
            Una experiencia alrededor del fuego, pensada para compartir.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <Link
              href="/asado"
              style={{
                background: "white",
                color: "#111",
                padding: "12px 18px",
                borderRadius: 14,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Ver Asado
            </Link>

            <Link
              href="/pizzas"
              style={{
                background: "rgba(255,255,255,0.08)",
                color: "white",
                padding: "12px 18px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.18)",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Ver Pizzas
            </Link>

            <Link
              href="/productos"
              style={{
                background: "rgba(255,255,255,0.08)",
                color: "white",
                padding: "12px 18px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.18)",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Tienda
            </Link>

            <a
              href="https://wa.me/541130835097?text=Hola%20La%20Fragua!%20Quiero%20cotizar%20un%20evento."
              target="_blank"
              rel="noreferrer"
              style={{
                background: "transparent",
                color: "rgba(255,255,255,0.9)",
                padding: "12px 18px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.22)",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Consultar por WhatsApp
            </a>
          </div>

          {/* quick stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 12,
              marginTop: 34,
              maxWidth: 760,
            }}
          >
            {[
              { k: "Fuego", v: "Asado tradicional" },
              { k: "Horno", v: "Napolitana de leña" },
              { k: "Productos", v: "Tienda brandeada" },
            ].map((s) => (
              <div
                key={s.k}
                style={{
                  padding: 16,
                  borderRadius: 18,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div style={{ fontSize: 12, opacity: 0.7 }}>{s.k}</div>
                <div style={{ fontSize: 16, fontWeight: 700, marginTop: 4 }}>
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <section style={{ padding: "56px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 10 }}>
            Elegí tu experiencia
          </h2>
          <p style={{ color: "#555", maxWidth: 780, marginBottom: 22 }}>
            Menús pensados para eventos. Podés combinar asado + pizzas o armarlo a medida.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 16,
            }}
          >
            <Card
              title="Asado"
              desc="Menús La Fragua, Tradición y Tango. Fuego real, cortes premium."
              href="/asado"
              cta="Ver menús"
            />
            <Card
              title="Pizzas"
              desc="Masa, fermentación y horno de leña. Carta napolitana."
              href="/pizzas"
              cta="Ver carta"
            />
            <Card
              title="Tienda"
              desc="Productos gastronómicos brandeados: delantales, cuchillos, tablas y más."
              href="/productos"
              cta="Ver productos"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "28px 24px", background: "#0b0b0c", color: "rgba(255,255,255,0.75)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div>© {new Date().getFullYear()} La Fragua</div>
          <div style={{ display: "flex", gap: 14 }}>
            <a href="https://www.instagram.com/lafraguacatering/" target="_blank" rel="noreferrer" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none" }}>
              Instagram
            </a>
            <a href="mailto:lafraguacatering@gmail.com" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none" }}>
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Card({
  title,
  desc,
  href,
  cta,
}: {
  title: string;
  desc: string;
  href: string;
  cta: string;
}) {
  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: 18,
        padding: 18,
        boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
      }}
    >
      <div style={{ fontSize: 18, fontWeight: 800 }}>{title}</div>
      <p style={{ marginTop: 8, color: "#555", lineHeight: 1.5 }}>{desc}</p>
      <Link
        href={href}
        style={{
          display: "inline-block",
          marginTop: 14,
          padding: "10px 14px",
          borderRadius: 12,
          background: "#111",
          color: "white",
          textDecoration: "none",
          fontWeight: 700,
          fontSize: 14,
        }}
      >
        {cta}
      </Link>
    </div>
  );
}