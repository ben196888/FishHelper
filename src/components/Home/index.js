import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './home.scss';
import { Input } from 'components';
import { FormattedMessage } from 'react-intl';
import locale from './locale';
import Article from './Article';
import article0 from 'assets/article0.png';
import article1 from 'assets/article1.png';
import article2 from 'assets/article2.png';

export default class Home extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.value);
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render () {
    const { value } = this.state;

    const info = [
      { title: 'oceanIssue', text: 'oceanDesc', icon: article0 },
      { title: 'IamAquacuturist', text: 'aquacultureDesc', icon: article1 },
      { title: 'IamConsumer', text: 'IamConsumerDesc', icon: article2 },
    ];

    return (
      <div className={styles.container}>
        <div className={styles.background} />
        <div className={styles.content}>
          <h1><FormattedMessage {...locale.homeTitle} /></h1>
          <form className={styles['search-block']} onSubmit={this.handleSubmit}>
            <Input
              name="search"
              value={value}
              placeholder="Enter seafood"
              onChange={this.handleChange}
              icon="search"
            />
            <h4><FormattedMessage {...locale.searchSeafood} /></h4>
            <p><FormattedMessage {...locale.searchDesc} /></p>
          </form>
          <div className={styles['article-block']}>
            {
              info.map(({icon, text, title}, index) => (
                <Article key={index}
                  icon={icon}
                  title={title}
                  text={text}
                />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}
