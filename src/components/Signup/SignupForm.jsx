/* eslint-disable react/no-unescaped-entities */
import "./signupForm.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
// import toast from "react-hot-toast"

const SignupForm = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [newsletter, setNewsletter] = useState(false)
  const [preview, setPreview] = useState("")
  const [avatar, setAvatar] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async event => {
    event.preventDefault()
    const formData = new FormData()
    formData.append("username", username)
    formData.append("email", email)
    formData.append("password", password)
    formData.append("picture", avatar)
    formData.append("newsletter", newsletter)
    try {
      await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}/signup`,
        formData,
        {
          withCredentials: false
        }
      )
      //   toast.success("création de compte terminé", {
      //     style: {
      //       border: "1px solid #2baeb7",
      //       padding: "10px",
      //       color: "#2baeb7"
      //     },
      //     iconTheme: {
      //       primary: "#2baeb7"
      //     }
      //   })
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <div className="avatar-div">
        <label htmlFor="avatar">Choisissez une photo de profil</label>
        {!preview ? (
          <div className="input-form-avatar">
            <p>Aucun fichier sélectionné pour le moment</p>
          </div>
        ) : (
          <div className="input-form-avatar-preview">
            <img src={preview} alt="avatar preview" />
          </div>
        )}
        <input
          id="avatar"
          type="file"
          accept="image/*"
          name="avatar"
          onChange={event => {
            setAvatar(event.target.files[0])
            setPreview(URL.createObjectURL(event.target.files[0]))
          }}
        />
      </div>

      <div className="input-form">
        <label htmlFor="avatar">Nom d'utilisateur</label>

        <input
          id="username"
          type="text"
          placeholder="ex : jean98g"
          name="username"
          onChange={event => {
            setUsername(event.target.value)
          }}
          required
        />
      </div>
      <div className="input-form">
        <label htmlFor="avatar">Email</label>

        <input
          id="email"
          type="email"
          placeholder="email@email.com"
          name="email"
          onChange={event => {
            setEmail(event.target.value)
          }}
          required
        />
      </div>
      <div className="input-form">
        <label htmlFor="avatar">Mot de passe</label>
        <input
          id="password"
          type="password"
          placeholder="*******"
          name="password"
          onChange={event => {
            setPassword(event.target.value)
          }}
          required
        />
      </div>

      <div className="checkbox-newsletter">
        <input
          id="newsletter"
          className="substituted"
          type="checkbox"
          aria-hidden="true"
          onChange={() => {
            setNewsletter(!newsletter)
          }}
        />
        <label htmlFor="newsletter">S'inscrire à notre newsletter</label>
      </div>
      <div className="submit-btn-div">
        <button type="submit">S'inscrire</button>
      </div>
    </form>
  )
}

export default SignupForm
