import { connect } from 'react-redux';
import Home from 'components/Home';
import { toggleDialog } from 'reducers/ui';
import { getPost } from 'reducers/post';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
  return {
    ui: state.ui,
    post: state.post,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDialog: bindActionCreators(toggleDialog, dispatch),
    getPost: bindActionCreators(getPost, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
