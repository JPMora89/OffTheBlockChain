import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('renders the login form', () => {
    render(<LoginForm login={() => {}} />);
    
    // Assert that the login form elements are rendered
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('handles form input and submission', () => {
    const mockLogin = jest.fn();
    render(<LoginForm login={mockLogin} />);
    
    // Simulate user input
    fireEvent.change(screen.getByPlaceholderText('Username'), {
      target: { value: 'testuser' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'password123' },
    });
    
    // Simulate form submission
    fireEvent.click(screen.getByText('Login'));

    // Assert that the login function is called with the correct data
    expect(mockLogin).toHaveBeenCalledWith({
      username: 'testuser',
      password: 'password123',
    });
  });

  it('resets form data after submission', () => {
    const mockLogin = jest.fn();
    render(<LoginForm login={mockLogin} />);
    
    // Simulate user input
    fireEvent.change(screen.getByPlaceholderText('Username'), {
      target: { value: 'testuser' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'password123' },
    });
    
    // Simulate form submission
    fireEvent.click(screen.getByText('Login'));

    // Assert that form inputs are cleared
    expect(screen.getByPlaceholderText('Username').value).toBe('');
    expect(screen.getByPlaceholderText('Password').value).toBe('');
  });
});
