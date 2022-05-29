import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import { Map } from "./components/Map.jsx";
import StartPage from "./pages/StartPage.jsx";
import { Quiz } from "./pages/capsules/quizCapsule/Quiz.jsx";
import { History } from "./pages/capsules/HistoryCapsule/History.jsx";
import Camera from "./components/Camera";
import { MyFindings } from "./pages/MyFindings.jsx";
import Sound from "./pages/capsules/SoundCapsule/Sound.jsx";
import { UserContext } from "./contexts/userContext.jsx";
import { Profile } from "./pages/Profile.jsx";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useLoading } from "./helpers/useLoading.jsx";
import WithoutNavbar from "./components/WithoutNavbar";
import WithNavbar from "./components/WithNavbar";
import { NotFound } from "./components/NotFound.jsx";

export const User = createContext("");

export function Application() {
  const [user, setUser] = useState([]);

  const { getUser } = useContext(UserContext);
  const { data: username, reload, loading, error } = useLoading(getUser);

  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    username ? setUser(...username, username) : reload();
  }, [username]);

  return (
    <User.Provider value={providerValue}>
      <BrowserRouter>
        <main>
          <Routes>
            <Route element={<WithoutNavbar />}>
              <Route path="/" element={<Login />} />
            </Route>
            <Route element={<WithNavbar />}>
              <Route path="/map" element={<Map />} />
              <Route path="/quiz/:id" element={<Quiz />} />
              <Route path="/history/:id" element={<History />} />
              <Route path="/camera" element={<Camera />} />
              <Route
                path="/myfindings"
                element={<MyFindings loading={loading} error={error} />}
              />
              <Route path="/audio/:id" element={<Sound />} />
              <Route path="/profile" element={<Profile />} />
              <Route path={"*"} element={<NotFound />} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </User.Provider>
  );
}
