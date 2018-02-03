import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './organization.scss';
import { FormattedMessage } from 'react-intl';
import locale from './locale';
export default class Block extends PureComponent {

  render () {
    const { title, icon } = this.props;

    return (
      <article className={styles['article-container']}>
        <span className={styles['icon-circle']}>
          <img src={icon} alt="not found" />
        </span>
        <h5><FormattedMessage {...locale[title]} /></h5>
      </article>
    );
  }
}
