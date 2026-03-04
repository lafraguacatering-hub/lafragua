export default function FloatingButtons() {
    return (
      <div
        style={{
          position: "fixed",
          right: 18,
          bottom: 18,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          zIndex: 9999,
        }}
      >
        {/* Instagram */}
        <a
          href="https://www.instagram.com/lafraguacatering/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram La Fragua"
          title="Instagram"
          style={btnStyleLight}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M17.5 6.5h.01"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </a>
  
        {/* WhatsApp */}
        <a
          href="https://wa.me/541130835097?text=Hola%20La%20Fragua!%20Quiero%20cotizar%20un%20evento."
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp La Fragua"
          title="WhatsApp"
          style={btnStyleDark}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M20 11.9A8 8 0 0 1 7.6 19L4 20l1-3.5A8 8 0 1 1 20 11.9Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M9.3 9.2c.2-.5.4-.5.6-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.5-.1.7l-.5.6c-.1.1-.1.3 0 .5.4.8 1.3 1.7 2.1 2.1.2.1.4.1.5 0l.6-.5c.2-.2.5-.2.7-.1l1.6.7c.3.1.4.3.4.5v.5c0 .2 0 .4-.5.6-.5.2-1.6.6-3.1 0-1.5-.6-3.2-2.3-3.8-3.8-.6-1.5-.2-2.6 0-3.1Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    );
  }
  
  const btnBase: React.CSSProperties = {
    width: 52,
    height: 52,
    borderRadius: 999,
    display: "grid",
    placeItems: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.20)",
    textDecoration: "none",
  };
  
  const btnStyleLight: React.CSSProperties = {
    ...btnBase,
    background: "white",
    color: "#111",
    border: "1px solid rgba(0,0,0,0.12)",
  };
  
  const btnStyleDark: React.CSSProperties = {
    ...btnBase,
    background: "#111",
    color: "white",
    border: "1px solid rgba(255,255,255,0.12)",
  };