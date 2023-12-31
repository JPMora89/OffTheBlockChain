import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './SignupForm.css';

function SignupForm({register}) {
  const INITIAL_STATE = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: ""
  }
  const [formData, setFormData] = useState(INITIAL_STATE);
  const Redirect = useHistory();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({...formData, [name]: value}));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    register(formData);
    setFormData(INITIAL_STATE);
    Redirect.push('/');
    alert("Registration Complete!");
  }
    return (
      <>
        <h1 id='SignupFormHeader'>Sign-up</h1>
        <Form id='SignupForm' onSubmit={handleSubmit}>
          <Form.Control
            name="firstName"
            id="firstName"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            value={formData.firstName}
          />
          <Form.Control
            name="lastName"
            id="lastName"
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            value={formData.lastName}
          />
          <Form.Control
            name="email"
            id="email"
            type="text"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
          />
          <Form.Control
            name="username"
            id="email"
            type="text"
            placeholder="Username"
            onChange={handleChange}
            value={formData.username}
          />
          <Form.Control
            name="password"
            id="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
            minLength="8" required
          />
          <Button id='SignupFormButton' type="submit">Sign Up</Button>
        </Form>
      </>
    )
  }
  
  export default SignupForm;