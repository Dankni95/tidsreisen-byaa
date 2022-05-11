import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login.jsx";
import {NavBar} from "./components/navbar.jsx";
import {Map} from "./components/Map.jsx";
import {StartPage} from "./pages/StartPage.js";
import {Quiz} from "./components/quiz.jsx";


export function Application() {
  return (
    <BrowserRouter>
      <header style={{ position: "absolute", zIndex: "1", padding: "10px" }}>
        <NavBar />
        <div className="menu-divider" />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/map" element={<Map />} />
          {/*TODO no elements below yet
             Quiz-element added for db testing*/}
          <Route path="/quiz" element={<Quiz />}/>
          <Route path="/history" />
          <Route path="/audio" />
          <Route path={"*"} element={<h1>Not found</h1>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
