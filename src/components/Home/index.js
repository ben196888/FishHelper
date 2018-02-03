import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import image from 'assets/bear.jpg';
import styles from './home.scss';
import { Dialog, Button, Loading } from 'components';

export default class Home extends PureComponent {
  render () {
    return (
      <div className={styles.container}>
        <h1>Dialog / Button Component</h1>
      </div>
    );
  }
}
