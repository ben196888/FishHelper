import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Aquaculture } from 'components';

export default class Consumers extends PureComponent {

  render () {
    return (
      <Aquaculture className="consumer-container" title="consumerTitle" />
    );
  }
}
