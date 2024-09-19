import { useParams } from "react-router-dom"
import "./articlePage.css"
import { useEffect, useState } from "react"
import axios from "axios"
import ImageModal from "../../components/ImageModal/ImageModal"
import Article from "../../components/Article/Article"

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
      <Article dataOffer={dataOffer} openModal={openModal} />
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
