import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FishDetail } from 'components';
import { getFishInfo } from 'reducers/fishInfo';

const mapStateToProps = (state) => {
  return {
    fishInfo: state.fishInfo,
    fishkind: state.fishkind,
    intl: state.intl,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFishInfo: bindActionCreators(getFishInfo, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FishDetail);
