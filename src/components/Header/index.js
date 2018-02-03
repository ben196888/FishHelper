import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import PATHS from 'constants/paths';
import styles from './header.scss';
import locale from './locale';
import { FormattedMessage } from 'react-intl';

export default class Header extends PureComponent {

  static defaultProps = {
    intl: { locale: 'en-us' },
  }

  handleChange = (e) => {
    this.props.changeLocale(e.target.value);
  }

  render () {
    console.log(this.props.intl.locale);

    return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link
            className={styles[this.props.pathname === PATHS.ROOT ? 'link-active' : 'link']}
            to={PATHS.ROOT}
          >
            <FormattedMessage {...locale.home} />
          </Link>
          <Link
            className={styles[this.props.pathname === PATHS.AQUACULTURE ? 'link-active' : 'link']}
            to={PATHS.AQUACULTURE}
          >
            <FormattedMessage {...locale.aquaculture} />
          </Link>
          <Link
            className={styles[this.props.pathname === PATHS.CONSUMERS ? 'link-active' : 'link']}
            to={PATHS.CONSUMERS}
          >
            <FormattedMessage {...locale.consumers} />
          </Link>
          <select className={styles.lang} onChange={this.handleChange} value={this.props.intl.locale}>
            <option value="en-us">English</option>
            <option value="zh-cn">简中</option>
            <option value="zh-tw">繁中</option>
          </select>
        </nav>
      </header>
    );
  }
}
