import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Aquaculture from 'components/Aquaculture';
import { getFishKind } from 'reducers/fishkind';

const mapStateToProps = (state) => {
  return {
    fishkind: state.fishkind,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFishKind: bindActionCreators(getFishKind, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Aquaculture);
