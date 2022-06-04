import React from "react";
import { MemoryRouter } from "react-router-dom";
import { BackButton } from "../src/components/BackButton.jsx";
import renderer from 'react-test-renderer';

describe("BackButton", () => {
    it("shows snapshot", async () => {
        const component = renderer.create(
            <MemoryRouter>
                    <BackButton />
            </MemoryRouter>
        );
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot();
    });
});