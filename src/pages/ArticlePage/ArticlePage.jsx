import { useParams } from "react-router-dom"
import "./articlePage.css"
import { useEffect, useState } from "react"
import axios from "axios"
import ImageModal from "../../components/ImageModal/ImageModal"

const ArticlePage = () => {
  const { id } = useParams()
  const [dataOffer, setDataOffer] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openModal = index => {
    setCurrentImageIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const goToNext = () => {
    if (
      dataOffer.product_pictures &&
      currentImageIndex < dataOffer.product_pictures.length - 1
    ) {
      setCurrentImageIndex(currentImageIndex + 1)
    }
  }

  const goToPrevious = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_BASE_URL}/offer/${id}`,
          {
            withCredentials: false
          }
        )
        setDataOffer(response.data)
        setIsLoading(false)
        // console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [id])

  return isLoading ? (
    <h1>Is Loading</h1>
  ) : (
    <main>
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
            <p className="p-left">Prix</p>
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
        </div>
      </section>
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        images={dataOffer.product_pictures.map(picture => picture.secure_url)}
        currentIndex={currentImageIndex}
        goToNext={goToNext}
        goToPrevious={goToPrevious}
      />
    </main>
  )
}

export default ArticlePage
