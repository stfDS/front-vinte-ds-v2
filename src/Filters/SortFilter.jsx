import Select from "react-select"
import "./sortFilter.css"
import { DataContext } from "../context/Data.context"
import { useContext } from "react"
import { options } from "../Utils/Options"

const SortFilter = () => {
  const { setSortPrice } = useContext(DataContext)

  // Handle price sorting based on user selection
  const handleSortChange = selectedOption => {
    setSortPrice(selectedOption.value)
  }
  return (
    <Select
      className="react-select-container"
      classNamePrefix="react-select"
      placeholder="Trier par"
      onChange={handleSortChange}
      options={options}
    />
  )
}

export default SortFilter
