import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './fish-detail.scss';

const localeMap = {
  'en-us': 'us_context',
  'zh-tw': 'tw_context',
  'zh-cn': 'cn_context',
};

export default class FishDetail extends PureComponent {
  static defaultProps = {
    fishkind: [],
    intl: { locale: 'en-us' },
    fishInfo: {
      'us-context': [{}],
      'tw-context': [{}],
      'cn-context': [{}],
    },
  }

  componentDidMount () {
    const { getFishInfo, params: { id } } = this.props;
    this.props.getFishInfo(id);
  }

  render () {
    const { fishInfo, intl: { locale }, fishkind, params: { id } } = this.props;

    const { url } = fishkind.find((f) => {
      return f.ID.toString() === id.toString();
    });
    const fishList = fishInfo[localeMap[locale]];
    const oneFishInfo = fishList[0];

    return (
      <div className={styles.container}>
        <img className={styles.img} src={url} alt="images" />
        <section className={styles['fish-info']}>
          <h2>Information</h2>
          <p>Name: {oneFishInfo.name}</p>
          <p>Type: {oneFishInfo['class']}</p>
        </section>
      </div>
    );
  }
}
