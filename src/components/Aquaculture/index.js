import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import localeIntl from './locale';
import styles from './aquaculture.scss';
import Fish from './Fish';
import fishIcon0 from 'assets/fish0.png';
import fishIcon1 from 'assets/fish1.png';
import fishIcon2 from 'assets/fish2.png';
import fishIcon3 from 'assets/fish3.png';

export default class Aquaculture extends PureComponent {
  static defaultProps = {
    className: 'container',
    title: 'aquacuturistTitle',
    description: 'aquacuturistDesc',
    fishkind: [],
    intl: { locale: 'en-us' },
  }

  componentDidMount () {
    // this.props.getFishKind();
  }

  render () {
    const { fishkind, intl: { locale } } = this.props;
    const fishList = [{
      icon: fishIcon0,
      title: 'coldFresh',
    }, {
      icon: fishIcon1,
      title: 'coldSalt',
    }, {
      icon: fishIcon2,
      title: 'warmFresh',
    }, {
      icon: fishIcon3,
      title:'warmSalt',
    }];

    return (
      <div className={styles[this.props.className]}>
        <h1><FormattedMessage {...localeIntl[this.props.title]} /></h1>
        <p className={styles.description}><FormattedMessage {...localeIntl[this.props.description]} /></p>
        <section className={styles['fish-block']}>
          {
            fishList.map(({ icon, title }, index) => (
              <Fish
                key={index}
                icon={icon}
                title={title}
                fishkind={fishkind}
                locale={locale}
              />
            ))
          }
        </section>
      </div>
    );
  }
}
