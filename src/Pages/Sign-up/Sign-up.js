import { Form, Button, FormGroup, Label, Input } from 'reactstrap';

import './style.css'

function SignUp() {
  return (
    <section>
      <Form className="login-form">
        <h1 className="text-center">Sign-up</h1>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="e-mail" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="password" />
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block">Sign-up</Button>
      </Form>
    </section>
  )
}

export default SignUp;