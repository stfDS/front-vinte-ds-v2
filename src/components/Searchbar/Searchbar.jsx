import "./searchbar.css"
import { useContext, useState } from "react"
import { DataContext } from "../../context/data.context"
import { FaSearch } from "react-icons/fa"
import SortFilter from "../../Filters/SortFilter"

const Searchbar = () => {
  const { setSearch } = useContext(DataContext)
  const [inputValue, setInputValue] = useState("")

  // Handle search input when the user presses "Enter"
  const handleSearch = () => {
    setSearch(inputValue)
  }

  // Handle input change to update the local state
  const handleChange = event => {
    setInputValue(event.target.value)
    if (event.target.value === "") {
      setSearch("")
    }
  }

  // Handle the Enter key press to trigger the search
  const handleKeyDown = event => {
    if (event.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className="search-container">
      {/* Search input */}
      <div className="input-search-div">
        <input
          className="search-input"
          id="searchbar"
          type="search"
          placeholder="Recherchez des articles"
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          value={inputValue}
        />
        <span onClick={handleSearch}>
          <FaSearch />
        </span>
      </div>

      <SortFilter />
    </div>
  )
}

export default Searchbar
