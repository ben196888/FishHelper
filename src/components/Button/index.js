import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './button.scss';
import cx from 'classnames';

export default class Dialog extends PureComponent {

  static propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.any,
    type: PropTypes.string,
  };

  static defaultProps = {
    className: 'btn',
    onClick: () => console.log('button'),
    children: null,
    type: 'button',
  };

  render () {
    const { className, onClick, children, type } = this.props;

    return (
      <button
        className={styles[className]}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    );
  }
}
