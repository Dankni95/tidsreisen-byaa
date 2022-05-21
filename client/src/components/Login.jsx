import "./login.css";
import logo from "./relingenLogo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CapsuleButtonYellow } from "./CapsuleButton.jsx";
import { postJSON } from "../helpers/http.jsx";

//TODO: Lagre bruker i cookie
//      Sjekke at bruker eksisterer før man får tilgang på andre sider

export default function Login() {
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(event) {
    console.log(username);
    event.preventDefault();
    await postJSON("/api/login", { user: username });
    await navigate("/map");
  }

  return (
    <section id="login">
      <div id="logo">
        <h1 className="logo">Tidsreisen</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-div">
          <input
            placeholder="Brukernavn"
            type="text"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <CapsuleButtonYellow submit={"submit"} buttonText={"Gå videre"} />
        </div>
      </form>
      <img id="logoPic" src={logo} alt="Rælingen logo" />
    </section>
  );
}
