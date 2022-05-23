import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Map } from "./components/Map.jsx";
import StartPage from "./pages/StartPage.jsx";
import { Quiz } from "./pages/capsules/quizCapsule/Quiz.jsx";
import { History } from "./pages/capsules/HistoryCapsule/History.jsx";
import Camera from "./components/Camera";
import Sound from "./pages/capsules/SoundCapsule/Sound.jsx";
import { UserContext } from "./contexts/userContext.jsx";
import { useLoading } from "./helpers/useLoading.jsx";
import { Profile } from "./pages/Profile.jsx";
import { useContext, useEffect, useState } from "react";
import { MyFindings } from "./pages/MyFindings.jsx";

export function Application() {
  const [user, setUser] = useState("");

  const { getUser } = useContext(UserContext);
  const { data: username, reload, loading, error } = useLoading(getUser);

  useEffect(() => {
    username ? setUser(username) : reload();
  }, [username]);

  return (
    <BrowserRouter>
      <header style={{ position: "fixed", zIndex: "20", width: "100%" }}>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<StartPage style={{ height: "100vh" }} />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/map"
            element={<Map username={user} loading={loading} error={error} />}
          />
          <Route path="/quiz/:id" element={<Quiz username={user} />} />
          <Route path="/history/:id" element={<History username={user} />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/myfindings" element={<MyFindings user={user} />} />
          {/*<Route path="/intro" element={<IntroMap />} />*/}
          <Route path="/audio/:id" element={<Sound />} />
          <Route path="/profile" element={<Profile username={username} />} />
          <Route path={"*"} element={<h1>Not found</h1>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
