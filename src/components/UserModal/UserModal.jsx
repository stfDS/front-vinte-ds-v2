import "./userModal.css"
import { useContext, useState } from "react"
import Modal from "react-modal"
import { AuthContext } from "../../context/AuthContext.provider"

// Set the app element for accessibility
Modal.setAppElement("#root")

const UserModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const { user, handleLogout } = useContext(AuthContext)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <div className="user-modal-content">
      <button onClick={openModal} className="user-header-btn">
        <img src={user.account.avatar} />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Useracount Modal"
        className="user-modal"
        overlayClassName="overlay"
      >
        <h2>{user.account.username}</h2>
        <div className="modal-avatar">
          <img src={user.account.avatar} alt="user avatar" />
        </div>
        <button className="close-button" onClick={handleLogout}>
          Deconnection
        </button>
        <button className="close-button" onClick={closeModal}>
          Fermer
        </button>
      </Modal>
    </div>
  )
}

export default UserModal
