import "./footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
      <Link to="https://stefane-ds.netlify.app" target="blank">
        <h3>Crée par Stefane Dos Santos Silva</h3>
      </Link>
    </footer>
  )
}

export default Footer
