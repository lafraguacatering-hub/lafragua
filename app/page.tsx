import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Home() {
  return (
    <main style={{ background: "#0b0b0b", color: "#fff" }}>
      {/* HERO FULLSCREEN */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "96px 24px 64px",
          backgroundImage:
            "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.20)), url('/images/corte.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>
          <p
            style={{
              letterSpacing: 2,
              textTransform: "uppercase",
              opacity: 0.85,
              margin: 0,
              fontSize: 13,
            }}
          >
            Buenos Aires
          </p>

          <h1
            className={playfair.className}
            style={{ fontSize: 72, margin: "14px 0 14px", lineHeight: 1.02 }}
          >
            La Fragua
          </h1>

          <p style={{ fontSize: 18, maxWidth: 720, opacity: 0.9, margin: "0 auto" }}>
            Asado argentino tradicional + Pizzas napolitanas al horno de leña.
            Experiencias rústicas con estética moderna.
          </p>

          {/* CTA opcional (uno solo) */}
          <div
            style={{
              marginTop: 28,
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/productos"
              style={{
                background: "rgba(255,255,255,0.12)",
                color: "#fff",
                padding: "12px 16px",
                borderRadius: 14,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.22)",
                fontWeight: 700,
              }}
            >
              Ver propuestas
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER CONTACTO */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.10)",
          padding: "28px 24px",
          background: "#0b0b0b",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <div>
              <div style={{ fontWeight: 800, marginBottom: 6 }}>La Fragua</div>
              <div style={{ opacity: 0.75, fontSize: 14 }}>Buenos Aires, Argentina</div>
            </div>

            <div>
              <div style={{ fontWeight: 800, marginBottom: 6 }}>Contacto</div>
              <div style={{ opacity: 0.85, fontSize: 14 }}>
                WhatsApp: <span style={{ opacity: 0.9 }}>(completá tu número)</span>
              </div>
              <div style={{ opacity: 0.85, fontSize: 14 }}>
                Instagram: <span style={{ opacity: 0.9 }}>@lafragua</span>
              </div>
              <div style={{ opacity: 0.85, fontSize: 14 }}>
                Email: <span style={{ opacity: 0.9 }}>lafraguacatering@gmail.com</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 18, opacity: 0.6, fontSize: 13 }}>
            © {new Date().getFullYear()} La Fragua. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}