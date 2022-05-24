import "./login.css";
import logo from "./relingenLogo.png";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CapsuleButtonYellow } from "./CapsuleButton.jsx";
import { checkUser, postJSON } from "../helpers/http.jsx";
import Alert from "react-bootstrap/Alert";
import { User } from "../application";

//TODO: Lagre bruker i cookie
//      Sjekke at bruker eksisterer før man får tilgang på andre sider

export default function Login() {
  const { user, setUser } = useContext(User);

  const [newUser, setNewUser] = useState("");

  const [exists, setExists] = useState("");
  const [oldUser, setOldUser] = useState("");
  const location = useLocation();

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const { name, intro, walk } = user;

    if (event.nativeEvent.submitter.value !== "") {
      await postJSON("api/login", { user: oldUser.name, force: true });
      setUser({ name: oldUser.name, intro: oldUser.intro, walk: oldUser.walk });
      navigate("/map");
    } else {
      const res = await checkUser(`name=${newUser}`);

      if (res.length > 0) {
        setExists(true);
        setOldUser(res[0]);
      } else {
        console.log("creating user: " + newUser);
        await postJSON("/api/login", { user: newUser });
        setUser({ name: newUser, intro: true, walk: false });
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
            value={newUser}
            onChange={(e) => {
              setNewUser(e.target.value);
              setExists(false);
            }}
          />
        </div>
        {exists ? (
          <>
            <Alert variant="danger">
              <Alert.Heading>{oldUser.name} allerede eksisterer</Alert.Heading>
              <p>Er dette deg?</p>
            </Alert>
            <CapsuleButtonYellow
              submit={"submit"}
              buttonText={"Ja, gå videre"}
              exists={oldUser.name}
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
