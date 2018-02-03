import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Header, Footer } from 'components';
import styles from './main.scss';

export default class Main extends PureComponent {
  render () {
    const { location, intl, children, changeLocale } = this.props;

    return (
      <div className={styles.container}>
        <Header
          pathname={location.pathname}
          changeLocale={changeLocale}
          intl={intl}
        />
        <div className={styles.content}>
          {children}
        </div>
        <Footer />
      </div>
    );
  }
}
