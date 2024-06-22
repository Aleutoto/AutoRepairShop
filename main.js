import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import App from './App'; 
import About from './About'; 
import Services from './Services'; 
import Contact from './Contact'; 
import NotFound from './NotFound'; 

const BASE_PATH = process.env.REACT_APP_BASE_PATH || '/';

function Main() {
  return (
    <Router basename={BASE_PATH}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));