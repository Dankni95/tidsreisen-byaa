import React, {useEffect, useState} from "react";
import { NotLoggedIn } from "../components/NotLoggedIn.jsx";
import "./profile.css";
import { IoPersonOutline } from "react-icons/io5"

function ProgressBar({ color, progress }) {

// SKAMLØST STJÅLET FRA
// https://dev.to/ramonak/react-how-to-create-a-custom-progress-bar-component-in-5-minutes-2lcl

    const containerStyles = {
        height: "1.5em",
        width: "15em",
        backgroundColor: "red",
        borderRadius: 50,
        margin: 50
    };

    const fillerStyles = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: color,
        borderRadius: 'inherit',
        textAlign: 'right'
    };

    const labelStyles = {
        padding: 10,
        color: 'white',
    };

    return (
        <div id="progressBar">
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${progress}%`}</span>
            </div>
        </div>
    )
}

export function Profile({username}) {
    const [user, setUser] = useState("");

    if (username === [] || username === null || username === undefined) {
        return <NotLoggedIn />;
    }

    useEffect(() => {
        username
            ? (console.log(username),
                setUser(username[0]))
            : "";
    }, [username]);

    return (
        <div className="container">
            <main id="main">
                <h1 id="userName">{user.name}</h1>
                <div id="circle">
                    <IoPersonOutline id="icon"/>
                </div>

                    {/*Level endres til user.level*/}
                    <h2 id="userLevel">Level 2</h2>

                    {/*Progress-verdien endres til user.points*/}
                    <ProgressBar color="#333333" progress="90"/>

                    {/*Poeng endres til user.points*/}
                    <p id="userPoints">90/100 poeng</p>

                <div id="linkBox">
                    <a id="myFindingsLink" href="/myfindings">Mine funn</a>
                </div>
            </main>
        </div>
    );
}