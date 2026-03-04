import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});import Link from "next/link";

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", background: "#0b0b0b", color: "#fff" }}>
      {/* HERO */}
      <section
        style={{
          minHeight: "78vh",
          display: "flex",
          alignItems: "flex-end",
          padding: "56px 24px",
          backgroundImage:
            "linear-gradient(to top, rgba(0,0,0,0.78), rgba(0,0,0,0.15)), url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderBottom: "1px solid rgba(255,255,255,0.10)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>
          <p
            style={{
              letterSpacing: 2,
              textTransform: "uppercase",
              opacity: 0.85,
              margin: 0,
            }}
          >
            Buenos Aires
          </p>
          <h1 style={{ fontSize: 56, margin: "10px 0 10px", lineHeight: 1.05 }}>
            La Fragua
          </h1>
          <p style={{ fontSize: 18, maxWidth: 680, opacity: 0.9, margin: 0 }}>
            Asado argentino tradicional + Pizzas napolitanas al horno de leña.
            Experiencias rústicas con estética moderna.
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 22, flexWrap: "wrap" }}>
            <Link
              href="/asado"
              style={{
                background: "#fff",
                color: "#111",
                padding: "12px 16px",
                borderRadius: 14,
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Ver Asado
            </Link>
            <Link
              href="/pizzas"
              style={{
                background: "rgba(255,255,255,0.10)",
                color: "#fff",
                padding: "12px 16px",
                borderRadius: 14,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.18)",
                fontWeight: 700,
              }}
            >
              Ver Pizzas
            </Link>
            <Link
              href="/productos"
              style={{
                background: "rgba(255,255,255,0.10)",
                color: "#fff",
                padding: "12px 16px",
                borderRadius: 14,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.18)",
                fontWeight: 700,
              }}
            >
              Nuestros productos
            </Link>
            <Link
              href="/contacto"
              style={{
                background: "transparent",
                color: "#fff",
                padding: "12px 16px",
                borderRadius: 14,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.25)",
                fontWeight: 700,
              }}
            >
              Contacto
            </Link>
          </div>
        </div>
      </section>

      {/* 2 IMAGENES */}
      <section style={{ padding: "36px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ margin: "0 0 14px" }}>Ritual de fuego. Cocina con oficio.</h2>
          <p style={{ margin: "0 0 18px", opacity: 0.85, maxWidth: 760 }}>
            La Fragua combina el espíritu de la parrilla argentina con una presentación
            moderna y prolija para eventos particulares, corporativos y venta al público.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 14,
            }}
          >
            <div
              style={{
                borderRadius: 18,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "#111",
              }}
            >
              <div
                style={{
                  height: 220,
                  backgroundImage:
                    "linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0.05)), url('/images/choris.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div style={{ padding: 14 }}>
                <div style={{ fontWeight: 800 }}>Recepción & picada</div>
                <div style={{ opacity: 0.8, marginTop: 6 }}>
                  Choripán artesanal, panes y salsas caseras.
                </div>
              </div>
            </div>

            <div
              style={{
                borderRadius: 18,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "#111",
              }}
            >
              <div
                style={{
                  height: 220,
                  backgroundImage:
                    "linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0.05)), url('/images/corte.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div style={{ padding: 14 }}>
                <div style={{ fontWeight: 800 }}>Cortes & fuego</div>
                <div style={{ opacity: 0.8, marginTop: 6 }}>
                  Cocción a las brasas, servicio cálido y prolijo.
                </div>
              </div>
            </div>
          </div>

          <footer style={{ marginTop: 22, opacity: 0.7, fontSize: 13 }}>
            © {new Date().getFullYear()} La Fragua
          </footer>
        </div>
      </section>
    </main>
  );
}