import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home/Home"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

import ArticlePage from "./pages/ArticlePage/ArticlePage"
import SignupPage from "./pages/SignupPage/SignupPage"
import { DataProvider } from "./context/Data.context"
import { AuthProvider } from "./context/AuthContext.provider"
import Publish from "./pages/Publish/Publish"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <DataProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offer/:id" element={<ArticlePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/publish" element={<Publish />} />
          </Routes>
          <Footer />
        </DataProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
