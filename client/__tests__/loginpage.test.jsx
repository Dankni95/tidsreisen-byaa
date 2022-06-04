import React from "react";
import { MemoryRouter } from "react-router-dom";
import { LoginPage } from "../src/pages/LoginPage.jsx";
import renderer from 'react-test-renderer';
import { MapContext } from "../src/application.jsx";

//TODO: Simulere at man skriver i input-felt og trykker på knapp,
//      både med ny bruker og eksisterende

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