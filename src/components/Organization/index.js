import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Block from './Block';
import FRI from 'assets/FRI.png';
import styles from './organization.scss';
export default class Organization extends PureComponent {
  
  
  render () {
    const info = [
      { title: 'oragTitle', icon: FRI },
      { title: 'oragTitle', icon: FRI },
      { title: 'oragTitle', icon: FRI },
    ];
    return (
      <div>
        <div className={styles.container}>
          <select className={styles.country}>
            <option value="en-us">美國</option>
            <option value="zh-cn">中國</option>
            <option value="zh-tw">台灣</option>
          </select>        
          <div className={styles['article-block']}>
            {
              info.map(({title, icon}, index) => (
                <Block
                  key={index}
                  title={title}
                  icon={icon}
                />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}
