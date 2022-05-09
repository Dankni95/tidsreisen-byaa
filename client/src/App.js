import "./App.css"
import { Routes, Route } from "react-router-dom"
import StartPage from "./pages/StartPage"
import TestPage from "./pages/TestPage"
import Maps from "../src/Maps"



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </div>
  )
}

export default App
