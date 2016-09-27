import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, useRouterHistory, IndexRoute } from 'react-router'
import { createHashHistory } from 'history'
import App from './lib/App'
import Home from './lib/Home'
import Loader from './lib/Loader'
import NotFound from './lib/NotFound'


const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })


ReactDOM.render((
  <Router history={appHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
    </Route>

    <Route path="/:id" component={Loader}/>

    <Route path="*" component={NotFound}/>

  </Router>
), document.getElementById('app'))