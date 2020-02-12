import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter, Switch } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form/login_form_container';
import RegisterFormContainer from './session_form/register_form/register_form_container';
import SplashContainer from './splash/splash_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={SplashContainer}/>
        <Route exact path="/login" component={LoginFormContainer} />
        <Route exact path="/register" component={RegisterFormContainer} />
      </Switch>
    </HashRouter>
  </Provider>
);

export default Root;