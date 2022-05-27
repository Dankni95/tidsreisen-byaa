import "./login.css";
import logo from "./relingenLogo.png";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CapsuleButtonYellow } from "./CapsuleButton.jsx";
import { checkUser, postJSON } from "../helpers/http.jsx";
import Alert from "react-bootstrap/Alert";

//TODO: Lagre bruker i cookie
//      Sjekke at bruker eksisterer før man får tilgang på andre sider

export default function Login() {
  const [username, setUsername] = useState("");
  const [exists, setExists] = useState("");
  const [oldUser, setOldUser] = useState("");
  const location = useLocation();

  const navigate = useNavigate();

  async function handleSubmit(event) {
    console.log(location.search);
    event.preventDefault();

    console.log("up: " + event.nativeEvent.submitter.value);

    if (event.nativeEvent.submitter.value !== "") {
      await postJSON("api/login", { user: oldUser, force: true });
      console.log(user);
      navigate("/map");
    } else {
      const res = await checkUser(`name=${username}`);
      console.log("resss in login: " + res);

      if (res.length > 0) {
        setExists(true);
        setOldUser(res[0].name);
      } else {
        console.log("creating user: " + username);
        await postJSON("/api/login", { user: username });
        navigate("/map");
      }
    }
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
        {exists ? (
          <>
            <Alert variant="danger">
              <Alert.Heading>{oldUser} allerede eksisterer</Alert.Heading>
              <p>Er dette deg?</p>
            </Alert>
            <CapsuleButtonYellow
              submit={"submit"}
              buttonText={"Ja, gå videre"}
              exists={oldUser}
            />
          </>
        ) : (
          <div>
            <CapsuleButtonYellow submit={"submit"} buttonText={"Gå videre"} />
          </div>
        )}
      </form>
      <img id="logoPic" src={logo} alt="Rælingen logo" />
    </section>
  );
}
