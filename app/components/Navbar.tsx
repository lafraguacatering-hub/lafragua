import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="navInner">
        <Link href="/" className="navBrand">
          La Fragua
        </Link>

        <nav className="navLinks">
          <Link className="navLink" href="/">
            Nosotros
          </Link>
          <Link className="navLink" href="/productos">
            Nuestros Productos
          </Link>
          <Link className="navLink" href="/asado">
            Servicio de Catering
          </Link>
          <Link className="navLink" href="/experiencias">
            Experiencias
          </Link>
        </nav>
      </div>
      <div className="navLine" />
    </header>
  );
}