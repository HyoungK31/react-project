import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Join_Login } from 'pages';
import HeaderContainer from 'containers/Header/HeaderContainer';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <Route exact path="/" component={Home} />
        <Route path="/join_login" component={Join_Login} />
      </div>
    );
  }
}

export default App;
