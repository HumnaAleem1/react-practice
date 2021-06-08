import { Switch, Route } from 'react-router-dom';
import { Home } from './components/home/Home'
import { TimeSelector } from './components/time-selector/TimeSelector'

const Routes = () => {

  return (
        <Switch>
            <Route path="/" component={Home} />
            <Route path="/time-selector" component={TimeSelector} />
        </Switch>
    )
}

export default Routes