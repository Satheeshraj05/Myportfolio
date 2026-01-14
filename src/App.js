import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Main } from './pages' 
import ScrollToTop from './utils/ScrollToTop'
import BackToTop from './components/BackToTop/BackToTop'

import './App.css'

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Redirect to="/" />
        </Switch>
      </Router>
        <BackToTop />
    </div>
  );
}

export default App;
