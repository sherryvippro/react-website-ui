import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import Services from './components/pages/Service'
import SignUp from './components/pages/SignUp'

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
