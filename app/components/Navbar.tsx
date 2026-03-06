import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="navInner">
        <Link href="/" className="navBrand navBrandSerif">
          La Fragua
        </Link>

        <nav className="navLinks navLinksCentered" aria-label="Navegación principal">
          <a className="navLink" href="/#nosotros">
            Nosotros
          </a>

          <a className="navLink" href="/#productos">
            Productos
          </a>

          <details className="navDrop">
            <summary className="navLink navDropSummary">Catering</summary>
            <div className="navDropMenu" role="menu" aria-label="Catering">
              <a className="navDropItem" href="/#oferta">
                Qué te podemos ofrecer
              </a>
              <Link className="navDropItem" href="/asado">
                Asado argentino
              </Link>
              <Link className="navDropItem" href="/pizzas">
                Pizzas napolitanas
              </Link>
            </div>
          </details>
        </nav>
      </div>

      <div className="navLine" />
    </header>
  );
}