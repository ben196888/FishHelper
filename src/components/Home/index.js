import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import image from 'assets/bear.jpg';
import styles from './home.scss';
import { Dialog, Button, Loading } from 'components';

export default class Home extends PureComponent {
  static propTypes = {
    toggleDialog: PropTypes.func,
    ui: PropTypes.object,
    getPost: PropTypes.func,
    post: PropTypes.object,
  };

  static defaultProps = {
    toggleDialog: () => console.log('onToggle'),
    ui: {
      dialog: { show: false, component: null },
      isLoading: false,
    },
    getPost: () => console.log('getPost'),
    post: [],
  };

  handleDialog = () => {
    this.props.toggleDialog('testDialog');
  }

  handleApiCall = () => {
    this.props.getPost();
  }

  render () {
    const {
      ui: {
        dialog: { show, component },
        isLoading,
      },
      toggleDialog,
      post,
    } = this.props;

    return (
      <div className={styles.container}>
        <h1>Dialog / Button Component</h1>
        <Button onClick={this.handleDialog}>Dialog Test</Button>
        <h1>Image resource Test</h1>
        <img style={{ width: '300px' }} src={image} alt="images" />
        <h1>API Test</h1>
        <Button onClick={this.handleApiCall}>Fetch API</Button>
        {isLoading && <Loading />}
        {
          !isLoading && post.title && (
            <div className={styles['api-block']}>
              <h4>Title: {post.title}</h4>
              <p>Body: {post.body}</p>
            </div>
          )
        }
        <Dialog
          show={show && component === 'testDialog'}
          onToggle={toggleDialog}
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget mauris. Aliquam dapibus, ante quis fringilla feugiat, mauris risus condimentum massa, at elementum libero quam ac ligula. Pellentesque at rhoncus dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor venenatis mauris placerat tristique eget id dolor. Quisque blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec elementum tincidunt.<br /><br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget mauris. Aliquam dapibus, ante quis fringilla feugiat, mauris risus condimentum massa, at elementum libero quam ac ligula. Pellentesque at rhoncus dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor venenatis mauris placerat tristique eget id dolor. Quisque blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec elementum tincidunt.
        </Dialog>
      </div>
    );
  }
}
