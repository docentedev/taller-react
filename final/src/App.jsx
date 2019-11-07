import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';

import './App.css';

import { PrivateRoute } from './components/private-router/PrivateRouter';

import Home from './containers/home/Home';
import Dashboard from './containers/dashboard/Dashboard';

function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <PrivateRoute exact path="/private" component={Dashboard} />
        <PrivateRoute path="/private/:id" component={Dashboard} />
      </div>
      </Router>
    </Provider>
  );
}

export default App;
