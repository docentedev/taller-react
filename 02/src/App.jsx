import React from 'react';
// ROUTER
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// UI
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

// Views
import Home from './containers/home/Home';
import Login from './containers/login/Login';
import PostDetail from './containers/post-detail/PostDetail';

// Components
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/post/detail/:id/:parentId" component={PostDetail} />
      </Router>
    </div>
  );
}

export default App;
