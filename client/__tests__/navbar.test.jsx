import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Navbar } from "../src/components/Navbar.jsx";
import renderer from 'react-test-renderer';

describe("Navbar", () => {
    it("shows snapshot", async () => {
        const component = renderer.create(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot();
    });
});