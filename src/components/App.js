import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import NoMatch from './NoMatch'
import DynamicPage from './DynamicPage'
import Footer from './Footer'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/dynamic' component={DynamicPage} />
          <Route path='/footer' component={Footer} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  )
}

export default App