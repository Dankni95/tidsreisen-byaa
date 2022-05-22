import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Map } from "./components/Map.jsx";
import StartPage from "./pages/StartPage.jsx";
import { Quiz } from "./pages/capsules/quizCapsule/Quiz.jsx";
import { History } from "./pages/capsules/HistoryCapsule/History.jsx";
import Camera from "./components/Camera";
import { MyFindings } from "./pages/MyFindings.jsx";
import Sound from "./pages/capsules/SoundCapsule/Sound.jsx";
import { UserContext } from "./contexts/userContext.jsx";
import { useLoading } from "./helpers/useLoading.jsx";
import { useContext } from "react";

export function Application() {
  const { getUser } = useContext(UserContext);
  const { data: username, reload, loading, error } = useLoading(getUser);

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
          <Route path="/quiz/:id" element={<Quiz username={username} />} />
          <Route
            path="/history/:id"
            element={<History username={username} />}
          />
          <Route path="/camera" element={<Camera />} />
          <Route path="/myfindings" element={<MyFindings />} />
          {/*<Route path="/intro" element={<IntroMap />} />*/}
          <Route path="/audio/:id" element={<Sound />} />
          <Route path="/profile" />
          <Route path={"*"} element={<h1>Not found</h1>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
