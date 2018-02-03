import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Aquaculture } from 'components';

export default class Consumers extends PureComponent {

  static defaultProps = {
    fishkind: [],
  }

  render () {
    const { fishkind, getFishKind } = this.props;

    return (
      <Aquaculture
        className="consumer-container"
        title="consumerTitle"
        fishkind={fishkind}
        getFishKind={getFishKind}
      />
    );
  }
}
