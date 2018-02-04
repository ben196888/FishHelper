import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import localeIntl from './locale';
import styles from './aquaculture.scss';
import { Button } from 'components';
import { Link } from 'react-router';
import PATHS from 'constants/paths';

const nameMap = {
  coldFresh: 'CD',
  coldSalt: 'CS',
  warmFresh: 'WD',
  warmSalt: 'WS',
};

const localeMap = {
  'en-us': 'Name_EN',
  'zh-tw': 'Name_TW',
  'zh-cn': 'Name_CN',
};

export default class Fish extends PureComponent {
  fishFilter = () => {
    const { title, fishkind } = this.props;
    return fishkind.filter((fish) => {
      return fish.Class.indexOf(nameMap[title]) > -1;
    });
  }

  render () {
    const { title, icon, locale, isConsumer } = this.props;

    const fishList = this.fishFilter();

    return (
      <section className={styles['fish-container']}>
        <div className={styles.circle}>
          <img src={icon} alt="images" />
          <div className={styles.tag}><FormattedMessage {...localeIntl[title]} /></div>
        </div>
        {
          fishList.map((f, index) => (
            <Link
              className={styles['fish-list']}
              key={index}
              to={isConsumer ? `${PATHS.CONSUMERS}/${f.ID}` : `${PATHS.AQUACULTURE}/${f.ID}`}
            >
              <img src={f.picURL} alt="images" />
              <span className={styles['fish-tag']}>{f[localeMap[locale]]}</span>
            </Link>
          ))
        }
      </section>
    );
  }
}
