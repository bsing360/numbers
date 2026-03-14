import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import NumberDetails from "./components/NumberDetails"
import { Routes, Route } from "react-router-dom"

import "./styles/general.css"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/number/:numberId" element={<NumberDetails />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App