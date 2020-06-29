import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Update from './pages/Update';
import Create from './pages/Create';

class App extends Component {
    render() {
      return (
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/update/:id" exact component={Update} />
            <Route path="/update/:id/\?result=:result" component={Update} />
            
            <Route path="/create" exact component={Create} />
            <Route path="/create/\?result=:result" component={Create} />
          </div>
        </Router>
      );
    }
  }
  
  export default App;