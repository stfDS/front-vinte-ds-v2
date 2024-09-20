import "./header.css"
import { Link } from "react-router-dom"
import LoginModal from "../LoginModal/LoginModal"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext.provider"
import UserModal from "../UserModal/UserModal"

const Header = () => {
  const { isAuthenticated } = useContext(AuthContext)
  return (
    <header>
      <Link to="/" className="logotop">
        <img
          src="https://static.vinted.com/assets/web-logo/default/logo.svg"
          alt="vinted logo"
        />
      </Link>
      <div className="log-sell">
        {/* <Link to="/publish" className="sell-link"> */}
        {isAuthenticated ? (
          <Link className="sell-link">
            <button>vend tes articles</button>
          </Link>
        ) : (
          <LoginModal txt={"Vend tes articles"} className={"sell-link"} />
        )}

        {isAuthenticated ? <UserModal /> : <LoginModal />}
      </div>
    </header>
  )
}

export default Header
