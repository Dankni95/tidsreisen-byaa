import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Profile } from "../src/pages/Profile.jsx";

describe("Profile", () => {
    it("shows snapshot", async () => {
        const elem = document.createElement("div");
        ReactDOM.render(
            <MemoryRouter>
                <Profile />
            </MemoryRouter>,
            elem);

        expect(elem.innerHTML).toMatchSnapshot();
    });
});