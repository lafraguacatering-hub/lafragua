const WA_MESSAGE =
  "Hola%20La%20Fragua!%20Quiero%20cotizar%20un%20evento.%0A%0A" +
  "Mi%20nombre%3A%20____%0A" +
  "Cantidad%20de%20personas%3A%20____%0A" +
  "Fecha%3A%20____%0A" +
  "Zona%3A%20____%0A";

export default function FloatingButtons() {
  return (
    <div className="floatWrap">
      {/* WhatsApp */}
      <a
        className="floatBtn waBtn"
        href={`https://wa.me/5491130835097?text=${WA_MESSAGE}`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        <span className="tooltip">WhatsApp</span>
        <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">
          <path
            fill="currentColor"
            d="M19.11 17.59c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.15-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.6-.9-2.19-.24-.58-.48-.5-.66-.51h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44 0 1.44 1.05 2.83 1.19 3.02.15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.97-1.37.24-.66.24-1.24.17-1.37-.07-.13-.27-.2-.56-.34ZM16.03 5.33c-5.9 0-10.7 4.8-10.7 10.7 0 1.9.5 3.76 1.46 5.4L5.33 26.7l5.39-1.41a10.64 10.64 0 0 0 5.31 1.42c5.9 0 10.7-4.8 10.7-10.7 0-5.9-4.8-10.68-10.7-10.68Zm0 19.55c-1.73 0-3.42-.47-4.9-1.36l-.35-.2-3.2.84.85-3.12-.23-.32a8.81 8.81 0 0 1-1.43-4.8c0-4.9 3.99-8.9 8.9-8.9 4.9 0 8.9 4 8.9 8.9 0 4.9-4 8.96-8.9 8.96Z"
          />
        </svg>
      </a>

      {/* Instagram */}
      <a
        className="floatBtn igBtn"
        href="https://www.instagram.com/lafraguacatering/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        title="Instagram"
      >
        <span className="tooltip">Instagram</span>
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path
            fill="currentColor"
            d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.65-2.15a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
          />
        </svg>
      </a>
    </div>
  );
}