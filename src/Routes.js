import { Switch, Route } from 'react-router-dom';
import { Home } from './components/Home/Home'
import { TimeSelector } from './components/time-selector/TimeSelector'

const Routes = () => {

  return (
        <Switch>
            <Route path="/time-selector" component={TimeSelector} />
            <Route path="/" component={Home} />
        </Switch>
    )
}

export default Routes