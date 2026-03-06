"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cateringOpen, setCateringOpen] = useState(false);

  const closeMenus = () => {
    setMenuOpen(false);
    setCateringOpen(false);
  };

  return (
    <header className="nav">
      <div className="navInner">
        <Link href="/" className="navBrand navBrandSerif" onClick={closeMenus}>
          La Fragua
        </Link>

        <button
          type="button"
          className={`navToggle ${menuOpen ? "navToggleOpen" : ""}`}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`navLinks navLinksCentered ${menuOpen ? "navLinksOpen" : ""}`}
          aria-label="Navegación principal"
        >
          <Link className="navLink" href="/#nosotros" onClick={closeMenus}>
            Nosotros
          </Link>

          <Link className="navLink" href="/productos" onClick={closeMenus}>
            Productos
          </Link>

          <div className={`navDrop ${cateringOpen ? "navDropOpen" : ""}`}>
            <button
              type="button"
              className="navLink navDropSummary"
              aria-expanded={cateringOpen}
              onClick={() => setCateringOpen((prev) => !prev)}
            >
              Catering
            </button>

            <div className="navDropMenu" role="menu" aria-label="Catering">
              <Link className="navDropItem" href="/asado" onClick={closeMenus}>
                Asado
              </Link>

              <Link className="navDropItem" href="/pizzas" onClick={closeMenus}>
                Pizzas
              </Link>
            </div>
          </div>

          <Link className="navCta" href="/cotizador" onClick={closeMenus}>
            Cotizá tu evento
          </Link>
        </nav>
      </div>

      <div className="navLine" />
    </header>
  );
}