import { render,screen } from "@testing-library/react";
import App from './App';


test("render learn react link", () =>{
    render ( <App/>);
    // const link = screen.getByText(/DON'T COMPROMISE ON STYLE GET FLAT 30% OFF FOR NEW AVIVALS/i);
    // expect(link).toBeInTheDocument();
});