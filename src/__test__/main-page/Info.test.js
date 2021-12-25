import { render, screen, cleanup } from "@testing-library/react";
import Info from '../../components/main-page/Info';
import "@testing-library/jest-dom/extend-expect";

afterEach( () => {
    cleanup();
});

let getByTestId;
beforeEach( () => {

    const component = render( <Info /> );
    getByTestId = component.getByTestId;

})
test("testing proper values of component hero's title", ()=> {

    // const {getByTestId} = render(<Info />);
    const titleElement= getByTestId('infoTitle');
    expect(titleElement).toHaveTextContent('How it works');
});

test("testing proper value of component hero's list", ()=> {
    // render(<Info /> );
    const listElement = getByTestId('infoList');
    expect(listElement).toHaveTextContent('We find the 500 top posts from the past year for a subreddit.');
});

test("testing about text", ()=> {
    const aboutElement = getByTestId('infoAbout');
    expect(aboutElement).toHaveTextContent("The front page of the app was created with the guidance from");
});