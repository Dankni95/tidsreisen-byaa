import React from "react";
import { MemoryRouter } from "react-router-dom";
import { NotFound } from "../src/components/NotFound.jsx";
import renderer from 'react-test-renderer';

describe("NotFound", () => {
    it("shows snapshot", async () => {
        const component = renderer.create(
            <MemoryRouter>
                <NotFound />
            </MemoryRouter>
        );
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot();
    });
});