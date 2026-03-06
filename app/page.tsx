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
      <section className="offerSection" id="oferta">
        <div className="offerContainer">
          <h2 className="offerTitle">Qué te podemos ofrecer</h2>
          <p className="offerSubtitle">
            Catering a medida para eventos particulares y corporativos. Fuego, horno de leña y una
            presentación moderna.
          </p>

          <div className="offerGrid">
            <article className="offerCard">
              <div className="offerCardContent">
                <h3 className="offerCardTitle">Asado argentino</h3>
                <p className="offerCardText">
                  Choripán, achuras, cortes premium y servicio completo.
                </p>
              </div>

              <Link className="offerButton" href="/asado">
                Ver menús
              </Link>
            </article>

            <article className="offerCard">
              <div className="offerCardContent">
                <h3 className="offerCardTitle">Pizzas napolitanas</h3>
                <p className="offerCardText">
                  Horno de leña, masa de larga fermentación y toppings clásicos.
                </p>
              </div>

              <Link className="offerButton" href="/pizzas">
                Ver pizzas
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* PRODUCTOS (SCROLL ANCLA) */}
      <section className="productsSection" id="productos">
        <div className="productsContainer">
          <h2 className="productsTitle">Productos</h2>
          <p className="productsSubtitle">
            Próximamente vas a poder ver toda nuestra línea de productos para cocinar, servir y vivir
            la experiencia La Fragua.
          </p>

          <div className="productsGrid">
            <article className="productCard">
              <img
                className="productImage"
                src="https://placehold.co/600x400/111111/EAEAEA?text=La+Fragua"
                alt="Delantal La Fragua"
              />
              <h3 className="productName">Delantales</h3>
            </article>

            <article className="productCard">
              <img
                className="productImage"
                src="https://placehold.co/600x400/111111/EAEAEA?text=La+Fragua"
                alt="Cortadora de pizza La Fragua"
              />
              <h3 className="productName">Cortadora de Pizza</h3>
            </article>

            <article className="productCard">
              <img
                className="productImage"
                src="https://placehold.co/600x400/111111/EAEAEA?text=La+Fragua"
                alt="Parrilla de piso La Fragua"
              />
              <h3 className="productName">Parrilla de piso</h3>
            </article>

            <article className="productCard">
              <img
                className="productImage"
                src="https://placehold.co/600x400/111111/EAEAEA?text=La+Fragua"
                alt="Chulengo La Fragua"
              />
              <h3 className="productName">Chulengo</h3>
            </article>

            <article className="productCard">
              <img
                className="productImage"
                src="https://placehold.co/600x400/111111/EAEAEA?text=La+Fragua"
                alt="Fogonero La Fragua"
              />
              <h3 className="productName">Fogonero</h3>
            </article>

            <article className="productCard">
              <img
                className="productImage"
                src="https://placehold.co/600x400/111111/EAEAEA?text=La+Fragua"
                alt="Piedra refractaria para horno La Fragua"
              />
              <h3 className="productName">Piedra Refractaria para el horno</h3>
            </article>

            <article className="productCard">
              <img
                className="productImage"
                src="https://placehold.co/600x400/111111/EAEAEA?text=La+Fragua"
                alt="Tabla de madera maciza multiuso La Fragua"
              />
              <h3 className="productName">Tabla de Madera Maciza Multiuso</h3>
            </article>

            <article className="productCard">
              <img
                className="productImage"
                src="https://placehold.co/600x400/111111/EAEAEA?text=La+Fragua"
                alt="Cuchillo de asado de 30 cm La Fragua"
              />
              <h3 className="productName">Cuchillo de Asado 30cm</h3>
            </article>
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