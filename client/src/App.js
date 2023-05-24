import "./App.css"
import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { ProductDetail } from "./components/ProductDetail";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<ProductDetail />} />
            </Routes>
        </div>
    )
}

export default App
