import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, capturedError: null, errorDetails: null };
  }

  static getDerivedMemoryFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorDetails) {
    this.setState({
      capturedError: error,
      errorDetails: errorDetails
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Sorry, something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.capturedError && this.state.capturedError.toString()}
            <br />
            {this.state.errorDetails.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children; 
  }
}

export default ErrorBoundary;

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HomePage from './App'; 
import AboutPage from './About'; 
import ServicesPage from './Services'; 
import ContactPage from 'Contact'; 
import NotFoundPage from './NotFound'; 
import ErrorBoundary from './ErrorBoundary';

const baseRoutePath = process.env.REACT_APP_BASE_PATH || '/';

function MainRouter() {
  return (
    <Router basename={baseRoutePath}>
      <ErrorBoundary>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </ErrorBoundary>
    </Router>
  );
}

ReactDOM.render(<MainRouter />, document.getElementById('root'));