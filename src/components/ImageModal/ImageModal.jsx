import Modal from "react-modal"
import "./imageModal.css"

Modal.setAppElement("#root")

const ImageModal = ({
  isOpen,
  onRequestClose,
  images,
  currentIndex,
  goToNext,
  goToPrevious
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-content">
        <button onClick={goToPrevious} className="nav-button prev-button">
          &#10094;
        </button>
        <div className="modal-image-div">
          <img src={images[currentIndex]} alt="Product" />
        </div>
        <button onClick={goToNext} className="nav-button next-button">
          &#10095;
        </button>
        <div className="close-button-div">
          <button onClick={onRequestClose} className="close-button">
            Close
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default ImageModal
