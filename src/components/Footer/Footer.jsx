import "./style.sass";

export default function Footer() {
  return (
    <div className="footer">
      <hr />
      <div className="footer__info">
        <p>Olga Bulgakova</p>

        <div className="footer__contacts">
          <a
            href="https://t.me/bio_ol23"
            title="Telegram"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-telegram"></i>
          </a>

          <a
            href="mailto:oska43@mail.ru"
            title="E-mail"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxs-envelope"></i>
          </a>

          <a
            href="https://github.com/OlgaBuLL"
            title="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
