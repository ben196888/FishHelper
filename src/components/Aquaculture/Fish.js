import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import locale from './locale';
import styles from './aquaculture.scss';
import { Button } from 'components';
import { Link } from 'react-router';

const nameMap = {
  coldFresh: 'CD',
  coldSalt: 'CS',
  warmFresh: 'WD',
  warmSalt: 'WS',
};

export default class Fish extends PureComponent {
  fishFilter = () => {
    const { title, fishkind } = this.props;
    return fishkind.filter((fish) => {
      return fish.Class.indexOf(nameMap[title]) > -1;
    });
  }

  render () {
    const { title, icon } = this.props;

    const fishList = this.fishFilter();

    return (
      <section className={styles['fish-container']}>
        <div className={styles.circle}>
          <img src={icon} alt="images" />
          <div className={styles.tag}><FormattedMessage {...locale[title]} /></div>
        </div>
        {
          fishList.map((f, index) => (
            <Link
              className={styles['fish-list']}
              key={index}
            >
              <img src={f.url} alt="images" />
              <span className={styles['fish-tag']}>{f.Name_EN}</span>
            </Link>
          ))
        }
      </section>
    );
  }
}
