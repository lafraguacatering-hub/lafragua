import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ background: "#0b0b0b", color: "#fff" }}>
      {/* HERO FULLSCREEN */}
      <section className="hero">
        <div className="heroOverlay" />

        <div className="heroInner fadeUp">
          <p className="kicker">BUENOS AIRES</p>
          <h1 className="title">La Fragua</h1>
          <p className="subtitle">
            Asado argentino tradicional + Pizzas napolitanas al horno de leña.
            Estética rústica con espíritu moderno.
          </p>

          <div className="ctaRow">
            <Link className="cta" href="/productos">
              Ver propuestas
            </Link>
            <Link className="cta ghost" href="/asado">
              Servicio de catering
            </Link>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 FOTOS */}
      <section className="section">
        <div className="container">
          <div className="fadeUp">
            <h2 className="h2">Ritual de fuego. Cocina con oficio.</h2>
            <p className="p">
              La Fragua combina el espíritu de la parrilla argentina con una
              presentación moderna y prolija para eventos particulares y
              corporativos.
            </p>
          </div>

          <div className="grid fadeUp">
            <article className="card">
              <div className="cardImg">
                <Image
                  src="/images/choris.jpg"
                  alt="Recepción y picada"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="cardBody">
                <div className="cardTitle">Recepción & picada</div>
                <div className="cardText">
                  Choripán artesanal, panes y salsas caseras.
                </div>
              </div>
            </article>

            <article className="card">
              <div className="cardImg">
                <Image
                  src="/images/corte.jpg"
                  alt="Cortes y fuego"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
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

      {/* FOOTER CONTACTO */}
      <footer className="footer">
        <div className="container footerInner">
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
                +54 9 11 3083 5097
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

        <div className="container footerBottom">
          © {new Date().getFullYear()} La Fragua. Todos los derechos reservados.
        </div>
      </footer>
    </main>
  );
}