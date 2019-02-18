import * as React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import DiaList from './modules/Dia-List/diagList';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p> */}
         <Switch>
          {/* <Route
            path="/login"
            component={LoginContainer}
          />
          <PrivateRoute
                path="/"
                component={Commandcenter}
          /> */}

          <Route
            path='/'
            component={DiaList}
          />           
         
        </Switch>
      </div>
    );
  }
}

export default App;
