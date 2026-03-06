import Image from "next/image";

const pizzas = [
  {
    nombre: "Margherita",
    desc: "Salsa de tomate estilo San Marzano, mozzarella y albahaca fresca.",
    destacada: false,
  },
  {
    nombre: "Calabresa",
    desc: "Salsa de tomate estilo San Marzano, mozzarella y pepperoni.",
    destacada: false,
  },
  {
    nombre: "Malcriada",
    desc: "Salsa de tomate estilo San Marzano, mozzarella, jamón crudo y queso roquefort.",
    destacada: true,
  },
  {
    nombre: "Champiñones",
    desc: "Salsa de tomate estilo San Marzano, mozzarella y champiñones frescos.",
    destacada: false,
  },
  {
    nombre: "Ali'li Mush",
    desc: "Salsa blanca de trufa, queso de cabra, cebolla, aceitunas negras, aceite de trufas y champiñones.",
    destacada: false,
  },
  {
    nombre: "Capricciosa",
    desc: "Salsa de tomate estilo San Marzano, mozzarella, champiñones y olivas negras.",
    destacada: false,
  },
];

export default function Pizzas() {
  return (
    <main className="page">
      <section className="section pizzasPage">
        <div className="container pizzasContainer">
          <div className="pizzasIntro">
            <p className="pizzasKicker">HORNO DE LEÑA · MASA MADRE</p>
            <h1 className="h1 pizzasTitle">Pizzas Napolitanas</h1>
            <p className="p pizzasText">
              Nuestra carta reúne recetas clásicas y versiones con identidad propia,
              cocidas a fuego real para lograr una pizza napolitana liviana,
              aireada y llena de sabor.
            </p>
          </div>

          <div className="pizzasGrid">
            {pizzas.map((pizza) => (
              <article
                key={pizza.nombre}
                className={`pizzaCard ${pizza.destacada ? "pizzaCardFeatured" : ""}`}
              >
                <div className="pizzaImageWrap">
                  {pizza.destacada && (
                    <span className="pizzaFeaturedBadge">Destacada del mes</span>
                  )}

                  <Image
                    src="/images/logoblanco.png"
                    alt={pizza.nombre}
                    width={220}
                    height={220}
                    className="pizzaImage"
                  />
                </div>

                <div className="pizzaBody">
                  <span className="pizzaTag">Horno de leña</span>

                  <h2 className="pizzaName">{pizza.nombre}</h2>

                  <p className="pizzaDesc">{pizza.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}