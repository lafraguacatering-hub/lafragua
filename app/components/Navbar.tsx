import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="navInner">
        <Link href="/" className="navBrand">
          La Fragua
        </Link>

        <nav className="navLinks" aria-label="Navegación principal">
          <a className="navLink" href="#nosotros">
            Nosotros
          </a>

          <Link className="navLink" href="/productos">
            Productos
          </Link>

          {/* Dropdown SOLO con CSS (sin JS / sin eventos) */}
          <div className="navDrop">
            <span className="navLink navDropTrigger">Catering</span>
            <div className="navDropMenu">
              <Link className="navDropItem" href="/asado">
                Asado argentino
              </Link>
              <Link className="navDropItem" href="/pizzas">
                Pizzas napolitanas
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <div className="navLine" />
    </header>
  );
}