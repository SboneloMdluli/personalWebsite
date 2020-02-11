import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import Projects from './projects'
import Resume from './resume'
import Contact from './contact'

const main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Projects' component={Projects} />
      <Route exact path='/Resume' component={Resume} />
      <Route exact path='/Contact' component={Contact} />
    </Switch>
  )
}

export default main
