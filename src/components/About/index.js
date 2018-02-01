import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import locale from 'intl/locale';

export default class About extends PureComponent {
  componentDidMount () {
    this.props.changeLocale('zh-tw');
  }

  render () {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>React Router works!</h1>
        <FormattedMessage {...locale.myLang} />
      </div>
    );
  }
}
