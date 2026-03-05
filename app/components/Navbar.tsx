"use client";

import Link from "next/link";

export default function Navbar() {
  const links = [
    { name: "Nosotros", href: "/" },
    { name: "Nuestros Productos", href: "/productos" },
    { name: "Servicio de Catering", href: "/asado" },
    { name: "Experiencias", href: "/experiencias" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(6px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 24px",
        }}
      >
        {/* Nombre */}
        <div
          style={{
            fontWeight: 700,
            fontSize: 18,
            color: "#fff",
          }}
        >
          La Fragua
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: 30 }}>
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              style={{
                position: "relative",
                textDecoration: "none",
                color: "#fff",
                fontWeight: 500,
                paddingBottom: 4,
              }}
              onMouseEnter={(e) => {
                const underline = e.currentTarget.querySelector(
                  ".underline"
                ) as HTMLElement;
                underline.style.width = "100%";
              }}
              onMouseLeave={(e) => {
                const underline = e.currentTarget.querySelector(
                  ".underline"
                ) as HTMLElement;
                underline.style.width = "0%";
              }}
            >
              {link.name}

              {/* Línea animada */}
              <span
                className="underline"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "0%",
                  height: 2,
                  background: "#fff",
                  transition: "width 0.3s ease",
                }}
              />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}