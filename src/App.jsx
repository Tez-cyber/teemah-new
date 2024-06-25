import Footer from "./components/Footer"
import Navbar from "./components/HomePage/Navbar"
import Home from "./pages/Home"


function App() {
  return (
    <>
      <div className="font-josefin overflow-hidden">
        <Navbar />
        <Home/>
        <Footer />
      </div>
    </>
  )
}

export default App
