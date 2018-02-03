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
      url: 'https://github.com/EliTechTeam/FishHelper',
    }];

    return (
      <div className={styles.container}>
        <h1><FormattedMessage {...locale.aboutusTitle} /></h1>
        <section className={styles['aboutus-block']}>
          {
            aboutList.map(({ icon, title, url }, index) => (
              <About
                key={index}
                icon={icon}
                title={title}
                url={url}
              />
            ))
          }
          <div className={styles['aboutus-content']}>
            <h3><FormattedMessage {...locale.aboutUsContentTitle} /></h3>
            <section><FormattedMessage {...locale.aboutUsContent} /></section>
          </div>
        </section>
      </div>
    );
  }
}
