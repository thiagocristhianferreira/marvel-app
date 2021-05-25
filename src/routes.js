import { Route, Switch } from 'react-router';

import Login from './Pages/Login/Login';
import SignUp from './Pages/Sign-up/Sign-up';
import { PrivateRoute } from './auth/PrivateRoute';
import ListaContatos from './Pages/ListaContatos/ListaContatos';


function Routes() {
  return (
    <Switch>
      <PrivateRoute path="/contatos" component={ ListaContatos } />

      <Route path="/sign-up" component={ SignUp } />
      <Route path="/tester" component={ SignUp } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default Routes;
