import "./loginModal.css"
import { useState } from "react"
import Modal from "react-modal"
import LoginForm from "../LoginForm/LoginForm"
import { FaUserAlt } from "react-icons/fa"
import { Link } from "react-router-dom"

// Set the app element for accessibility
Modal.setAppElement("#root")

const LoginModal = ({ txt, className }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <div className="login-modal-content">
      {!txt ? (
        <button onClick={openModal} className="log-header-btn">
          <FaUserAlt className="login-logo" />
        </button>
      ) : (
        <Link className={className}>
          <button onClick={openModal}>{txt}</button>
        </Link>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Login Modal"
        className="login-modal"
        overlayClassName="overlay"
      >
        <h2>Connexion</h2>
        <LoginForm closeModal={closeModal} />
        <button className="close-button" onClick={closeModal}>
          Fermer
        </button>
      </Modal>
    </div>
  )
}

export default LoginModal
