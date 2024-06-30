import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <main>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/services" component={ServicesPage} />
              <Route path="/about" component={AboutPage} />
              <LastPage path="/contact" component={ContactPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;