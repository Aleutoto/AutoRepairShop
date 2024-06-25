// ErrorBoundary.js
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    // Log error to console or send to an analytics endpoint.
    // e.g., logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasHackError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children; 
  }
}

export default ErrorBoundary;
```
```javascript
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
import ErrorBoundary from './ErrorBoundary'; // Import ErrorBoundary

const BASE_PATH = process.env.REACT_APP_BASE_PATH || '/';

function Main() {
  return (
    <Router basename={BASE_PATH}>
      <ErrorBoundary> {/* Wrap Switch component in ErrorBoundary */}
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Rio="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </ErrorBoundary>
    </Router>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));