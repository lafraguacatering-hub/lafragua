import Link from "next/link";

export default function ProductosPage() {
  return (
    <main className="page">
      <section className="section">
        <div className="container">
          <h1 className="h1">Productos</h1>
          <p className="p">
            Propuestas pensadas para eventos privados y corporativos, con foco en el fuego y la
            cocina en vivo.
          </p>

          <div className="grid">
            <article className="card">
              <div className="cardBody">
                <div className="cardTitle">Asado argentino</div>
                <div className="cardText">
                  Menús de recepción, cortes premium y guarniciones para distintos tipos de eventos.
                </div>
                <div style={{ marginTop: 12 }}>
                  <Link className="cta" href="/asado">
                    Ver menús de asado
                  </Link>
                </div>
              </div>
            </article>

            <article className="card">
              <div className="cardBody">
                <div className="cardTitle">Pizzas napolitanas</div>
                <div className="cardText">
                  Pizzas al horno de leña, masa de larga fermentación e ingredientes seleccionados.
                </div>
                <div style={{ marginTop: 12 }}>
                  <Link className="cta" href="/pizzas">
                    Ver carta de pizzas
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}