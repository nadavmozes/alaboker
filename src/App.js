import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './cmps/Navbar'
import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div>
          <Switch >
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            {/* <Route exact path="/about" component={About} />
                <Route path="/user/:login" component={UserDetails} />
                <Route component={NotFound} /> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
