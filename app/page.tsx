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
            Experiencia gastronómica & servicio de catering para eventos privados y corporativos.
          </p>

          <div className="ctaRow ctaRowCentered">
            <Link className="cta ctaPrimary" href="/productos">
              Ver productos
            </Link>

            {/* baja a la sección "Qué te podemos ofrecer" */}
            <a className="cta ctaPrimary" href="#oferta">
              Ver catering
            </a>
          </div>
        </div>
      </section>

      {/* DOS FOTOS */}
      <section className="section">
        <div className="container">
          <h2 className="h2">Ritual de fuego. Cocina con oficio.</h2>
          <p className="p">
            La Fragua combina el espíritu de la parrilla argentina con una estética moderna y prolija.
          </p>

          <div className="photoGrid">
            <div className="photoCard">
              <img className="photoImg" src="/images/choris.jpg" alt="Recepción y picada" />
              <div className="photoCap">
                <div className="photoTitle">Recepción & picada</div>
                <div className="photoText">Choripán artesanal, panes y salsas caseras.</div>
              </div>
            </div>

            <div className="photoCard">
              <img className="photoImg" src="/images/corte.jpg" alt="Cortes y fuego" />
              <div className="photoCap">
                <div className="photoTitle">Cortes & fuego</div>
                <div className="photoText">Cocción a las brasas y servicio profesional.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA (ANCLA PARA CATERING) */}
      <section id="oferta" className="section">
        <div className="container">
          <h2 className="h2">Qué te podemos ofrecer</h2>
          <p className="p">
            Catering a medida para eventos particulares y corporativos. Fuego, horno de leña y una
            presentación moderna.
          </p>

          <div className="offerGrid">
            <div className="offerCard">
              <div>
                <div className="offerTitle">Asado argentino</div>
                <div className="offerText">
                  Choripán, achuras, cortes premium y servicio completo.
                </div>
              </div>
              <div className="offerActions">
                <Link className="cta ctaPrimary" href="/asado">
                  Ver menús
                </Link>
              </div>
            </div>

            <div className="offerCard">
              <div>
                <div className="offerTitle">Pizzas napolitanas</div>
                <div className="offerText">
                  Horno de leña, masa de larga fermentación y toppings clásicos.
                </div>
              </div>
              <div className="offerActions">
                <Link className="cta ctaPrimary" href="/pizzas">
                  Ver pizzas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="about">
        <div className="container">
          <div className="aboutInner">
            <img
              className="aboutPhoto"
              src="/images/nosotros.jpg"
              alt="Jeremías e Inés - La Fragua"
            />

            <div>
              <h2 className="h2">Nosotros</h2>
              <p className="p" style={{ marginBottom: 0 }}>
                Somos Jeremías e Inés, hermanos unidos por una visión compartida y las ganas de crear
                algo con identidad propia. Como fundadores de La Fragua, volcamos en este espacio
                nuestra mayor herencia: una pasión innegable por la gastronomía y el placer de
                compartir una buena mesa. Inés aporta su mirada detallista y estética a través de la
                fotografía, capturando la esencia de lo que hacemos, mientras que ambos trabajamos
                codo a codo para que cada proyecto refleje ese fuego creativo que nos define. Para
                nosotros, La Fragua no es solo un emprendimiento; es el punto de encuentro donde el
                diseño, el sabor y nuestra historia familiar se funden para dar vida a experiencias
                únicas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}