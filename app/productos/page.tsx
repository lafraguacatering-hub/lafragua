import Image from "next/image";

const productos = [
  { nombre: "Delantales", precio: "$25.000" },
  { nombre: "Cortadora de Pizza", precio: "$12.000" },
  { nombre: "Parrilla de piso", precio: "$95.000" },
  { nombre: "Chulengo", precio: "$120.000" },
  { nombre: "Fogonero", precio: "$85.000" },
  { nombre: "Piedra Refractaria para el horno", precio: "$18.000" },
  { nombre: "Tabla de Madera Maciza Multiuso", precio: "$30.000" },
  { nombre: "Cuchillo de Asado 30cm", precio: "$28.000" },
];

export default function ProductosPage() {
  return (
    <main className="productsPage">
      <div className="productsContainer">
        <h1 className="productsTitle">Productos</h1>

        <div className="productsGrid">
          {productos.map((producto, i) => (
            <div key={i} className="productCard">
              <div className="productImageWrapper">
                <Image
                  src="/images/logoblanco.png"
                  alt={producto.nombre}
                  width={200}
                  height={200}
                  className="productImage"
                />
              </div>

              <h3 className="productName">{producto.nombre}</h3>
              <p className="productPrice">{producto.precio}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}