import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import NumberDetails from "./components/NumberDetails"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/number/:id" element={<NumberDetails />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App