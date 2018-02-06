import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './button.scss';
import cx from 'classnames';

const Dialog = ({ className, onClick, children, type }) => {
  return (
    <button
      className={styles[className]}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

Dialog.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any,
  type: PropTypes.string,
};

Dialog.defaultProps = {
  className: 'btn',
  onClick: () => console.log('button'),
  children: null,
  type: 'button',
};

export default Dialog;
