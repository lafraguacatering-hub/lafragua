import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      <h1 style={{ fontSize: 48, fontWeight: "bold" }}>
  La Fragua
</h1>
      <p>Asado argentino + Pizzas napolitanas al horno de leña</p>

      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
        <Link href="/asado">Asado</Link>
        <Link href="/pizzas">Pizzas</Link>
        <Link href="/productos">Nuestros productos</Link>
        <Link href="/contacto">Contacto</Link>
      </div>
    </main>
  );
}