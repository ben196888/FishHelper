import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Aquaculture } from 'components';

export default class Consumers extends PureComponent {

  static defaultProps = {
    fishkind: [],
    intl: { locale: 'en-us' },
  }

  render () {
    const { fishkind, getFishKind, intl } = this.props;

    return (
      <Aquaculture
        className="consumer-container"
        title="consumerTitle"
        description="consumerDesc"
        fishkind={fishkind}
        getFishKind={getFishKind}
        intl={intl}
        isConsumer
      />
    );
  }
}
