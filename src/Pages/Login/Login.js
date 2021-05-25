import { useContext, useEffect } from 'react';
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';

import ContextMarvel from '../../Context/ContextMarvel';

// import { getComics } from '../services/marvelAPI';

import './style.css'

function Login() {
  // const {
  //   setCharacters,
  // } = useContext(ContextMarvel);
  // useEffect(()=>{
  //   const fetchCharacters = async () =>{
  //     const endpoint = 'https://rickandmortyapi.com/api/character';
  //     const {results} = await fetch(endpoint).then(res => res.json());
  //     console.log(results);
  //     setCharacters(results);

  //   }
  //   fetchCharacters();
  // }, [setCharacters]);

  return (
    <section>
      <Form className="login-form">
        <h1 className="text-center">Login</h1>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="e-mail" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="password" />
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block">Log in</Button>
        <div className="text-center pt-3">Or continue with your social account</div>
        <FacebookLoginButton className="mt-3 mb-3" />
          <div className="text-center">
            <a href="/sign-up">Sign up</a>
            <span className="p-2">|</span>
            <a href="/sing-up">Forgot Password</a>
          </div>
      </Form>
    </section>
  )
}

export default Login;