import Link from "next/link";

const linkStyle = {
  color: "white",
  textDecoration: "none",
  padding: "8px 12px",
  borderRadius: "6px",
  transition: "all 0.25s ease",
};

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
        {/* MENÚ */}
        <div style={{ display: "flex", gap: 20 }}>
          <Link
            href="/#nosotros"
            style={linkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            Nosotros
          </Link>

          <Link
            href="/productos"
            style={linkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            Nuestros Productos
          </Link>

          <Link
            href="/#catering"
            style={linkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            Servicio de Catering
          </Link>

          <Link
            href="/#experiencias"
            style={linkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            Experiencias
          </Link>
        </div>

        {/* LOGO */}
        <Link href="/">
          <img
            src="/images/logo.png"
            alt="La Fragua"
            style={{
              height: 38,
              cursor: "pointer",
            }}
          />
        </Link>
      </nav>
    </header>
  );
}