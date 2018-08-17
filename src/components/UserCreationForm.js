import React, { Component } from 'react';
import ValidationInput from './ValidationInput';

class UserCreationForm extends Component {
  constructor(props){
    super(props);
    this.state = {isFirstNameValid: false, isLastNameValid: false, firstName: "", lastName: ""}
  }
    onKeyPress = (e) => {
      if(e.key === "Enter") {
        this.props.onUserAdd(this.refs.inputFirstName.value, this.refs.inputLastName.value, this.refs.inputCheckbox.checked);
      } 
    }

    onSubmit = () => {
      if((this.state.firstName !== "") && (this.state.lastName !== ""))
      {
        debugger;
      } else
      {
        if(this.state.firstName === "")
        {
          this.setState({isFirstNameValid: false});
        } else 
        {
          this.setState({isLastNameValid: false});
        }
      }
    }

    onFirstNameChenge = (e) => {
      debugger;
      this.setState({firstName: e});
      if(e === "")
      {
        this.setState({isFirstNameValid: false});
      } else {
        this.setState({isFirstNameValid: true});
      }
    }

    onLastNameChenge = (e) => {
      this.setState({lastName: e});
      if(e === "")
      {
        this.setState({isLastNameValid: false});
      } else {
        this.setState({isLasttNameValid: true});
      }
      
    }

    render() {
        return <div>
        {/* <input placeholder="Enter first name" ref='inputFirstName' onKeyPress={this.onKeyPress} style={{borderColor: this.props.firstNameBorderColor}}/>
        <input placeholder="Enter last name" ref='inputLastName' onKeyPress={this.onKeyPress} style={{borderColor: this.props.lastNameBorderColor}}/> */}
        <ValidationInput placeholder={"Enter first name"} type={"text"} isValid={this.state.isFirstNameValid} onKeyPress={(e) => {this.onFirstNameChenge(e)}}/>
        <ValidationInput placeholder={"Enter last name"} type={"text"} isValid={this.state.isLastNameValid} onKeyPress={(e) => {this.onLastNameChenge(e)}}/>
        <input type='checkbox' ref='inputCheckbox'/>
        {/* <button onClick={() => {this.props.onUserAdd(this.refs.inputFirstName.value, this.refs.inputLastName.value, this.refs.inputCheckbox.checked) }}>Add user</button> */}
        <button onClick={() => {this.onSubmit()}}>Add user</button>
      </div>
      
    }
  }
export default UserCreationForm;