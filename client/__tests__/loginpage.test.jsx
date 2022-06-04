import React from "react";
import { MemoryRouter } from "react-router-dom";
import { LoginPage } from "../src/pages/LoginPage.jsx";
import renderer from 'react-test-renderer';
import { MapContext } from "../src/application.jsx";

describe("LoginPage", () => {
    it("shows snapshot", async () => {
        const context = jest.fn();
        const component = renderer.create(
            <MemoryRouter>
                <MapContext.Provider value={{context}}>
                    <LoginPage/>
                </MapContext.Provider>
            </MemoryRouter>
        );
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot();
    });
});