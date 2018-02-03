import { connect } from 'react-redux';
import Main from 'components/Main';
import { changeLocale } from 'reducers/intl';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
  return {
    intl: state.intl,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLocale: bindActionCreators(changeLocale, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
