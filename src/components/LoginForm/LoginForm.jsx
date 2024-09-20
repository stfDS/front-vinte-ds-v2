/* eslint-disable no-console */
import "./loginForm.css"
import axios from "axios"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext.provider"
import { Link } from "react-router-dom"

const LoginForm = ({ closeModal }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { setUpdate, update } = useContext(AuthContext)

  const handleLogin = async event => {
    event.preventDefault()
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}/login`,
        { email, password },
        { withCredentials: true }
      )
      if (response.status === 200) {
        setUpdate(!update)
        closeModal() // Close the modal on successful login
      }
    } catch (error) {
      console.error("Login failed:", error)
    }
  }

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <div className="login-div">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="login-div">
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>
      <button className="login-submit" type="submit">
        Se connecter
      </button>
      <Link to={"/signup"}>
        <button onClick={closeModal} className="signup-modal-btn">
          créer un compte
        </button>
      </Link>
    </form>
  )
}

export default LoginForm
