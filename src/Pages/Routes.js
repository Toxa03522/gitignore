import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Catalog from './Catalog';
import Product from './Product';
import Services from './Services';
import About from './About';

function Routes() {
  return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/catalog" component={Catalog} />
        <Route exact path="/product/:id" component={Product} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/about" component={About} />
      </Switch>
  );
}

export default Routes;
