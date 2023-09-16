import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SignupForm from './SignupForm';

describe('SignupForm', () => {
  it('renders the signup form', () => {
    render(<SignupForm register={() => {}} />);
    
    // Assert that the signup form elements are rendered
    expect(screen.getByText('Sign-up')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });

  it('handles form input and submission', () => {
    const mockRegister = jest.fn();
    render(<SignupForm register={mockRegister} />);
    
    // Simulate user input
    fireEvent.change(screen.getByPlaceholderText('First Name'), {
      target: { value: 'John' },
    });
    fireEvent.change(screen.getByPlaceholderText('Last Name'), {
      target: { value: 'Doe' },
    });
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'johndoe@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Username'), {
      target: { value: 'johndoe' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'password123' },
    });
    
    // Simulate form submission
    fireEvent.click(screen.getByText('Sign Up'));

    // Assert that the register function is called with the correct data
    expect(mockRegister).toHaveBeenCalledWith({
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      username: 'johndoe',
      password: 'password123',
    });
  });

  it('resets form data after submission', () => {
    const mockRegister = jest.fn();
    render(<SignupForm register={mockRegister} />);
    
    // Simulate user input
    fireEvent.change(screen.getByPlaceholderText('First Name'), {
      target: { value: 'John' },
    });
    fireEvent.change(screen.getByPlaceholderText('Last Name'), {
      target: { value: 'Doe' },
    });
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'johndoe@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Username'), {
      target: { value: 'johndoe' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'password123' },
    });
    
    // Simulate form submission
    fireEvent.click(screen.getByText('Sign Up'));

    // Assert that form inputs are cleared
    expect(screen.getByPlaceholderText('First Name').value).toBe('');
    expect(screen.getByPlaceholderText('Last Name').value).toBe('');
    expect(screen.getByPlaceholderText('Email').value).toBe('');
    expect(screen.getByPlaceholderText('Username').value).toBe('');
    expect(screen.getByPlaceholderText('Password').value).toBe('');
  });
});
