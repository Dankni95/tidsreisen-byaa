import React from "react";
import { MemoryRouter } from "react-router-dom";
import { NotLoggedIn } from "../src/components/NotLoggedIn.jsx";
import renderer from 'react-test-renderer';

//Simulere click (se linje 23 i NotLoggedIn.jsx)

describe("NotLoggedIn", () => {
    it("shows snapshot", async () => {
        const component = renderer.create(
            <MemoryRouter>
                <NotLoggedIn />
            </MemoryRouter>
        );
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot();
    });
});