import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './PageComponent/HomePage';
import MoreUserInfo from './PageComponent/MoreUserInformation';

function App() {  
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/:id' component={MoreUserInfo} />
      </Switch>
    </Router>
  );
}

export default App;