import * as React from 'react'
import { StoreState } from '../../store';
import { connect } from 'react-redux';
import { SignUp }  from '../../service/entities';
import { ServiceSignUp } from '../../store/signUp';

class BootStrapperStateProps {
    modalIsOpen: boolean;
    error: object;
}
class BootstraperDispatchProps {
  setIsClose: () => void;
  sendRequest: (login: string, pass: string, email: string) => void;
  setError: (error) => void;
}


const mapDispatchToProps = (dispatch): BootstraperDispatchProps => {
  return {
    setIsClose: () => {
        dispatch(ServiceSignUp.setIsOpen(false));
    },
    sendRequest: (login, pass, email) => {
        var signUpData: SignUp = {
            account: login,
            password: pass,
            email: email
        }
        dispatch(ServiceSignUp.sendRequest(signUpData));
    },
    setError: (error) => {
        dispatch(ServiceSignUp.setError(error));
    }
  }
}

class SignUpPage extends React.Component<BootStrapperStateProps & BootstraperDispatchProps, {}>{

    sendRequest =() => {
        var login = this.refs.formLogin["value"].toString();
        var password = this.refs.formPass["value"].toString();
        var email = this.refs.formEmail["value"].toString();
        if(login !== "" && password !== "" && email !== "")
        {
            this.props.sendRequest(login, password,email);
        } else {
            var error = {
                formLogin: "",
                formPassword: "",
                formEmail: ""
            }
            login === "" ? error.formLogin = "login can not be empty" : "";
            password === "" ? error.formPassword = "password can not be empty" : "";
            email === "" ? error.formEmail = "email can not be empty" : "";
            this.props.setError(error);
        }
        
    }
    
    render() {
        return <div style={{display: "block"}} className={`flex middle center modal open}`}>
        <div className={`row modal-content 500 `}>
            <div className="col-12 middle modal-title">Sign Up</div>
            <div className="col-12 modal-body">
        <div className="content-wrapper">
        <label>Sign up</label>
        {this.props.error["globalError"] !== "" ? <div style={{color: "red"}}>{this.props.error["globalError"]}</div> : ""}
        <label>Username</label>
        {this.props.error["formLogin"] !== "" ? <div style={{color: "red"}}>{this.props.error["formLogin"]}</div> : ""}
        <input type="text" ref="formLogin"/>
        <label>Password</label>
        {this.props.error["formPassword"] !== "" ? <div style={{color: "red"}}>{this.props.error["formPassword"]}</div> : ""}
        <input type="password" ref="formPass"/>
        <label>email</label>
        {this.props.error["formEmail"] !== "" ? <div style={{color: "red"}}>{this.props.error["formEmail"]}</div> : ""}
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
        modalIsOpen: state.signUp.isOpen,
        error: state.signUp.error
    };
  }
  
export default connect<BootStrapperStateProps, BootstraperDispatchProps, any>(mapStateToProps, mapDispatchToProps)(SignUpPage)