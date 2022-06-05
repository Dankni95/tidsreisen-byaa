import React from "react";
import { MemoryRouter } from "react-router-dom";
import { ErrorModal } from "../src/components/ErrorModal.jsx";
import renderer from 'react-test-renderer';

//TODO: Simulere click (se linje 19 i ErrorModal.jsx)

describe("ErrorModal", () => {
    it("shows snapshot", async () => {
        const component = renderer.create(
            <MemoryRouter>
                <ErrorModal />
            </MemoryRouter>
        );
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot();
    });
});