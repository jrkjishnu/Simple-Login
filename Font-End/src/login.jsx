import React from "react";
import {Form,Button} from 'react-bootstrap';
import Axios from 'axios';
export default function LoginForm() {
  return (
    <Form onSubmit={(e)=>login(e)} method="post">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" id="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" id="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

function login(e)
{
  e.preventDefault();
  let request = {
    email:document.getElementById("email").value,
    password:document.getElementById("password").value
  }

  Axios.post('http://localhost:4000/login',request).then((res)=>
  {
    console.log("Inside axios");
    alert(res.data.message);
  }).catch(err =>
    {
      console.log(err);
    })
}
