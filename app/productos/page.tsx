import Link from "next/link";

export default function Home() {
  return (
    <main className="page">
      {/* HERO */}
      <section className="hero">
        <div className="heroOverlay" />
        <div className="heroInner fadeUp">
          <p className="kicker">BUENOS AIRES</p>

          <h1 className="title">La Fragua</h1>

          <p className="subtitle">
            Experiencias gastronómicas a fuego real para eventos privados y corporativos.
          </p>

          <div className="ctaRow">
            <Link className="cta" href="/catering">
              Ver catering
            </Link>
            <Link className="cta ghost" href="/productos">
              Ver productos
            </Link>
          </div>
        </div>
      </section>

      {/* NOSOTROS / INTRO */}
      <section className="section" id="nosotros">
        <div className="container">
          <h2 className="h2">Ritual de fuego. Cocina con oficio.</h2>
          <p className="p">
            La Fragua combina el espíritu de la parrilla argentina con una estética moderna,
            cuidando el detalle en cada evento.
          </p>

          {/* 2 FOTOS ABAJO */}
          <div className="grid">
            <article className="card">
              <div
                className="cardImg"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.05)), url('/images/choris.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="cardBody">
                <div className="cardTitle">Recepción & picada</div>
                <div className="cardText">
                  Choripán artesanal, panes y salsas caseras.
                </div>
              </div>
            </article>

            <article className="card">
              <div
                className="cardImg"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.05)), url('/images/corte.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="cardBody">
                <div className="cardTitle">Cortes & fuego</div>
                <div className="cardText">
                  Cocción a las brasas y servicio profesional.
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FOOTER / CONTACTO */}
      <footer className="footer" id="contacto">
        <div className="container">
          <div className="footerInner">
            <div>
              <div className="footerBrand">La Fragua</div>
              <div className="footerMuted">Buenos Aires, Argentina</div>
            </div>

            <div>
              <div className="footerBrand">Contacto</div>
              <div className="footerLine">
                WhatsApp:{" "}
                <a
                  className="footerLink"
                  href="https://wa.me/5491130835097"
                  target="_blank"
                  rel="noreferrer"
                >
                  +54 9 11 3083-5097
                </a>
              </div>
              <div className="footerLine">
                Instagram:{" "}
                <a
                  className="footerLink"
                  href="https://www.instagram.com/lafraguacatering/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @lafraguacatering
                </a>
              </div>
              <div className="footerLine">
                Email:{" "}
                <a className="footerLink" href="mailto:lafraguacatering@gmail.com">
                  lafraguacatering@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="footerBottom">
            © {new Date().getFullYear()} La Fragua. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}