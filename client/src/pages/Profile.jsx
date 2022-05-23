import React from "react";
import { NotLoggedIn } from "../components/NotLoggedIn.jsx";
import "./profile.css";

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
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${progress}%`}</span>
            </div>
        </div>
    )
}

export function Profile({username}) {

    if (!username) {
        return <NotLoggedIn />;
    }

    return (
        <div className="container">
            <h1>{username} hello</h1>
            <br/>
            <br/>
            <br/>
            <br/>
            {/*br fordi navbar overlapper, posisjonèr med css etterhvert,
            level og progress hentes fra db*/}
            <h2>Level 2</h2>
            <ProgressBar color="#333333" progress="90"/>
            <p>90/100 poeng</p>
            <a href="/myfindings">Mine funn</a>
        </div>
    );
}