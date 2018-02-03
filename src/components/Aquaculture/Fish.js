import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import locale from './locale';
import styles from './aquaculture.scss';
import { Button } from 'components';

export default class Fish extends PureComponent {
  render () {
    const { title, icon } = this.props;

    return (
      <section className={styles['fish-container']}>
        <div className={styles.circle}>
          <img src={icon} alt="images" />
        </div>
        <Button><FormattedMessage {...locale[title]} /></Button>
      </section>
    );
  }
}
