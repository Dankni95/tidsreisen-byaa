import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Map } from "./components/Map.jsx";
import StartPage from "./pages/StartPage.jsx";
import { History } from "./pages/capsules/History.jsx";
import {Quiz} from "./pages/capsules/quizCapsule/Quiz.jsx"
import Camera from "./components/Camera"

export function Application() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
        <div className="menu-divider" />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<StartPage style={{height:"100vh"}} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/map" element={<Map />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/history" element={<History />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/audio" />
          <Route path="/profile" />
          <Route path={"*"} element={<h1>Not found</h1>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
