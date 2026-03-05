export default function FloatingButtons() {
    return (
      <div className="floatWrap">
        {/* WhatsApp directo */}
        <a
          className="floatBtn"
          href="https://wa.me/5491130835097"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          title="WhatsApp"
        >
          💬
        </a>
  
        {/* Instagram */}
        <a
          className="floatBtn ghostBtn"
          href="https://www.instagram.com/lafraguacatering/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          title="Instagram"
        >
          📷
        </a>
      </div>
    );
  }