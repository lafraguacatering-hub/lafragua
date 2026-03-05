"use client";

import { useMemo, useState } from "react";

export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Consulta - La Fragua (${nombre || "Cliente"})`);
    const body = encodeURIComponent(
      `Nombre: ${nombre}\nTeléfono: ${telefono}\nEmail: ${email}\n\nMensaje:\n${mensaje}\n`
    );
    return `mailto:lafraguacatering@gmail.com?subject=${subject}&body=${body}`;
  }, [nombre, telefono, email, mensaje]);

  return (
    <div className="contactCard">
      <h3 className="contactTitle">Contactarnos</h3>
      <p className="contactSubtitle">
        Dejanos tus datos y el mensaje. Al enviar, se abre tu mail con todo listo.
      </p>

      <div className="contactGrid">
        <input
          className="input"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          className="input"
          placeholder="Teléfono / WhatsApp"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <input
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <textarea
        className="textarea"
        placeholder="Contanos qué necesitás (fecha, cantidad de personas, zona, etc.)"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        rows={5}
      />

      <a className="btnPrimary" href={mailtoHref}>
        Enviar consulta
      </a>

      <div className="contactSmall">
        También podés escribir directo por WhatsApp:{" "}
        <a className="linkInline" href="https://wa.me/5491130835097" target="_blank" rel="noreferrer">
          +54 9 11 3083-5097
        </a>
      </div>
    </div>
  );
}