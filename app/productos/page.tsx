import Link from "next/link";

export default function Home() {
  return (
    <main>

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

      {/* GALERIA 2 FOTOS */}
      <section className="gallerySection">
        <div className="galleryContainer">

          <h2 className="h2">Ritual de fuego. Cocina con oficio.</h2>

          <p className="p">
            La Fragua combina el espíritu de la parrilla argentina con una estética moderna
            para eventos privados y corporativos.
          </p>

          <div className="galleryGrid">

            <div className="galleryCard">
              <img
                className="galleryImage"
                src="/images/choris.jpg"
                alt="Recepción y picada"
              />

              <div className="galleryBody">
                <p className="galleryTitle">Recepción & picada</p>

                <p className="galleryText">
                  Choripán artesanal, panes y salsas caseras.
                </p>
              </div>
            </div>

            <div className="galleryCard">
              <img
                className="galleryImage"
                src="/images/corte.jpg"
                alt="Cortes al fuego"
              />

              <div className="galleryBody">
                <p className="galleryTitle">Cortes & fuego</p>

                <p className="galleryText">
                  Cocción a las brasas y servicio profesional.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="section">
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 24,
            alignItems: "center",
          }}
        >

          {/* FOTO */}
          <div
            style={{
              borderRadius: 18,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "#111",
            }}
          >
            <img
              src="/images/nosotros.jpg"
              alt="Jeremías e Inés"
              style={{
                width: "100%",
                height: 360,
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          {/* TEXTO */}
          <div>

            <h2 className="h2" style={{ marginBottom: 10 }}>
              Nosotros
            </h2>

            <p className="p" style={{ marginBottom: 16 }}>
              Somos La Fragua. Un proyecto gastronómico que nace del fuego,
              la parrilla argentina y la pasión por compartir buenas experiencias.
            </p>

            <p style={{ opacity: 0.85 }}>
              Ofrecemos catering de asado argentino y pizzas napolitanas al horno
              de leña para eventos privados, corporativos y experiencias gastronómicas.
            </p>

            <p style={{ marginTop: 12, opacity: 0.9 }}>
              <strong>Jeremías & Inés</strong> — Fundadores
            </p>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">

        <div className="container">

          <div className="footerInner">

            <div>
              <div className="footerBrand">La Fragua</div>

              <div className="footerMuted">
                Buenos Aires, Argentina
              </div>
            </div>

            <div>

              <div className="footerBrand">Contacto</div>

              <div className="footerLine">
                WhatsApp:{" "}
                <a
                  className="footerLink"
                  href="https://wa.me/5491130835097"
                  target="_blank"
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
                >
                  @lafraguacatering
                </a>
              </div>

              <div className="footerLine">
                Email:{" "}
                <a
                  className="footerLink"
                  href="mailto:lafraguacatering@gmail.com"
                >
                  lafraguacatering@gmail.com
                </a>
              </div>

            </div>

          </div>

          <div className="footerBottom">
            © {new Date().getFullYear()} La Fragua
          </div>

        </div>

      </footer>

    </main>
  );
}