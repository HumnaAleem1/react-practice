import { Switch, Route } from 'react-router-dom';
import { Home } from './components/Home/Home'

const Routes = () => {

  return (
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
    );
};

export default Routes;
