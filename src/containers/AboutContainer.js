import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import About from 'components/About';
import { changeLocale } from 'reducers/intl';

const mapDispatchToProps = (dispatch) => {
  return {
    changeLocale: bindActionCreators(changeLocale, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(About);
