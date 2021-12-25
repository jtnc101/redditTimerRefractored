import { act } from "@testing-library/react";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { MemoryRouter } from "react-router";
import Header from '../../components/shared/Header';

let container = null;
beforeEach( () => {

    container = document.createElement('div');
    document.body.appendChild(container);

});

afterEach( () => {

    unmountComponentAtNode(container);
    container.remove();
    container = null;

});

test( "testing the content of the headers", () => {

    act( () => {
        render(
            <MemoryRouter >
                <Header />
            </MemoryRouter>,
            container
        );
    });

    let children = container.children[0];
    expect(children.textContent).toContain('Search');
    expect(children.textContent).toContain('How it works');
    expect(children.textContent).toContain('About');
});