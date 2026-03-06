"use client";

import { useMemo, useState } from "react";

type Servicio = "asado" | "pizzas";
type Turno = "mediodia" | "noche";

const MENUS_ASADO = ["Menú La Fragua", "Menú Tradición", "Menú Tango"];

const VARIEDADES_PIZZA = [
  "Margherita",
  "Calabresa",
  "Malcriada",
  "Champiñones",
  "Ali'li Mush",
  "Capricciosa",
];

const EVENTOS = [
  "Cumpleaños",
  "Evento corporativo",
  "Casamiento",
  "Reunión social",
  "Otro",
];

function formatCurrency(value: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatDateForDisplay(date: Date) {
  return new Intl.DateTimeFormat("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

export default function CotizadorPage() {
  const [servicio, setServicio] = useState<Servicio>("asado");
  const [personas, setPersonas] = useState<number>(15);
  const [fecha, setFecha] = useState("");
  const [direccionEvento, setDireccionEvento] = useState("");
  const [evento, setEvento] = useState(EVENTOS[0]);
  const [turno, setTurno] = useState<Turno>("mediodia");
  const [menuAsado, setMenuAsado] = useState<string>(MENUS_ASADO[0]);
  const [variedadesPizza, setVariedadesPizza] = useState<string[]>([]);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mail, setMail] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resultado, setResultado] = useState<null | {
    total: number;
    subtotal: number;
    pizzasTotales: number;
    direccionEvento: string;
    menuAsado: string | null;
    variedadesPizza: string[];
    servicio: Servicio;
    personas: number;
    fecha: string;
    evento: string;
    turno: Turno;
  }>(null);

  const ultimaActualizacion = useMemo(() => formatDateForDisplay(new Date()), []);

  const minimoServicio = servicio === "asado" ? 15 : 10;

  function toggleVariedad(variedad: string) {
    setVariedadesPizza((prev) => {
      if (prev.includes(variedad)) {
        return prev.filter((item) => item !== variedad);
      }
      if (prev.length >= 4) {
        return prev;
      }
      return [...prev, variedad];
    });
  }

  async function handleCotizar(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setResultado(null);

    setLoading(true);
    try {
      const res = await fetch("/api/cotizar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          servicio,
          personas,
          fecha,
          direccionEvento,
          menuAsado,
          variedadesPizza,
          nombre,
          telefono,
          mail,
          evento,
          turno,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "No se pudo calcular la cotización.");
        return;
      }

      setResultado(data);
    } catch {
      setError("No se pudo conectar con el cotizador.");
    } finally {
      setLoading(false);
    }
  }

  const whatsappNumber = "54911XXXXXXXX";
  const emailDestino = "lafragua@gmail.com";

  const whatsappText = resultado
    ? encodeURIComponent(
        [
          "Hola, quiero avanzar con esta cotización de La Fragua.",
          "",
          `Servicio: ${resultado.servicio === "asado" ? "Asado" : "Pizzas"}`,
          `Evento: ${resultado.evento}`,
          `Turno: ${resultado.turno === "mediodia" ? "Mediodía" : "Noche"}`,
          `Fecha: ${resultado.fecha}`,
          `Dirección: ${resultado.direccionEvento}`,
          `Personas: ${resultado.personas}`,
          resultado.servicio === "asado"
            ? `Menú: ${resultado.menuAsado}`
            : `Variedades: ${resultado.variedadesPizza.join(", ")}`,
          resultado.servicio === "pizzas"
            ? `Pizzas estimadas: ${resultado.pizzasTotales.toFixed(2)}`
            : "",
          `Precio estimado: ${formatCurrency(resultado.total)}`,
          "",
          `Nombre: ${nombre}`,
          `Teléfono: ${telefono}`,
          `Mail: ${mail}`,
        ]
          .filter(Boolean)
          .join("\n")
      )
    : "";

  const emailSubject = encodeURIComponent("Consulta de cotización - La Fragua");
  const emailBody = resultado
    ? encodeURIComponent(
        [
          "Hola, quiero avanzar con esta cotización de La Fragua.",
          "",
          `Servicio: ${resultado.servicio === "asado" ? "Asado" : "Pizzas"}`,
          `Evento: ${resultado.evento}`,
          `Turno: ${resultado.turno === "mediodia" ? "Mediodía" : "Noche"}`,
          `Fecha: ${resultado.fecha}`,
          `Dirección: ${resultado.direccionEvento}`,
          `Personas: ${resultado.personas}`,
          resultado.servicio === "asado"
            ? `Menú: ${resultado.menuAsado}`
            : `Variedades: ${resultado.variedadesPizza.join(", ")}`,
          resultado.servicio === "pizzas"
            ? `Pizzas estimadas: ${resultado.pizzasTotales.toFixed(2)}`
            : "",
          `Precio estimado: ${formatCurrency(resultado.total)}`,
          "",
          `Nombre: ${nombre}`,
          `Teléfono: ${telefono}`,
          `Mail: ${mail}`,
        ]
          .filter(Boolean)
          .join("\n")
      )
    : "";

  return (
    <main className="page">
      <section className="section cotizadorPage">
        <div className="container cotizadorContainer">
          <div className="cotizadorIntro">
            <p className="cotizadorKicker">LA FRAGUA · COTIZADOR</p>
            <h1 className="h1 cotizadorTitle">Cotizá tu evento</h1>
            <p className="p cotizadorText">
              Calculá un valor estimado para tu evento de asado o pizzas
              napolitanas. La distancia se calcula automáticamente desde
              Mansilla 967, Boulogne Sur Mer, San Isidro.
            </p>
          </div>

          <div className="cotizadorLayout">
            <form className="cotizadorFormCard" onSubmit={handleCotizar}>
              <div className="cotizadorFieldGroup">
                <label className="cotizadorLabel">Tipo de servicio</label>
                <div className="cotizadorServiceSwitch">
                  <button
                    type="button"
                    className={`cotizadorServiceBtn ${
                      servicio === "asado" ? "isActive" : ""
                    }`}
                    onClick={() => {
                      setServicio("asado");
                      if (personas < 15) setPersonas(15);
                    }}
                  >
                    Asado
                  </button>
                  <button
                    type="button"
                    className={`cotizadorServiceBtn ${
                      servicio === "pizzas" ? "isActive" : ""
                    }`}
                    onClick={() => {
                      setServicio("pizzas");
                      if (personas < 10) setPersonas(10);
                    }}
                  >
                    Pizzas
                  </button>
                </div>
              </div>

              <div className="cotizadorGrid">
                <div className="cotizadorField">
                  <label className="cotizadorLabel" htmlFor="personas">
                    Cantidad de personas
                  </label>
                  <input
                    id="personas"
                    className="cotizadorInput"
                    type="number"
                    min={minimoServicio}
                    value={personas}
                    onChange={(e) => setPersonas(Number(e.target.value))}
                  />
                </div>

                <div className="cotizadorField">
                  <label className="cotizadorLabel" htmlFor="fecha">
                    Fecha del evento
                  </label>
                  <input
                    id="fecha"
                    className="cotizadorInput"
                    type="date"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                  />
                </div>

                <div className="cotizadorField">
                  <label className="cotizadorLabel" htmlFor="evento">
                    Evento
                  </label>
                  <select
                    id="evento"
                    className="cotizadorInput"
                    value={evento}
                    onChange={(e) => setEvento(e.target.value)}
                  >
                    {EVENTOS.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="cotizadorField">
                  <label className="cotizadorLabel" htmlFor="turno">
                    Horario del evento
                  </label>
                  <select
                    id="turno"
                    className="cotizadorInput"
                    value={turno}
                    onChange={(e) => setTurno(e.target.value as Turno)}
                  >
                    <option value="mediodia">Mediodía</option>
                    <option value="noche">Noche</option>
                  </select>
                </div>

                <div className="cotizadorField cotizadorFieldFull">
                  <label className="cotizadorLabel" htmlFor="direccionEvento">
                    Dirección del evento
                  </label>
                  <input
                    id="direccionEvento"
                    className="cotizadorInput"
                    type="text"
                    placeholder="Ej: Av. del Libertador 1500, San Isidro"
                    value={direccionEvento}
                    onChange={(e) => setDireccionEvento(e.target.value)}
                  />
                </div>
              </div>

              {servicio === "asado" ? (
                <div className="cotizadorFieldGroup">
                  <label className="cotizadorLabel">Menú</label>
                  <div className="cotizadorOptions">
                    {MENUS_ASADO.map((menu) => (
                      <label key={menu} className="cotizadorOptionCard">
                        <input
                          type="radio"
                          name="menu-asado"
                          checked={menuAsado === menu}
                          onChange={() => setMenuAsado(menu)}
                        />
                        <span>{menu}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="cotizadorFieldGroup">
                  <label className="cotizadorLabel">
                    Variedades de pizza (máximo 4)
                  </label>
                  <div className="cotizadorOptions">
                    {VARIEDADES_PIZZA.map((variedad) => {
                      const checked = variedadesPizza.includes(variedad);
                      const disabled =
                        !checked && variedadesPizza.length >= 4;

                      return (
                        <label
                          key={variedad}
                          className={`cotizadorOptionCard ${
                            disabled ? "isDisabled" : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            disabled={disabled}
                            onChange={() => toggleVariedad(variedad)}
                          />
                          <span>{variedad}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="cotizadorFieldGroup">
                <label className="cotizadorLabel">Tus datos</label>
                <div className="cotizadorGrid">
                  <div className="cotizadorField">
                    <input
                      className="cotizadorInput"
                      type="text"
                      placeholder="Nombre"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                    />
                  </div>

                  <div className="cotizadorField">
                    <input
                      className="cotizadorInput"
                      type="text"
                      placeholder="Teléfono"
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                    />
                  </div>

                  <div className="cotizadorField cotizadorFieldFull">
                    <input
                      className="cotizadorInput"
                      type="email"
                      placeholder="Mail"
                      value={mail}
                      onChange={(e) => setMail(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {error && <div className="cotizadorAlert">{error}</div>}

              <button className="cotizadorActionBtn cotizadorSubmit" type="submit">
                {loading ? "Calculando..." : "Calcular cotización"}
              </button>
            </form>

            <aside className="cotizadorResumeCard">
              <p className="cotizadorResumeKicker">Resumen estimado</p>
              <h2 className="cotizadorResumeTitle">
                {resultado
                  ? resultado.servicio === "asado"
                    ? "Evento de asado"
                    : "Evento de pizzas"
                  : "Tu evento"}
              </h2>

              <div className="cotizadorResumeList">
                <div className="cotizadorResumeRow">
                  <span>Servicio</span>
                  <strong>
                    {resultado
                      ? resultado.servicio === "asado"
                        ? "Asado"
                        : "Pizzas"
                      : "A definir"}
                  </strong>
                </div>

                <div className="cotizadorResumeRow">
                  <span>Evento</span>
                  <strong>{resultado?.evento || "A definir"}</strong>
                </div>

                <div className="cotizadorResumeRow">
                  <span>Turno</span>
                  <strong>
                    {resultado
                      ? resultado.turno === "mediodia"
                        ? "Mediodía"
                        : "Noche"
                      : "A definir"}
                  </strong>
                </div>

                <div className="cotizadorResumeRow">
                  <span>Selección</span>
                  <strong>
                    {resultado
                      ? resultado.servicio === "asado"
                        ? resultado.menuAsado
                        : resultado.variedadesPizza.join(", ")
                      : "A definir"}
                  </strong>
                </div>

                <div className="cotizadorResumeRow">
                  <span>Personas</span>
                  <strong>{resultado?.personas || personas}</strong>
                </div>

                {resultado?.servicio === "pizzas" && (
                  <div className="cotizadorResumeRow">
                    <span>Pizzas estimadas</span>
                    <strong>{resultado.pizzasTotales.toFixed(2)}</strong>
                  </div>
                )}

                <div className="cotizadorResumeRow">
                  <span>Fecha</span>
                  <strong>{resultado?.fecha || fecha || "A definir"}</strong>
                </div>

                <div className="cotizadorResumeRow">
                  <span>Dirección</span>
                  <strong>{resultado?.direccionEvento || "A definir"}</strong>
                </div>
              </div>

              <div className="cotizadorTotalBox">
                <span>Precio estimado</span>
                <strong>
                  {resultado ? formatCurrency(resultado.total) : formatCurrency(0)}
                </strong>
              </div>

              <p className="cotizadorMeta">
                Última actualización de precios: {ultimaActualizacion}
              </p>
              <p className="cotizadorMeta">
                Valor estimado sujeto a disponibilidad, distancia, logística y
                confirmación final.
              </p>

              <div className="cotizadorActions">
                <a
                  className={`cotizadorActionBtn ${!resultado ? "isDisabled" : ""}`}
                  href={
                    resultado
                      ? `https://wa.me/${whatsappNumber}?text=${whatsappText}`
                      : "#"
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  Recibir propuesta por WhatsApp
                </a>

                <a
                  className={`cotizadorActionBtn ghost ${
                    !resultado ? "isDisabled" : ""
                  }`}
                  href={
                    resultado
                      ? `mailto:${emailDestino}?subject=${emailSubject}&body=${emailBody}`
                      : "#"
                  }
                >
                  Recibir propuesta por mail
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}