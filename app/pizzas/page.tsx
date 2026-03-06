import Image from "next/image";

const pizzas = [
  {
    nombre: "Margherita",
    desc: "Salsa de tomate estilo San Marzano, mozzarella y albahaca fresca.",
  },
  {
    nombre: "Calabresa",
    desc: "Salsa de tomate estilo San Marzano, mozzarella y pepperoni.",
  },
  {
    nombre: "Caprichosa",
    desc: "Salsa de tomate estilo San Marzano, mozzarella, jamón crudo y queso roquefort.",
  },
  {
    nombre: "Champiñones",
    desc: "Salsa de tomate estilo San Marzano, mozzarella y champiñones frescos.",
  },
  {
    nombre: "Ali'li Mush",
    desc: "Salsa blanca de trufa, queso de cabra, cebolla, aceitunas negras, aceite de trufas y champiñones.",
  },
  {
    nombre: "Capricciosa Simple",
    desc: "Tomate, mozzarella, champiñones y olivas negras.",
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
              Pizzas estilo napolitano elaboradas con masa de larga fermentación
              y cocidas en horno de leña.
            </p>
          </div>

          <div className="pizzasGrid">

            {pizzas.map((pizza) => (
              <article key={pizza.nombre} className="pizzaCard">

                <div className="pizzaImageWrap">
                  <Image
                    src="/images/logoblanco.png"
                    alt={pizza.nombre}
                    width={200}
                    height={200}
                    className="pizzaImage"
                  />
                </div>

                <div className="pizzaBody">

                  <h2 className="pizzaName">
                    {pizza.nombre}
                  </h2>

                  <p className="pizzaDesc">
                    {pizza.desc}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>
    </main>
  );
}