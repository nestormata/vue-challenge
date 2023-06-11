import App from '../src/App.vue';
import { render, screen } from "@testing-library/vue";
import '@testing-library/jest-dom';

it("App renders",  () => {
    render(App);
    const headerElement = screen.getByText(/maria carter/i);
    expect(headerElement).toBeInTheDocument();
});