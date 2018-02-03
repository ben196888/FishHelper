import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
} from 'react-router';
import { history } from 'store';
import PATHS from 'constants/paths';
import MainContainer from 'containers/MainContainer';
import HomeContainer from 'containers/HomeContainer';
import AquacultureContainer from 'containers/AquacultureContainer';
import ConsumerContainer from 'containers/ConsumerContainer';
import OrganizationContainer from 'containers/OrganizationContainer';
import AboutUsContainer from 'containers/AboutUsContainer';

export default (
  <Router history={history}>
    <Route component={MainContainer} path={PATHS.ROOT}>
      <IndexRoute component={HomeContainer} />
      <Route path={PATHS.AQUACULTURE} component={AquacultureContainer} />
      <Route path={PATHS.CONSUMERS} component={ConsumerContainer} />
      <Route path={PATHS.ORGANIZATION} component={OrganizationContainer} />
      <Route path={PATHS.ABOUTUS} component={AboutUsContainer} />
    </Route>
  </Router>
);
