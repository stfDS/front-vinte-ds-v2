import "./home.css"
import { useContext } from "react"
import { DataContext } from "../../context/data.context"
import HomeHero from "../../components/HomeHero/HomeHero"
import HomeArticle from "../../components/HomeArticle/HomeArticle"
import Searchbar from "../../components/SearchBar/SearchBar"

const Home = () => {
  const { data, count, isLoading, skip, setSkip } = useContext(DataContext)

  const handleNextClick = () => {
    if (skip + 10 < count) {
      setSkip(skip + 10)
    }
  }

  const handlePreviousClick = () => {
    if (skip > 0) {
      setSkip(Math.max(0, skip - 10))
    }
  }

  return (
    <main className="homeMain">
      <section className="home-hero">
        <HomeHero />
      </section>
      <section className="searchbar-section">
        <Searchbar />
      </section>
      {isLoading ? (
        <h1>Is Loading</h1>
      ) : (
        <section className="home-offers">
          {data.offers.map(offer => {
            return <HomeArticle key={offer._id} offer={offer} />
          })}
        </section>
      )}
      <section className="paging">
        {skip > 0 && (
          <button onClick={handlePreviousClick}>{"<<<"} Page précédente</button>
        )}
        {skip + 10 < count && (
          <button onClick={handleNextClick}>Page Suivante {">>>"}</button>
        )}
      </section>
    </main>
  )
}

export default Home
