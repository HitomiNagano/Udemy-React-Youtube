import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Top from "src/pages/Top"
import Search from "src/pages/Search"
import Watch from "src/pages/Watch"

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/watch" component={Watch} />
      </Switch>
    </Router>
  )
}

export default App
