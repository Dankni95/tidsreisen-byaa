import React from "react";
import { MemoryRouter } from "react-router-dom";
import { MapPage } from "../src/pages/MapPage.jsx";
import renderer from 'react-test-renderer';
import { MapContext, User } from "../src/application.jsx";

describe("MapPage", () => {
    it("shows snapshot", async () => {
        const user = {name: "Hei", points: 23, finishedCapsules: []};
        const context = jest.fn();
        const component = renderer.create(
            <MemoryRouter>
                <MapContext.Provider value={{context}}>
                    <User.Provider value={{user}}>
                        <MapPage/>
                    </User.Provider>
                </MapContext.Provider>
            </MemoryRouter>
        );
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot();
    });
});