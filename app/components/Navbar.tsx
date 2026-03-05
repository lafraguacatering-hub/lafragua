import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="navInner">
        <Link href="/" className="navBrand">
          La Fragua
        </Link>

        <nav className="navLinks" aria-label="Navegación principal">
          <a className="navLink" href="/#nosotros">
            Nosotros
          </a>

          <Link className="navLink" href="/productos">
            Productos
          </Link>

          {/* Dropdown SIN JS (con <details>) */}
          <details className="navDrop">
            <summary className="navLink navDropSummary">Catering</summary>
            <div className="navDropMenu" role="menu" aria-label="Catering">
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