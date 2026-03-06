import Image from "next/image";

const menus = [
  {
    emoji: "🔥",
    nombre: "Menú La Fragua",
    items: [
      "Choripán artesanal con chimichurri",
      "Matambre de cerdo al limón",
      "Entraña a la parrilla",
      "Lomo",
      "Colita de cuadril",
      "Postres a consultar",
    ],
  },
  {
    emoji: "🇦🇷",
    nombre: "Menú Tradición",
    items: [
      "Choripán argentino",
      "Mollejas al limón",
      "Matambre de cerdo",
      "Lomo",
      "Ojo de bife",
    ],
  },
  {
    emoji: "🎶",
    nombre: "Menú Tango",
    items: [
      "Chorizo artesanal y picada",
      "Mollejas y entraña",
      "Lomo",
      "Bondiola de cerdo",
      "Postre artesanal",
    ],
  },
];

export default function Asado() {
  return (
    <main className="page">
      <section className="section asadoPage">
        <div className="container asadoContainer">
          <div className="asadoIntro">
            <p className="asadoKicker">CATERING · FUEGO · EXPERIENCIA</p>
            <h1 className="h1 asadoMainTitle">Menús de Asado</h1>
            <p className="p asadoMainText">
              Asado argentino a fuego real, con opciones pensadas para distintos
              tipos de eventos, celebraciones y experiencias gastronómicas.
            </p>
          </div>

          <div className="asadoMenuGrid">
            {menus.map((menu) => (
              <article key={menu.nombre} className="asadoMenuCard">
                <div className="asadoMenuImageWrap">
                  <Image
                    src="/logoblanco.png"
                    alt={menu.nombre}
                    width={220}
                    height={220}
                    className="asadoMenuImage"
                    priority
                  />
                </div>

                <div className="asadoMenuBody">
                  <h2 className="asadoMenuTitle">
                    <span className="asadoMenuEmoji">{menu.emoji}</span>
                    {menu.nombre}
                  </h2>

                  <ul className="asadoMenuList">
                    {menu.items.map((item) => (
                      <li key={item} className="asadoMenuItem">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}