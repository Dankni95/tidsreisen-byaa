import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Map } from "./components/Map.jsx";
import StartPage from "./pages/StartPage.jsx";
import { History } from "./pages/capsules/History.jsx";
import {Quiz} from "./pages/capsules/quizCapsule/Quiz.jsx"

export function Application() {
  return (
    <BrowserRouter>
      <header style={{ position: "absolute", zIndex: "1", width: "100%" }}>
        <Navbar />
        <div className="menu-divider" />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/map" element={<Map />} />
          <Route path="/quiz" element={<Quiz/>}/>
          <Route path="/history" element={<History />} />
          <Route path="/audio" />
          <Route path="/profile" />
          <Route path={"*"} element={<h1>Not found</h1>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
