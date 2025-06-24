import logo from "../assets/logo.png";
import footerImage from "../assets/footer-image.png";

export default function Footer() {
  return (
    <footer>
      <div className="txt">
        <p>未滿18歲禁止飲酒</p>
        <span>
          <img src={footerImage} />
        </span>
        <p>禁止酒駕</p>
      </div>

      <div className="logo">
        <img src={logo} />
      </div>

      <div className="copyright">Copyright @ Sip & Search 微醺指南</div>
    </footer>
  );
}
