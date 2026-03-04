import Link from "next/link";

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
          padding: "14px 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 18,
        }}
      >
        {/* Logo / Marca */}
        <Link
          href="/"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: 700,
            letterSpacing: 0.5,
          }}
        >
          La Fragua
        </Link>

        {/* Menú */}
        <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
          <Link
            href="/#nosotros"
            style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none" }}
          >
            Nosotros
          </Link>

          <Link
            href="/productos"
            style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none" }}
          >
            Nuestros Productos
          </Link>

          <Link
            href="/#catering"
            style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none" }}
          >
            Servicio de Catering
          </Link>

          <Link
            href="/#experiencias"
            style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none" }}
          >
            Experiencias
          </Link>
        </div>
      </nav>
    </header>
  );
}