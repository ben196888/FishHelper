import { connect } from 'react-redux';
import Home from 'components/Home';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
  return {
    fishkind: state.fishkind,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    push: bindActionCreators(push, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
