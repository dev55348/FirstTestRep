import React, {Component} from 'react';

class ValidationInput extends Component{
constructor(props){
    super(props);
    this.state = {type: this.props.type, isValid: this.props.isValid};
}
    componentWillMount() {
        this.setState({isValid: this.props.isValid});
    }

    onChange = (e) => {
        this.setState({isValid: this.props.isValid});
        this.props.onKeyPress(e.target.value);
    }

    render() {
        return <input type={this.props.type} style={{borderColor: this.state.isValid ? "darkgrey" : "red"}} placeholder={this.props.placeholder} defaultValue={this.props.defaultValue} onChange={(e) => {this.onChange(e)}}/>
    }
} export default ValidationInput;