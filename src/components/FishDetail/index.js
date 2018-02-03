import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './fish-detail.scss';
import { Button } from 'components';
import { Link } from 'react-router';
import PATHS from 'constants/paths';

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
    const { fishInfo, intl: { locale }, fishkind, params: { id }, pathname } = this.props;

    const { url } = fishkind.find((f) => {
      return f.ID.toString() === id.toString();
    });
    const fishList = fishInfo[localeMap[locale]];
    const oneFishInfo = fishList[0];
    const forConsumer = fishInfo['for_consumer'];
    const isAquaculture = pathname.indexOf('aquaculture') > -1;

    return (
      <div className={styles.container}>
        <img className={styles.img} src={url} alt="images" />
        <section className={styles['fish-info']}>
          <h2>Information</h2>
          <p>Name: {oneFishInfo.name}</p>
          <p>Type: {oneFishInfo['class']}</p>
        </section>
        {
          isAquaculture ? (
            <div className={styles['table-container']}>
              <table>
                <thead>
                  <tr>
                    <th>Feed Name</th>
                    <th>Feed Brand</th>
                    <th>Feed Price</th>
                    <th>Feed Nutrition</th>
                    <th>Feed Composition</th>
                    <th>Feed Certification</th>
                    <th>Feed Description</th>
                    <th>Envirnmental Impact</th>
                    <th>Feed Efficiency</th>
                    <th>FIFO</th>
                    <th>Feeding Level</th>
                    <th>Culture Technique</th>
                    <th>Suitable season for releasing juveniles</th>
                    <th>Water temperatur</th>
                    <th>Water quality</th>
                    <th>Stocking Density</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    fishList.map((feed, index) => {
                      const links = feed.tech && feed.tech.split(',');

                      return (
                        <tr key={index}>
                          <td>{feed.feedname}</td>
                          <td>{feed.src}</td>
                          <td>{feed.pirce}</td>
                          <td>{feed.nutrition}</td>
                          <td>{feed.comp}</td>
                          <td>{feed.certification}</td>
                          <td>{feed.intro}</td>
                          <td>{feed.efficiency}</td>
                          <td>{feed.impact}</td>
                          <td>{feed.fifo}</td>
                          <td>{feed.amount}</td>
                          <td>{
                            links.map((l, index) => {
                              return <a key={index} href={l}>Feed Tech[{index + 1}]</a>;
                            })
                          }</td>
                          <td>{feed.season}</td>
                          <td>{feed.temp}</td>
                          <td>{feed.quality}</td>
                          <td>{feed.density}</td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </table>
            </div>
          ) : (
            <div className={styles['consumer-container']}>
              {
                forConsumer.map((account, index) => (
                  <div key={index} className={styles.block}>
                    <div>
                      <div className={styles['person-icon']} />
                      <p>Account: {account.account_name}</p>
                      <p>Start Time: {account.processing.start_time}</p>
                      <p>Density: {account.processing.density}</p>
                    </div>
                    <div>
                      <h3>Feed Info</h3>
                      <table>
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Source</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            account.processing.feed_info.map((feedInfo, index) => (
                              <tr key={index} className={styles['feed-info']}>
                                <td>{feedInfo.Name}</td>
                                <td>{feedInfo.Source}</td>
                                <td>{feedInfo.Price}</td>
                              </tr>
                            ))
                          }
                        </tbody>
                      </table>
                    </div>
                    <div>
                      <h3>Feed Method</h3>
                      <table>
                        <thead>
                          <tr>
                            <th>Time</th>
                            <th>Amount</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            account.feed_method.map((method, index) => (
                              <tr key={index} className={styles['feed-info']}>
                                <td>{method.A_Time}</td>
                                <td>{method.quaililty}</td>
                                <td><img src={method.Picture} alt="images" /></td>
                              </tr>
                            ))
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))
              }
            </div>
          )
        }
        <Link className={styles.link} to={isAquaculture ? `${PATHS.CONSUMERS}/${id}` : `${PATHS.AQUACULTURE}/${id}`}>
          <Button>I'm {isAquaculture ? 'Consumer' : 'Aquaculture'}</Button>
        </Link>
      </div>
    );
  }
}
