import * as React from 'react'
import { ServiceSignIn } from '../../store/SignIn';
import { StoreState } from '../../store';
import { connect } from 'react-redux';

class BootStrapperStateProps {
    modalIsOpen: boolean;
}
class BootstraperDispatchProps {
  loadIsOpen: () => void;
}


const mapDispatchToProps = (dispatch): BootstraperDispatchProps => {
  return {
    loadIsOpen: () => {
        dispatch(ServiceSignIn.loadIsOpen);
    }
  }
}

class SignInPage extends React.Component<BootStrapperStateProps & BootstraperDispatchProps, {}>{
    
    
    render() {
        return <div style={{display: "block"}} className={`flex middle center modal open}`}>
        <div className={`row modal-content 500 `}>
            <div className="col-12 middle modal-title">Sign in</div>
            <div className="col-12 modal-body">
                <div className="content-wrapper">
                    <label>Sign in</label>
                    <label>Login</label>
                    <input type="text"/>
                    <label>Password</label>
                    <input type="password"/>
                </div>
            </div>
            <button >Close</button>
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