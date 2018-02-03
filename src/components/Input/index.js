import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './input.scss';

export default class Input extends PureComponent {
  static defaultProps = {
    icon: null,
    label: null,
  }

  render () {
    const { label, placeholder, value, onChange, icon } = this.props;

    return (
      <label className={styles.container}>
        {label && <span>{label}</span>}
        <input
          className={styles.input}
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        {icon && <button type="submit" className={styles[icon]} />}
      </label>
    );
  }
}
