import React from 'react';
import { Provider } from 'react-redux';
import IntlWrapper from 'intl/IntlWrapper';
import routes from './routes';

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <IntlWrapper>{routes}</IntlWrapper>
    </Provider>
  );
};

export default Root;
