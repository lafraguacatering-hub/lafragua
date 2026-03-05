import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="navInner">
        <Link className="navBrand" href="/">
          La Fragua
        </Link>

        <nav className="navLinks" aria-label="Navegación principal">
          <Link className="navLink" href="/#nosotros">
            Nosotros
          </Link>

          {/* Dropdown Catering */}
          <div className="navDrop">
            <Link className="navLink navDropTrigger" href="/catering">
              Catering
              <span className="navCaret" aria-hidden="true">▾</span>
            </Link>

            <div className="navDropMenu" role="menu" aria-label="Catering">
              <Link className="navDropItem" href="/catering">
                Ver catering
              </Link>
              <Link className="navDropItem" href="/asado">
                Asado argentino
              </Link>
              <Link className="navDropItem" href="/pizzas">
                Pizzas napolitanas
              </Link>
            </div>
          </div>

          <Link className="navLink" href="/productos">
            Productos
          </Link>

          <Link className="navLink" href="/#contacto">
            Contacto
          </Link>
        </nav>
      </div>

      {/* Línea sutil animada */}
      <div className="navLine" />
    </header>
  );
}