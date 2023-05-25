import "./App.css"
import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { ProductDetail } from "./components/ProductDetail";
import { ProductUpdate } from "./components/ProductUpdate";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/:id" element={<ProductDetail />} />
                <Route path="/:id/edit" element={<ProductUpdate />} />
            </Routes>
        </div>
    )
}

export default App
