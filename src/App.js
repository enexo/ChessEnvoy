import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Stream from './components/Streams';
import ERosen from "./components/ERosen";
import CNetwork from './components/CNetwork';
import CExplained from './components/CSielecki';
import JBartholomew from './components/JBartholomew';
import ABotez from "./components/ABotez";
import Agadmator from "./components/ARadic";
import HNakamura from "./components/HNakamura";
import LRozman from "./components/LRozman";

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './App.css';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);


require('dotenv').config();

function App() {
  return (
      <Router>
          <Header/>
            <Route exact path='/' component={Home} />
            <Route exact path='/live-streams' component={Stream} />
            <Route exact path='/about' component={About} />
            <Route exact path='/ERosen' component={ERosen} />
            <Route exact path='/CNetwork' component={CNetwork} />
            <Route exact path='/CSielecki' component={CExplained} />
            <Route exact path='/JBartholomew' component={JBartholomew} />
            <Route exact path='/ABotez' component={ABotez} />
            <Route exact path='/ARadic' component={Agadmator} />
            <Route exact path='/HNakamura' component={HNakamura} />
            <Route exact path='/LRozman' component={LRozman} />
      </Router>
  );
}

export default App;
