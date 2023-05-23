import "./App.css"
import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/home" element={<Home />} />
                {/* <Route path="/editar-tarea/:id" element={<EditionView />} />
                <Route path="/crear-tarea" element={<CreationView />} /> */}
            </Routes>
        </div>
    )
}

export default App
