// app/components/Navbar.tsx
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
        padding: "14px 24px",
        background: "rgba(0,0,0,0.45)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <nav
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <Link
          href="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: 700,
            letterSpacing: 0.5,
          }}
        >
          La Fragua
        </Link>

        <div style={{ display: "flex", gap: 16 }}>
          <Link href="/asado" style={{ color: "white", textDecoration: "none", opacity: 0.9 }}>
            Asado
          </Link>
          <Link href="/pizzas" style={{ color: "white", textDecoration: "none", opacity: 0.9 }}>
            Pizzas
          </Link>
          <Link href="/productos" style={{ color: "white", textDecoration: "none", opacity: 0.9 }}>
            Productos
          </Link>
          <Link href="/contacto" style={{ color: "white", textDecoration: "none", opacity: 0.9 }}>
            Contacto
          </Link>
        </div>
      </nav>
    </header>
  );
}