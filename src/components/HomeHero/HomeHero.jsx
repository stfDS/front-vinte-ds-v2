import "./homeHero.css"
import { Link } from "react-router-dom"

const HomeHero = () => {
  return (
    <div className="home-in-hero">
      <img
        src="https://res.cloudinary.com/drhdqhrbn/image/upload/v1726258711/Vinted/banner-wide-9b45d0aa9a311c4ff6013e9cf3bc2b6646468be3d2f553192c63598685fcc177_xbzokf.jpg"
        alt=""
      />
      <h1>Prêts à faire du tri dans vos placards ?</h1>

      <Link to="/publish">
        <button className="in-hero-btn">Commencer à vendre</button>
      </Link>
    </div>
  )
}

export default HomeHero
