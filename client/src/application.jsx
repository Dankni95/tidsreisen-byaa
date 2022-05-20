import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Map } from "./components/Map.jsx";
import StartPage from "./pages/StartPage.jsx";
import { Quiz } from "./pages/capsules/quizCapsule/Quiz.jsx";
import { History } from "./pages/capsules/HistoryCapsule/History.jsx";
import Camera from "./components/Camera";
import { MyFindings } from "./pages/MyFindings.jsx";
import Popup from "./components/Popup.jsx";
import { History } from "./pages/capsules/HistoryCapsule/History";
import { Quiz } from "./pages/capsules/quizCapsule/Quiz.jsx";
import Camera from "./components/Camera";
import Sound from "./pages/capsules/SoundCapsule/Sound.jsx";

export function Application() {
  return (
    <BrowserRouter>
      <header style={{ position: "fixed", zIndex: "20", width: "100%" }}>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<StartPage style={{ height: "100vh" }} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/map" element={<Map />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/history" element={<History />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/myfindings" element={<MyFindings />} />
          <Route path="/intro" element={<Popup />} />
          <Route path="/audio" element={<Sound />} />
          <Route path="/profile" />
          <Route path={"*"} element={<h1>Not found</h1>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
