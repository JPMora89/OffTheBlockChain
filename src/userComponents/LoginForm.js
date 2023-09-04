import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './LoginForm.css';

function LoginForm({login}) {
  const INITIAL_STATE = {username: "", password: ""}
  const [formData, setFormData] = useState(INITIAL_STATE);
  const Redirect = useHistory();
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({...formData, [name]: value}));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
    setFormData(INITIAL_STATE);
    Redirect.push("/");
    alert("Login Successful!");
  }
    return (
      <>
        <h1 id='LoginFormHeader' >Login</h1>
        <Form id='LoginForm' onSubmit={handleSubmit}>
          <Form.Control id='LoginFormUsername'
            name="username"
            type="text"
            placeholder="Username"
            onChange={handleChange}
            value={formData.username}
          />
          <Form.Control id='LoginFormPassword'
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
            minlength="8" required
          />
          <Button id='LoginFormButton' type="submit">Login</Button>
        </Form>
      </>
    )
  }
  
  export default LoginForm;