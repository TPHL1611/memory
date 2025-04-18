import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoveCounter from "./pages/LoveCounter";
import Birthday from "./pages/Birthday";
import PhotoMemories from "./pages/PhotoMemories";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";

function App() {
    return (
        <Router>
            <div className="max-w-md mx-auto min-h-screen bg-gray-50 relative">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/love-days" element={<LoveCounter />} />
                    <Route path="/birthday" element={<Birthday />} />
                    <Route path="/photos" element={<PhotoMemories />} />
                </Routes>
                <Navbar />
            </div>
        </Router>
    );
}

export default App;
