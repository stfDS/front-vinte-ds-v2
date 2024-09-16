/* eslint-disable no-console */
import { createContext, useEffect, useState } from "react"
import axios from "axios"

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [skip, setSkip] = useState(0)
  const [count, setCount] = useState()
  const [priceMin, setPriceMin] = useState("")
  const [priceMax, setPriceMax] = useState("")
  const [sortPrice, setSortPrice] = useState("") //asc ou desc

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get(
          `${
            import.meta.env.VITE_APP_BASE_URL
          }/offers?skip=${skip}&title=${search}&priceMin=${priceMin}&priceMax=${priceMax}&sortPrice=${sortPrice}`,
          {
            withCredentials: true
          }
        )
        setCount(response.data.count)
        setData(response.data)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [search, skip, priceMax, priceMin, sortPrice])

  return (
    <DataContext.Provider
      value={{
        data,
        count,
        isLoading,
        setIsLoading,
        search,
        setSearch,
        setPriceMax,
        priceMax,
        setPriceMin,
        sortPrice,
        setSortPrice,
        skip,
        setSkip
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
