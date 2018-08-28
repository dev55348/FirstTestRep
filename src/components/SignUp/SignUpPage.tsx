import * as React from 'react'
import { StoreState } from '../../store';
import { connect } from 'react-redux';
import { SignUp }  from '../../service/entities';
import { ServiceSignUp } from '../../store/signUp';

class BootStrapperStateProps {
    modalIsOpen: boolean;
}
class BootstraperDispatchProps {
  setIsClose: () => void;
  sendRequest: (login: string, pass: string, email: string) => void;
}


const mapDispatchToProps = (dispatch): BootstraperDispatchProps => {
  return {
    setIsClose: () => {
        dispatch(ServiceSignUp.setIsOpen(false));
    },
    sendRequest: (login,pass, email) => {
        var signUpData: SignUp = {
            account: login,
            password: pass,
            email: email
        }
        dispatch(ServiceSignUp.sendRequest(signUpData));
    }
  }
}

class SignUpPage extends React.Component<BootStrapperStateProps & BootstraperDispatchProps, {}>{

    sendRequest =() => {
        this.props.sendRequest(this.refs.formLogin["value"].toString(),this.refs.formPass["value"].toString(), this.refs.formEmail["value"].toString());
    }
    
    render() {
        return <div style={{display: "block"}} className={`flex middle center modal open}`}>
        <div className={`row modal-content 500 `}>
            <div className="col-12 middle modal-title">Sign Up</div>
            <div className="col-12 modal-body">
        <div className="content-wrapper">
        <label>Sign up</label>
        <label>Username</label>
        <input type="text" ref="formLogin"/>
        <label>Password</label>
        <input type="password" ref="formPass"/>
        <label>email</label>
        <input type="text" ref="formEmail"/>
        </div>
        </div>
            <button onClick={this.sendRequest}>SignUp</button>
            <button onClick={this.props.setIsClose}>Close</button>
            <div className="col-12 middle modal-footer"></div>
        </div>
        
        </div>
    }
}

const mapStateToProps = (state: StoreState): BootStrapperStateProps => {
    return {
        modalIsOpen: state.signUp.isOpen
    };
  }
  
export default connect<BootStrapperStateProps, BootstraperDispatchProps, any>(mapStateToProps, mapDispatchToProps)(SignUpPage)