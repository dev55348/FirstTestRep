import * as React from 'react'
import { StoreState } from '../../store';
import { connect } from 'react-redux';
import { SignUp } from '../../service/entities';
import { ServiceSignUp } from '../../store/signUp';
import './signUpPage.scss';

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

    sendRequest = () => {
        var login = this.refs.formLogin["value"].toString();
        var password = this.refs.formPass["value"].toString();
        var email = this.refs.formEmail["value"].toString();
        var passwordRepeat = this.refs.formPassRepeat["value"].toString();

        if (login !== "" && password !== "" && email !== "" && passwordRepeat === password) {
            this.props.sendRequest(login, password, email);
        } else {
            var error = {
                formLogin: "",
                formPassword: "",
                formEmail: "",
                formPasswordAreNotEqual: ""
            }
            login === "" ? error.formLogin = "login can not be empty" : "";
            password === "" ? error.formPassword = "password can not be empty" : "";
            email === "" ? error.formEmail = "email can not be empty" : "";
            passwordRepeat == password ? "" : error.formPasswordAreNotEqual = "passwords are not equals"

            this.props.setError(error);
        }

    }

    render() {
        return <div style={{ display: "block" }} className={`modal open}`}>
            <div className={`modal-content 500 `}>
                <div className="modal-title">
                    <p className="title">Sign Up</p>
                    <p className="text">Sign up to start reading, contributing, sharing stories you love, and more!</p>
                </div>
                <div className="modal-body">
                    <div className="content-wrapper">
                        {this.props.error["globalError"] !== "" ? <div style={{ color: "red" }}>{this.props.error["globalError"]}</div> : ""}

                        <label>Username</label>
                        {this.props.error["formLogin"] !== "" ? <div style={{ color: "red" }}>{this.props.error["formLogin"]}</div> : ""}
                        <input type="text" ref="formLogin" />

                        <label>Password</label>
                        {this.props.error["formPassword"] !== "" ? <div style={{ color: "red" }}>{this.props.error["formPassword"]}</div> : ""}
                        <input type="password" ref="formPass" />

                        <label>Password Repeat</label>
                        {this.props.error["formPasswordAreNotEqual"] !== "" ? <div style={{ color: "red" }}>{this.props.error["formPasswordAreNotEqual"]}</div> : ""}
                        <input type="password" ref="formPassRepeat" />

                        <label>email</label>
                        {this.props.error["formEmail"] !== "" ? <div style={{ color: "red" }}>{this.props.error["formEmail"]}</div> : ""}
                        <input type="text" ref="formEmail" />
                    </div>
                </div>
                <div className="modal-footer">
                    <button onClick={this.sendRequest} className="button">SignUp</button>
                    <button onClick={this.props.setIsClose} className="button">Close</button>
                </div>
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