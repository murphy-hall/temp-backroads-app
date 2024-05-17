import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((item) => {
            return (
              <li>
                <a key={item.id} href={item.href} className="nav-link">
                  {" "}
                  {item.text}{" "}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="nav-icons">
          {socialLinks.map((item) => {
            return (
              <li>
                <a
                  key={item.id}
                  href={item.href}
                  target={item.target}
                  className="nav-icon"
                >
                  <i className={item.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
