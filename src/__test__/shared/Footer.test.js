import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter, Route, Routes } from "react-router";
import Footer from '../../components/shared/Footer';

let container = null;
beforeEach( () => {

    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach( ()=> {

    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

test( "testing links' contents", () => {

    act( () => { 
        render(
            <MemoryRouter >
                <Footer /> 
            </MemoryRouter>
        , container);
    });
    
    
    let children = container.children[0];
    expect(children.textContent).toContain('profy.dev');

    expect(children.textContent).toContain('Terms');


});

