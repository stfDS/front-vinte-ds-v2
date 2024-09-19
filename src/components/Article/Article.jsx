import "./article.css"
const Article = ({ dataOffer, openModal }) => {
  return (
    <section className="article-page-section">
      {dataOffer.product_pictures.length === 1 ? (
        <div className="article-page-image">
          <img src={dataOffer.product_image.secure_url} alt="" />
        </div>
      ) : (
        <div className="article-page-pictures">
          {dataOffer.product_pictures.map((picture, index) => (
            <div key={picture.public_id}>
              <img
                src={picture.secure_url}
                onClick={() => openModal(index)}
                alt=""
              />
            </div>
          ))}
        </div>
      )}
      <div className="offer-page-info">
        <div className="offer-info-txt">
          <p className="p-left">PRIX</p>
          <p className="p-right">{dataOffer.product_price} €</p>
        </div>
        {dataOffer.product_details.map(detail => {
          const keysToFind = Object.keys(detail)
          const key = keysToFind[0]
          return (
            <div className="offer-info-txt" key={key}>
              <p className="p-left">{key}</p>
              <p className="p-right">{detail[key]}</p>
            </div>
          )
        })}
        <div className="offer-owner-div">
          <div className="owner-avatar">
            <img src={dataOffer.owner.account.avatar} alt="" />
          </div>
          <div className="owner-username">
            <p>{dataOffer.owner.account.username}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Article
