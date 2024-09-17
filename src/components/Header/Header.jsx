import "./header.css"
import { Link } from "react-router-dom"
import { FaUserAlt } from "react-icons/fa"

const Header = () => {
  return (
    <header>
      <Link to="/" className="logotop">
        <img
          src="https://static.vinted.com/assets/web-logo/default/logo.svg"
          alt="vinted logo"
        />
      </Link>
      <div className="log-sell">
        <Link to="/publish" className="sell-link">
          <button>vend tes articles</button>
        </Link>
        <button className="login-mobile-btn">
          <FaUserAlt className="login-logo-mobile" />
        </button>
      </div>
    </header>
  )
}

export default Header
