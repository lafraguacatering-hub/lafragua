"use client";
import Link from "next/link";

const items = [
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Nuestros Productos", href: "/productos" },
  { label: "Servicio de Catering", href: "/#catering" },
  { label: "Experiencias", href: "/#experiencias" },
];

export default function Navbar() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "rgba(0,0,0,0.65)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.10)",
      }}
    >
      <nav
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* MENU */}
        <div style={{ display: "flex", gap: 22 }}>
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: 14,
                opacity: 0.92,
                padding: "6px 2px",
                position: "relative",
                display: "inline-block",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.92")}
            >
              {it.label}

              {/* LINEA ANIMADA */}
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: -6,
                  height: 2,
                  width: "100%",
                  background: "white",
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 220ms ease",
                  opacity: 0.9,
                }}
                className="nav-underline"
              />
            </Link>
          ))}
        </div>

        {/* LOGO (derecha) */}
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/images/logo.png"
            alt="La Fragua"
            style={{ height: 36, width: "auto" }}
          />
        </Link>
      </nav>

      {/* CSS SOLO PARA HOVER DE LA LINEA */}
      <style>{`
        a:hover .nav-underline {
          transform: scaleX(1);
        }
      `}</style>
    </header>
  );
}