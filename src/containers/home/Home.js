import { connect } from 'react-redux';
import Home from '../../components/home/Home'




  const mapStateToProps = (state)=> ({
      isLoginPending: state.login.isLoginPending,
      isLoginSuccess: state.login.isLoginSuccess,
      loginError: state.login.loginError
    
  })


export default connect(mapStateToProps,null)(Home)