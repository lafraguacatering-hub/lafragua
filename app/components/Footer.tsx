export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerInner">
          <div>
            <div className="footerBrand">La Fragua</div>
            <div className="footerMuted">Buenos Aires, Argentina</div>
          </div>

          <div>
            <div className="footerBrand">Contacto</div>

            <div className="footerLine">
              WhatsApp:{" "}
              <a
                className="footerLink"
                href="https://wa.me/5491130835097"
                target="_blank"
                rel="noreferrer"
              >
                +54 9 11 3083-5097
              </a>
            </div>

            <div className="footerLine">
              Instagram:{" "}
              <a
                className="footerLink"
                href="https://www.instagram.com/lafraguacatering/"
                target="_blank"
                rel="noreferrer"
              >
                @lafraguacatering
              </a>
            </div>

            <div className="footerLine">
              Email:{" "}
              <a className="footerLink" href="mailto:lafraguacatering@gmail.com">
                lafraguacatering@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="footerBottom">
          © {new Date().getFullYear()} La Fragua
        </div>
      </div>
    </footer>
  );
}

