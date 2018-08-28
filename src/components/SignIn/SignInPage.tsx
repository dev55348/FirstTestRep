import * as React from 'react'
import { ServiceSignIn } from '../../store/SignIn';
import { StoreState } from '../../store';
import { connect } from 'react-redux';
import { SignIn }  from '../../service/entities';

class BootStrapperStateProps {
    modalIsOpen: boolean;
}
class BootstraperDispatchProps {
  setIsClose: () => void;
  sendRequest: (login: string, pass: string) => void;
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
    }
  }
}

class SignInPage extends React.Component<BootStrapperStateProps & BootstraperDispatchProps, {}>{

    sendRequest =() => {
        this.props.sendRequest(this.refs.formLogin["value"].toString(),this.refs.formPass["value"].toString());
    }
    
    
    render() {
        debugger;
        return <div style={{display: "block"}} className={`flex middle center modal open}`}>
        <div className={`row modal-content 500 `}>
            <div className="col-12 middle modal-title">Sign In</div>
            <div className="col-12 modal-body">
                <div className="content-wrapper">
                    <label>SignIn</label>
                    <label>Login</label>
                    <input type="text" ref="formLogin"/>
                    <label>Password</label>
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
        modalIsOpen: state.signIn.isOpen
    };
  }
  
export default connect<BootStrapperStateProps, BootstraperDispatchProps, any>(mapStateToProps, mapDispatchToProps)(SignInPage)