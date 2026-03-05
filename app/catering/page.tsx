import Link from "next/link";

export default function CateringPage() {
  return (
    <main className="page">
      <section className="section">
        <div className="container">
          <h1 className="h1">Servicio de Catering</h1>
          <p className="p">
            Experiencias gastronómicas a fuego real para eventos privados y corporativos.
          </p>

          <h2 className="h2" style={{ marginTop: 22 }}>
            ¿Qué te podemos ofrecer?
          </h2>

          <div className="grid" style={{ marginTop: 14 }}>
            <article className="card">
              <div className="cardBody">
                <div className="cardTitle">Asado argentino</div>
                <div className="cardText">
                  Recepción, achuras, cortes premium, guarniciones y servicio completo.
                </div>

                <div style={{ marginTop: 12 }}>
                  <Link className="cta" href="/asado">
                    Ver asado
                  </Link>
                </div>
              </div>
            </article>

            <article className="card">
              <div className="cardBody">
                <div className="cardTitle">Pizzas napolitanas al horno de leña</div>
                <div className="cardText">
                  Horno en vivo, masa fermentación lenta e ingredientes premium.
                </div>

                <div style={{ marginTop: 12 }}>
                  <Link className="cta" href="/pizzas">
                    Ver pizzas
                  </Link>
                </div>
              </div>
            </article>
          </div>

          <div style={{ marginTop: 22 }}>
            <a
              className="cta ghost"
              href="https://wa.me/5491130835097?text=Hola%20La%20Fragua!%20Quiero%20cotizar%20un%20evento.%20Mi%20nombre%20es%20____%20y%20somos%20____%20personas.%20Fecha:%20____.%20Zona:%20____."
              target="_blank"
              rel="noreferrer"
            >
              Pedir presupuesto por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}