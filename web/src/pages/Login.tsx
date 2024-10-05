import {FormEvent, useState} from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Page from "./Page.tsx";
import {useAuth} from "../context/authContext.tsx";
import useForm, {UseFormValidators} from "../hooks/useForm.ts";

interface UserLoginFormData {
  email: string,
  password: string
}

const validators: UseFormValidators<UserLoginFormData> = {
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  password: (value) => value.length >= 6,
}

function Login()  {
  const { login, loading, user, error } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Clear previous error messages
    setFormError('');
    setSuccess('');

    if (!email || !password) {
      setFormError('Both fields are required.');
      return;
    }

    console.log(email, password);

    login({ email, password });
  };

  return (
      <Page title={'Login'}>
        <Container>
          {loading && <p>Loading...</p>}
          {!loading && !user && <Form noValidate onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                  type="text"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            {formError && <Alert variant="danger">{formError}</Alert>}
            {error && <Alert variant="danger">Please Verify Your Information Is Accurate</Alert>}
            {success && <Alert variant="success">{success}</Alert>}

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>}
          {!loading && user && <p>Logged in as {user.email}</p>}
        </Container>
      </Page>
  );
}

export default Login
