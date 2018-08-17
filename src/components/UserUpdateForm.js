import React, { Component } from 'react';
import ValidationInput from './ValidationInput';

class UserUpdateForm extends Component {
    onKeyPress = (e) => {
      debugger;
      if(e.key === "Enter") {
        this.props.onUserAdd(e.target.value, this.refs.inputLastName.value, this.refs.inputCheckbox.checked);
      } 
    }
    render() {
      return <div>
          {/* <input defaultValue={this.props.userToUpdate.firstName} onKeyPress={this.onKeyPress} ref='inputFirstName' />
          <input defaultValue={this.props.userToUpdate.lastName} onKeyPress={this.onKeyPress} ref='inputLastName' /> */}
          <ValidationInput defaultValue={this.props.userToUpdate.firstName} onKeyPress={(value) => this.onKeyPress(value)}/>
          <ValidationInput defaultValue={this.props.userToUpdate.lastName}/>
          <input type='checkbox' ref='inputCheckbox'/>
          <button onClick={() => {this.props.onUserUpdate(this.refs.inputFirstName.value, this.refs.inputLastName.value, this.refs.inputCheckbox.checked, this.props.indexOfUser) }}>Update</button>
        </div>
    }
}
export default UserUpdateForm;