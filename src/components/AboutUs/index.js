import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import locale from './locale';
import styles from './aboutus.scss';
import About from './About';
import github from 'assets/github.jpg';

export default class AboutUs extends PureComponent {
  render () {
    const aboutList = [{
      icon: github,
      title: 'github',
    }];

    return (
      <div className={styles.container}>
        <h1><FormattedMessage {...locale.aboutusTitle} /></h1>
        <section className={styles['aboutus-block']}>
          {
            aboutList.map(({ icon, title }, index) => (
              <About key={index} icon={icon} title={title} />
            ))
          }
        </section>
      </div>
    );
  }
}
