import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home/Home"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { DataProvider } from "./context/data.context"
import ArticlePage from "./pages/ArticlePage/ArticlePage"

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer/:id" element={<ArticlePage />} />
        </Routes>
        <Footer />
      </DataProvider>
    </BrowserRouter>
  )
}

export default App
