import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="navInner">

        <Link href="/" className="navBrand">
          La Fragua
        </Link>

        <nav className="navLinks">

          <Link href="/" className="navLink">
            Nosotros
          </Link>

          <Link href="/productos" className="navLink">
            Nuestros Productos
          </Link>

          <Link href="/asado" className="navLink">
            Servicio de Catering
          </Link>

          <Link href="/pizzas" className="navLink">
            Pizzas
          </Link>

        </nav>
      </div>

      <div className="navLine"></div>
    </header>
  );
}