import "./homeArticle.css"
import { Link } from "react-router-dom"

const HomeArticle = ({ offer }) => {
  return (
    <article className="home-article">
      <Link to={`/offer/${offer._id}`} className="home-article-link">
        <div className="home-offer-pic">
          {offer.product_pictures[0].secure_url && (
            <img src={offer.product_pictures[0].secure_url} alt="" />
          )}
        </div>
        <div className="home-product-details">
          <div>
            <p>{offer.product_details[0].MARQUE}</p>
          </div>
          <div>
            <p>{offer.product_details[1].TAILLE}</p>
          </div>
          <div>
            <p>{offer.product_price} €</p>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default HomeArticle
