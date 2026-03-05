export default function FloatingButtons() {
    return (
      <div className="floatWrap">
        <a
          className="floatBtn"
          href="https://wa.me/5491130835097"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          title="WhatsApp"
        >
          {/* Icono simple */}
          <span className="floatIcon">💬</span>
        </a>
  
        <a
          className="floatBtn ghostBtn"
          href="https://www.instagram.com/lafraguacatering/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          title="Instagram"
        >
          <span className="floatIcon">📷</span>
        </a>
      </div>
    );
  }