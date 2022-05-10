import "./login.css"
import logo from "./relingenLogo.png"

export default function Login() {
    function handleSubmit() {
        alert("Halla, hva skjera")
    }

    return (
        <div id="login">
            <div id="logo">
                <img id="logoPic" src={logo} alt="Rælingen logo"/>
                <h1>Tidsreisen</h1>
            </div>
            <form>
                <div><input type="text" placeholder="Brukernavn"/></div>
                <div>
                    {/*FÅR IKKE STYLET KNAPPEN ORDENTLIG, GOD KNOWS WHY*/}
                    <button onClick={handleSubmit}>Gå videre</button>
                </div>
            </form>
        </div>
    )
}