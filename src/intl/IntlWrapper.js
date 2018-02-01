import React from 'react';
import { connect } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';

import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';

addLocaleData([...en, ...zh]);

const mapStateToProps = (state) => {
  return {
    key: state.intl.locale,
    locale: state.intl.locale,
    messages: state.intl.messages,
  };
};

export default connect(mapStateToProps)(IntlProvider);
