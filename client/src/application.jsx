import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration.js";
import { NavBar } from "./components/navbar.jsx";
import { Map } from "./components/Map.jsx";
import { StartPage } from "./pages/StartPage.js";

serviceWorkerRegistration.register();

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
          {/*TODO no elements below yet*/}
          <Route path="/quiz" />
          <Route path="/history" />
          <Route path="/audio" />
          <Route path={"*"} element={<h1>Not found</h1>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
