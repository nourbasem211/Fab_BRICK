import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-bar">
      {/* left part */}
      <div className="footer-info">
        <div>
          <div className="footer-title">FabBRICK® 2025</div>
          <div className="footer-address">75019 Paris</div>
          <div className="footer-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaTiktok /></a>
          </div>
        </div>
        <div className="footer-separator"></div>
      </div>
      {/* links */}
      <div className="footer-links">
        <div className="footer-links-group">
          <a href="#">Mode d'emploi revêtement</a>
          <a href="#">Notre catalogue</a>
          <a href="#">Conditions générales de vente</a>
          <a href="#">Politique de confidentialité</a>
        </div>
        <div className="footer-links-group">
          <a href="#">User guide for cladding bricks</a>
          <a href="#">Our Catalog</a>
          <a href="#">General conditions of sale</a>
          <a href="#">Privacy policy</a>
        </div>
      </div>
    </div>
  );
}
