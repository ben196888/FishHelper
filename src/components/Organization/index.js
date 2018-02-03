import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import Block from './Block';
import locale from './locale';
import trfin from 'assets/tfrin.png';
import twoxsea from 'assets/twoxsea.png';
import europ_fisheris from 'assets/europ-fisheris.png';
import nmfs from 'assets/nmfs.png';
import shuichan from 'assets/shuichan.png';
import ntou from 'assets/ntou.png';
import styles from './organization.scss';
import { injectIntl } from 'react-intl';

const info = {
  'foreign':[
    { title: 'twoxsea', icon: twoxsea, url: 'http://twoxsea.com/our-mission/' },
    { title: 'europ-fisheris', icon: europ_fisheris, url: 'https://ec.europa.eu/fisheries/' },
    { title: 'nmfs', icon: nmfs, url: 'http://www.nmfs.noaa.gov/' },
    { title: 'shuichan', icon: shuichan, url: 'http://www.shuichan.cc/news_list.asp?c_id=164&s_id=273' }],
  'internal':[
    { title: 'tfrin', icon: trfin, url: 'https://www.tfrin.gov.tw/mp.asp?mp=1' },
    { title: 'ntou', icon: ntou, url: 'https://www.ntou.edu.tw/bin/home.php' }],
};
export class Organization extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      value: 'foreign',
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }
  
  render () {
    const { intl: { formatMessage } } = this.props;
    
    return (
      <div className={styles.container}>
        <h1><FormattedMessage {...locale.oragTitle} /></h1>
        <select className={styles.country} onChange={this.handleChange} value={this.state.value}>
          <option /> 
          <option value="internal" >{formatMessage(locale.internalOrg)}</option>
          <option value="foreign">{formatMessage(locale.foriegnOrg)}</option>
        </select>        
        <div className={styles['article-block']}>
          {
            info[this.state.value].map(({title, icon, url}, index) => (
              <Block
                key={index}
                title={title}
                icon={icon}
                url={url}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default injectIntl(Organization);
