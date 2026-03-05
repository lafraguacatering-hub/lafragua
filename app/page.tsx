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
            Servicio de catering y experiencias gastronómicas con identidad.
          </p>

          <div className="ctaRow">
            <Link className="cta" href="/productos">
              Ver productos
            </Link>
            <Link className="cta ghost" href="/catering">
              Ver catering
            </Link>
          </div>
        </div>
      </section>

      {/* 2 FOTOS (chicas, pegadas, sin superponer) */}
      <section className="section">
        <div className="container">
          <h2 className="h2">Ritual de fuego. Cocina con oficio.</h2>
          <p className="p">
            La Fragua combina el espíritu de la parrilla argentina con una estética
            moderna para eventos privados y corporativos.
          </p>

          <div className="photoGrid">
            <figure className="photoCard">
              <img
                className="photoImg"
                src="/images/choris.jpg"
                alt="Recepción y picada"
              />
              <figcaption className="photoCap">
                <div className="photoTitle">Recepción & picada</div>
                <div className="photoText">Pan, salsas y clásicos de parrilla.</div>
              </figcaption>
            </figure>

            <figure className="photoCard">
              <img
                className="photoImg"
                src="/images/corte.jpg"
                alt="Cortes y fuego"
              />
              <figcaption className="photoCap">
                <div className="photoTitle">Cortes & fuego</div>
                <div className="photoText">Servicio prolijo, cocción a brasas.</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* NOSOTROS (ancla para la navbar) */}
      <section id="nosotros" className="about">
        <div className="container">
          <div className="aboutInner">
            <div className="aboutPhotoWrap">
              <img
                className="aboutPhoto"
                src="/images/nosotros.jpg"
                alt="Jeremías e Inés"
              />
            </div>

            <div className="aboutText">
              <h2 className="h2">Nosotros</h2>
              <p className="p aboutP">
                Somos Jeremías e Inés, hermanos unidos por una visión compartida y las
                ganas de crear algo con identidad propia. Como fundadores de La Fragua,
                volcamos en este espacio nuestra mayor herencia: una pasión innegable
                por la gastronomía y el placer de compartir una buena mesa. Inés aporta
                su mirada detallista y estética a través de la fotografía, capturando la
                esencia de lo que hacemos, mientras que ambos trabajamos codo a codo para
                que cada proyecto refleje ese fuego creativo que nos define. Para nosotros,
                La Fragua no es solo un emprendimiento; es el punto de encuentro donde el
                diseño, el sabor y nuestra historia familiar se funden para dar vida a
                experiencias únicas.
              </p>

              <div className="aboutActions">
                <Link className="cta" href="/catering">
                  Pedir cotización
                </Link>
                <Link className="cta ghost" href="/productos">
                  Ver productos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CONTACTO */}
      <footer className="footer">
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
                <a className="footerLink" href="https://wa.me/5491130835097" target="_blank" rel="noreferrer">
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

              <div className="footerCtaRow">
                <a
                  className="footerCta"
                  href={
                    "mailto:lafraguacatering@gmail.com" +
                    "?subject=" +
                    encodeURIComponent("Consulta / Cotización - La Fragua") +
                    "&body=" +
                    encodeURIComponent(
                      "Hola La Fragua!\n\nQuiero consultar por un evento.\n\n" +
                        "Nombre:\n" +
                        "Teléfono:\n" +
                        "Cantidad de personas:\n" +
                        "Fecha:\n" +
                        "Zona:\n\n" +
                        "Gracias!"
                    )
                  }
                >
                  Contactarnos
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