/**
 * @jest-environment jsdom
 */

import React from "react";
import ReactDOM from 'react-dom';
import { MemoryRouter } from "react-router-dom";
import { fireEvent, render, act } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { User } from "../src/application.jsx";
import { DatabaseContext } from "../src/contexts/databaseContext.jsx";
import { History } from "../src/pages/capsules/HistoryCapsule/History.jsx";

//TODO: Se linje 29-54 i History.jsx

describe("History", () => {
    it("shows snapshot", async () => {
        const user = {name: "Hei", points: 23, finishedCapsules: [], intro: true, walk: false};
        const context = jest.fn();
        let component;

        act(() => {
            component = renderer.create(
                <MemoryRouter>
                    <DatabaseContext.Provider value={{context}}>
                        <User.Provider value={{user}}>
                            <History/>
                        </User.Provider>
                    </DatabaseContext.Provider>
                </MemoryRouter>
            );
        });
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});