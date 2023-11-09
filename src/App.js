import {BrowserRouter, Switch, Route} from 'react-router-dom'
import EachRepo from './components/EachRepo'
import './App.css'
import Counter from './components/Counter'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Counter} />
      <Route exact path="/each/repo/:owner/:repo" component={EachRepo} />
    </Switch>
  </BrowserRouter>
)

export default App
