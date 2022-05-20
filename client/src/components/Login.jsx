import "./login.css";
import logo from "./relingenLogo.png";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";


//TODO: Lagre bruker i cookie
//      Sjekke at bruker eksisterer før man får tilgang på andre sider

export async function postJSON(url, body) {
  console.log(body);
  const res = await fetch(url, {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    throw new Error(`${res.status}: ${res.statusText}`);
  }
}

export default function Login() {
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(event) {
    console.log(username);
    event.preventDefault();
    await postJSON("/api/login", { user: username });
    navigate("/");
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
          {/*FÅR IKKE STYLET KNAPPEN ORDENTLIG, GOD KNOWS WHY*/}
          <Button variant="primary" type="submit" id="log-btn"><Link to={"/intro"}>Gå videre</Link></Button>{' '}
        </div>
      </form>
      <img id="logoPic" src={logo} alt="Rælingen logo" /> 
    </section>
  );
}
