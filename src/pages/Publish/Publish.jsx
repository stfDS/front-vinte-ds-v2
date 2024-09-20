import "./publish.css"
import PublishForm from "../../components/PublishForm/PublishForm"

const Publish = () => {
  return (
    <main className="publish-main">
      <section className="publish-page-title">
        <h1>Publier une annonce</h1>
      </section>
      <section className="publish-form-section">
        <PublishForm />
      </section>
    </main>
  )
}

export default Publish
