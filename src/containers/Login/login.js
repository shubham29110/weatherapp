import { connect } from 'react-redux';
import LoginForm from '../../components/Login/Login'
import { setLoginPending,setLoginSuccess,setLoginError } from '../../actions/login_action';



  const mapStateToProps = (state)=> ({
      isLoginPending: state.login.isLoginPending,
      isLoginSuccess: state.login.isLoginSuccess,
      loginError: state.login.loginError
    
  })

const mapDispatchToProps = {
  setLoginPending,
  setLoginSuccess,
  setLoginError
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)