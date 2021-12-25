import { render, cleanup } from "@testing-library/react";
import Hero from '../../components/main-page/Hero';
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router";

afterEach( () => {
    cleanup();
});

test("testing proper values of hero component", ()=> {
    
    const component = render(
        <MemoryRouter>
            <Hero />
        </MemoryRouter>
    );
    const titleElement = component.getByTestId('hero-title');
    const buttonElement = component.getByTestId('hero-button');
   
    expect(titleElement).toHaveTextContent('No reactions to your reddit posts?');
    expect(buttonElement).toHaveTextContent('SHOW ME THE BEST TIME');
});