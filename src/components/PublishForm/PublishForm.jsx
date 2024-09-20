/* eslint-disable no-console */
import "./publishForm.css"
import axios from "axios"
import { useContext, useState } from "react"

import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext.provider"

const PublishForm = () => {
  const { isAuthenticated } = useContext(AuthContext)
  const [description, setDescription] = useState("")
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [condition, setCondition] = useState("")
  const [city, setCity] = useState("")
  const [brand, setBrand] = useState("")
  const [size, setSize] = useState("")
  const [color, setColor] = useState("")
  const [picture, setPicture] = useState()
  const [preview, setPreview] = useState("")
  const navigate = useNavigate()

  const handlePictureChange = event => {
    const file = event.target.files[0]
    setPicture(file)
    if (file) {
      const previewUrl = URL.createObjectURL(file)
      setPreview(previewUrl)
    }
  }

  const handleConditionChange = value => {
    setCondition(prevCondition => (prevCondition === value ? "" : value))
  }
  const handleSubmit = async event => {
    event.preventDefault()

    if (!isAuthenticated) {
      alert("Vous devez être connecté pour publier une annonce.")
      return
    }

    try {
      if (!title || !description || !price || !picture) {
        alert(
          "Veuillez remplir les champs obligatoires : titre, description, prix, et image."
        )
        return
      }

      const formData = new FormData()
      formData.append("title", title)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("city", city)
      formData.append("condition", condition)
      formData.append("brand", brand)
      formData.append("color", color)
      formData.append("picture", picture)
      formData.append("size", size)

      await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}/offer/publish`,
        formData,
        {
          withCredentials: true
        }
      )

      navigate("/")
    } catch (error) {
      console.error(error)
      alert("Une erreur est survenue lors de la publication.")
    }
  }

  return (
    <div className="publish-form-container">
      <form onSubmit={handleSubmit}>
        <div className="input-publish-form">
          <label htmlFor="title">Titre</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="input-publish-form">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="input-publish-form">
          <label htmlFor="price">Prix</label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={e => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="input-publish-form">
          <label>État</label>

          <p>Neuf : </p>
          <div className="checkbox-wrapper-55">
            <label className="rocker rocker-small">
              <input
                type="checkbox"
                id="new"
                value="neuf"
                checked={condition === "neuf"}
                onChange={() => handleConditionChange("neuf")}
              />
              <span className="switch-left">oui</span>
              <span className="switch-right">Non</span>
            </label>
          </div>

          <p>Occasion :</p>
          <div className="checkbox-wrapper-55">
            <label className="rocker rocker-small">
              <input
                type="checkbox"
                id="used"
                value="occasion"
                checked={condition === "occasion"}
                onChange={() => handleConditionChange("occasion")}
              />
              <span className="switch-left">oui</span>
              <span className="switch-right">Non</span>
            </label>
          </div>
        </div>
        <div className="input-publish-form">
          <label htmlFor="city">Ville</label>
          <input
            id="city"
            type="text"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
        </div>

        <div className="input-publish-form">
          <label htmlFor="brand">Marque</label>
          <input
            id="brand"
            type="text"
            value={brand}
            onChange={e => setBrand(e.target.value)}
          />
        </div>

        <div className="input-publish-form">
          <label htmlFor="size">Taille</label>
          <input
            id="size"
            type="text"
            value={size}
            onChange={e => setSize(e.target.value)}
          />
        </div>

        <div className="input-publish-form">
          <label htmlFor="color">Couleur</label>
          <input
            id="color"
            type="text"
            value={color}
            onChange={e => setColor(e.target.value)}
          />
        </div>

        <div className="input-publish-form">
          <label htmlFor="picture">Image</label>
          <input
            id="picture"
            type="file"
            onChange={handlePictureChange}
            accept="image/*"
            required
          />
          {preview && (
            <img
              src={preview}
              alt="Prévisualisation"
              style={{ width: "200px", height: "200px", marginTop: "10px" }}
            />
          )}
        </div>
        <div className="submit-btn-div">
          <button type="submit">Publier</button>
        </div>
      </form>
    </div>
  )
}

export default PublishForm
