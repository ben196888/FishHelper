import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Consumers from 'components/Consumers';
import { getFishKind } from 'reducers/fishkind';
import { selectType } from 'reducers/ui';

const mapStateToProps = (state) => {
  return {
    fishkind: state.fishkind,
    ui: state.ui,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFishKind: bindActionCreators(getFishKind, dispatch),
    selectType: bindActionCreators(selectType, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Consumers);
