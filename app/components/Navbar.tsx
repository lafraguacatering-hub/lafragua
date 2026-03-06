import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="navInner">
        <Link href="/" className="navBrand navBrandSerif">
          La Fragua
        </Link>

        <nav className="navLinks navLinksCentered" aria-label="Navegación principal">
          <Link className="navLink" href="/#nosotros">
            Nosotros
          </Link>

          <Link className="navLink" href="/#productos">
            Productos
          </Link>

          <details className="navDrop">
            <summary className="navLink navDropSummary">Catering</summary>
            <div className="navDropMenu" role="menu" aria-label="Catering">
              <Link className="navDropItem" href="/asado">
                Asado
              </Link>
              <Link className="navDropItem" href="/pizzas">
                Pizzas
              </Link>
            </div>
          </details>
        </nav>
      </div>

      <div className="navLine" />
    </header>
  );
}