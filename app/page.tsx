import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="page">
      {/* HERO */}
      <section className="hero">
        <div className="heroOverlay" />
        <div className="heroInner fadeUp">
          <p className="kicker">BUENOS AIRES</p>

          <h1 className="title">La Fragua</h1>

          <p className="subtitle">
            Experiencia gastronómica & servicio de catering para eventos privados y
            corporativos.
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

      {/* 2 FOTOS (sin superponerse) */}
      <section className="section">
        <div className="container">
          <h2 className="h2">Ritual de fuego. Cocina con oficio.</h2>
          <p className="p">
            La Fragua combina el espíritu de la parrilla argentina con una estética
            moderna y prolija.
          </p>

          <div className="grid">
            <article className="card">
              <div className="cardImg">
                <Image
                  src="/images/choris.jpg"
                  alt="Recepción y picada"
                  fill
                  sizes="(max-width: 900px) 100vw, 520px"
                  style={{ objectFit: "cover" }}
                  priority={false}
                />
              </div>
              <div className="cardBody">
                <div className="cardTitle">Recepción & picada</div>
                <div className="cardText">Choripán artesanal, panes y salsas caseras.</div>
              </div>
            </article>

            <article className="card">
              <div className="cardImg">
                <Image
                  src="/images/corte.jpg"
                  alt="Cortes y fuego"
                  fill
                  sizes="(max-width: 900px) 100vw, 520px"
                  style={{ objectFit: "cover" }}
                  priority={false}
                />
              </div>
              <div className="cardBody">
                <div className="cardTitle">Cortes & fuego</div>
                <div className="cardText">Cocción a las brasas y servicio profesional.</div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* NOSOTROS (anchor para la navbar) */}
      <section id="nosotros" className="section about">
        <div className="container aboutInner">
          <div className="aboutPhoto">
            <Image
              src="/images/nosotros.jpg"
              alt="Jeremías e Inés - La Fragua"
              fill
              sizes="(max-width: 900px) 100vw, 520px"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="aboutText">
            <h2 className="h2">Nosotros</h2>
            <p className="p">
              Somos Jeremías e Inés, hermanos unidos por una visión compartida y las
              ganas de crear algo con identidad propia. Como fundadores de La Fragua,
              volcamos en este espacio nuestra mayor herencia: una pasión innegable por
              la gastronomía y el placer de compartir una buena mesa. Inés aporta su
              mirada detallista y estética a través de la fotografía, capturando la
              esencia de lo que hacemos, mientras que ambos trabajamos codo a codo para
              que cada proyecto refleje ese fuego creativo que nos define. Para
              nosotros, La Fragua no es solo un emprendimiento; es el punto de
              encuentro donde el diseño, el sabor y nuestra historia familiar se
              funden para dar vida a experiencias únicas.
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
            </div>
          </div>

          <div className="footerBottom">
            © {new Date().getFullYear()} La Fragua. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}