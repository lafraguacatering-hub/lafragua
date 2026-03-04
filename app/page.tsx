import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Home() {
  return (
    <main style={{ background: "#0b0b0b", color: "#fff" }}>

      {/* HERO */}
      <section
        style={{
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "56px 24px",
          backgroundImage:
            "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.35)), url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
        }}
      >

        <p style={{ letterSpacing: 3, opacity: 0.8 }}>BUENOS AIRES</p>

        <h1
          className={playfair.className}
          style={{
            fontSize: 72,
            margin: "10px 0 20px",
            lineHeight: 1,
          }}
        >
          La Fragua
        </h1>

        {/* BARRA NEGRA CON OPCIONES */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "900px",
            background: "rgba(0,0,0,0.8)",
            padding: "20px",
            borderRadius: "8px",
            gap: "20px",
          }}
        >
          <Link
            href="/productos"
            style={{
              flex: 1,
              textAlign: "center",
              color: "white",
              textDecoration: "none",
              fontSize: "18px",
              padding: "14px",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: "6px",
            }}
          >
            Nuestros Productos
          </Link>

          <Link
            href="/asado"
            style={{
              flex: 1,
              textAlign: "center",
              color: "white",
              textDecoration: "none",
              fontSize: "18px",
              padding: "14px",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: "6px",
            }}
          >
            Servicio de Catering
          </Link>

          <Link
            href="/experiencias"
            style={{
              flex: 1,
              textAlign: "center",
              color: "white",
              textDecoration: "none",
              fontSize: "18px",
              padding: "14px",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: "6px",
            }}
          >
            Experiencias
          </Link>
        </div>
      </section>

      {/* SECCIÓN IMÁGENES */}
      <section style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          <h2 style={{ marginBottom: "20px" }}>
            Ritual de fuego. Cocina con oficio.
          </h2>

          <p style={{ opacity: 0.85, maxWidth: "700px", marginBottom: "30px" }}>
            La Fragua combina el espíritu de la parrilla argentina con una
            estética moderna para eventos privados, corporativos y experiencias
            gastronómicas.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
              gap: "20px",
            }}
          >

            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                background: "#111",
              }}
            >
              <div
                style={{
                  height: "220px",
                  backgroundImage: "url('/images/choris.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <div style={{ padding: "16px" }}>
                <strong>Recepción & picada</strong>
                <p style={{ opacity: 0.8 }}>
                  Choripán artesanal, panes y salsas caseras.
                </p>
              </div>
            </div>

            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                background: "#111",
              }}
            >
              <div
                style={{
                  height: "220px",
                  backgroundImage: "url('/images/corte.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <div style={{ padding: "16px" }}>
                <strong>Cortes & fuego</strong>
                <p style={{ opacity: 0.8 }}>
                  Cocción a las brasas y servicio profesional.
                </p>
              </div>
            </div>

          </div>

          <footer style={{ marginTop: "40px", opacity: 0.7 }}>
            © {new Date().getFullYear()} La Fragua
          </footer>

        </div>
      </section>

    </main>
  );
}