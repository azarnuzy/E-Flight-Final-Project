import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Login } from '../Login';
import { store } from '../../../app/store';
const MockLogin = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </Provider>
  );
};

describe('Login Testing', () => {
  it('should render input email element', () => {
    render(<MockLogin />);
    const inputElement = screen.getByPlaceholderText(/Email/i);
    expect(inputElement).toBeInTheDocument();
  });

  it('should render input password element', () => {
    render(<MockLogin />);
    const inputElement = screen.getByPlaceholderText(/Password/i);
    expect(inputElement).toBeInTheDocument();
  });

  it('should be able to type into input email', () => {
    render(<MockLogin />);
    const inputElement = screen.getByPlaceholderText(/Email/i);
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, { target: { value: 'azar@gmail.com' } });
    expect(inputElement.value).toBe('azar@gmail.com');
  });

  it('should be able to type into input password', () => {
    render(<MockLogin />);
    const inputElement = screen.getByPlaceholderText(/Password/i);
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, { target: { value: 'AzarAzar!1' } });
    expect(inputElement.value).toBe('AzarAzar!1');
  });

  it('should correct email format in input email', () => {
    render(<MockLogin />);
    const inputElement = screen.getByPlaceholderText(/Email/i);
    const emailNote = screen.getByTestId(/emailidnote/i);
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, { target: { value: 'azar@gmail.com' } });
    expect(inputElement.value).toMatch(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i
    );
    expect(emailNote).toHaveClass('offscreen');
  });

  it('should display error below input email when format email is incorrect', () => {
    render(<MockLogin />);
    const inputElement = screen.getByPlaceholderText(/Email/i);
    const emailNote = screen.getByTestId(/emailidnote/i);
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, { target: { value: 'azargail.com' } });
    expect(inputElement.value).not.toMatch(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i
    );
    expect(emailNote).toBeVisible();
  });
  it('should correct password format in input password', () => {
    render(<MockLogin />);
    const inputElement = screen.getByPlaceholderText(/Password/i);
    const passwordNote = screen.getByTestId(/passwordidnote/i);
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, { target: { value: 'AzarAzar!1' } });
    expect(inputElement.value).toMatch(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/i
    );
    expect(passwordNote).toHaveClass('offscreen');
  });

  it('should display error below input password when format password is incorrect', () => {
    render(<MockLogin />);
    const inputElement = screen.getByPlaceholderText(/Password/i);
    const passwordNote = screen.getByTestId(/passwordidnote/i);
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, { target: { value: 'AzarAza1' } });
    expect(inputElement.value).not.toMatch(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/i
    );
    expect(passwordNote).toBeVisible();
  });
});
