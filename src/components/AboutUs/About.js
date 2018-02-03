import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import locale from './locale';
import styles from './aboutus.scss';
import { Button } from 'components';

export default class About extends PureComponent {
  render () {
    const { title, icon } = this.props;

    return (
      <section className={styles['container']}>
        <div className={styles.circle}>
          <img src={icon} alt="images" />
        </div>
        <Button><FormattedMessage {...locale[title]} /></Button>
      </section>
    );
  }
}
