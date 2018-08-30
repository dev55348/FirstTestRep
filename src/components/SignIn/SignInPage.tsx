import * as React from 'react'
import { ServiceSignIn } from '../../store/SignIn';
import { StoreState } from '../../store';
import { connect } from 'react-redux';
import { SignIn }  from '../../service/entities';

class BootStrapperStateProps {
    error: object;
}
class BootstraperDispatchProps {
  setIsClose: () => void;
  sendRequest: (login: string, pass: string) => void;
  setError: (error) => void;
}


const mapDispatchToProps = (dispatch): BootstraperDispatchProps => {
  return {
    setIsClose: () => {
        dispatch(ServiceSignIn.setIsOpen(false));
    },
    sendRequest: (login,pass) => {
        var signInData: SignIn = {
            account: login,
            password: pass
        }
        dispatch(ServiceSignIn.sendRequest(signInData));
    },
    setError: (error) => {
        dispatch(ServiceSignIn.setError(error));
    }
  }
}

class SignInPage extends React.Component<BootStrapperStateProps & BootstraperDispatchProps, {}>{

    sendRequest =() => {
        if(this.refs.formLogin["value"].toString() !== "" && this.refs.formPass["value"].toString() !== "") 
        {
            this.props.sendRequest(this.refs.formLogin["value"].toString(),this.refs.formPass["value"].toString());
        } else {
            var error = {
                formLogin: "",
                formPassword: ""
            };
            this.refs.formLogin["value"].toString() !== "" ? error.formLogin = "" : error.formLogin = "login can not be empty";
            this.refs.formPass["value"].toString() !== "" ? error.formPassword = "" : error.formPassword = "password can not be empty";
            this.props.setError(error);
        }
        
    }
    
    
    render() {
        return <div style={{display: "block"}} className={`flex middle center modal open}`}>
        <div className={`row modal-content 500 `}>
            <div className="col-12 middle modal-title">Sign In</div>
            <div className="col-12 modal-body">
                <div className="content-wrapper">
                    <label>SignIn</label>
                    {this.props.error["globalError"] !== "" ? <div style={{color: "red"}}>{this.props.error["globalError"]}</div> : ""}
                    <label>Login</label>
                    {this.props.error["formLogin"] !== "" ? <div style={{color: "red"}}>{this.props.error["formLogin"]}</div> : ""}
                    <div style={{color: "red"}}></div>
                    <input type="text" ref="formLogin"/>
                    <label>Password</label>
                    {this.props.error["formPassword"] !== "" ? <div style={{color: "red"}}>{this.props.error["formPassword"]}</div> : ""}
                    <input type="password" ref="formPass"/>
                </div>
            </div>
            <button onClick={this.sendRequest}>SignIn</button>
            <button onClick={this.props.setIsClose}>Close</button>
            <div className="col-12 middle modal-footer"></div>
        </div>
        
        </div>
    }
}

const mapStateToProps = (state: StoreState): BootStrapperStateProps => {
    return {
        error: state.signIn.error
    };
  }
  
export default connect<BootStrapperStateProps, BootstraperDispatchProps, any>(mapStateToProps, mapDispatchToProps)(SignInPage)