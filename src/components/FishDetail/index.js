import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './fish-detail.scss';
import { Button } from 'components';
import { Link } from 'react-router';
import PATHS from 'constants/paths';
import starIcon from 'assets/star.svg';

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

  starGenerator = (account) => {
    const rows = [];
    for (let i = 0; i < account.score; i += 1) {
      rows.push((
        <img
          src={starIcon}
          key={i}
          alt="star"
          className={styles.star}
        />
      ));
    }
    return <span>{rows}</span>;
  }

  render () {
    const { fishInfo, intl: { locale }, fishkind, params: { id }, pathname } = this.props;

    const { picURL } = fishkind.find((f) => {
      return f.ID.toString() === id.toString();
    });
    const fishList = fishInfo[localeMap[locale]];
    const oneFishInfo = fishList[0];
    const forConsumer = fishInfo['for_consumer'];
    const isAquaculture = pathname.indexOf('aquaculture') > -1;

    return (
      <div className={styles.container}>
        <img className={styles.img} src={picURL} alt="images" />
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
                          <td>{feed.amount.indexOf('http') > -1 ? <a href={feed.amount} target="_blank">attachment</a> : feed.amount}</td>
                          <td>{
                            links.map((l, index) => {
                              return <a key={index} href={l}>Feed Tech[{index + 1}]</a>;
                            })
                          }</td>
                          <td>{feed.season}</td>
                          <td>{feed.temp}</td>
                          <td>{feed.quality.indexOf('http') > -1 ? <a href={feed.quality} target="_blank">attachment</a> : feed.quality}</td>
                          <td>{feed.density.indexOf('http') > -1 ? <a href={feed.density} target="_blank">attachment</a> : feed.density}</td>
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
                    <div className={styles['person-block']}>
                      <div className={styles['person-icon']} />
                      <p>Account: {account.account_name}</p>
                      <p>Start Time: {account.processing.start_time}</p>
                      <p>Density: {account.processing.density} {account.processing.density && 'kg/m^2'}</p>
                      <p>Score: <br />{this.starGenerator(account)}</p>
                    </div>
                    <div>
                      <h3>Feed Info(飼料資訊)</h3>
                      <table>
                        <thead>
                          <tr>
                            <th>Name<br />(飼料名稱)</th>
                            <th>Source<br />(飼料來源)</th>
                            <th>Price<br />(飼料價格)</th>
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
                      <h3>Feed Record(餵食紀錄)</h3>
                      <table>
                        <thead>
                          <tr>
                            <th>Time<br />(餵食時間)</th>
                            <th>Quality<br />(餵食量)</th>
                            <th>Picture<br />(紀錄圖片)</th>
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
