import HomePage from "../Component/HomePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "../Header/header";
import Footer from "../Footer/footer";
function App() {

  return (
    <>
      <Router>
      <div>
      <Header />
      
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>

      <Footer/>
    </div>
  </Router>
    </>
  )
}

export default App
