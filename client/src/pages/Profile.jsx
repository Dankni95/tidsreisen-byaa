import React from "react";
import { NotLoggedIn } from "../components/NotLoggedIn.jsx";

export function Profile({username}) {

    if (!username) {
        return <NotLoggedIn />;
    }

    return (
        <div>
            <h1>{username}</h1>
            <br/>
            <br/>
            <br/>
            <br/>
            <a href="/myfindings">Mine funn</a>
        </div>
    );
}