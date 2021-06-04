import { Switch, Route } from 'react-router-dom'
import { Home } from './components/Home'

export const Routes = () => {

  return (
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
    )
}