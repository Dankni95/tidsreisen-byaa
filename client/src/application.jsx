import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom"
import StartPage from "./pages/StartPage"
import Login from "./components/login";

export function Application() {

  return (
    <BrowserRouter>
      <header>
        <Link to={"/"}>Front page</Link>
        <Link to={"/login"}>Login </Link>

        <div className="menu-divider" />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
                < StartPage/>
            }
          />
            <Route
                path="/login"
                element={
                    < Login/>
                }
            />
          <Route path={"*"} element={<h1>Not found</h1>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
