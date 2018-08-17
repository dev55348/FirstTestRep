import React, { Component } from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent';
import UserActivityList from './components/UserActivityList';
import UserCreationForm from './components/UserCreationForm';
import UserUpdateForm from './components/UserUpdateForm';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { users: [], isLoading: false, userToView:[], userToUpdate: {}, isUpdate: false, indexOfUser: 0, firstNameBorderColor: "darkgrey", lastNameBorderColor: "darkgrey"};
    this.filterUserList = this.filterUserList.bind(this);
    this.sortByFirstName = this.sortByFirstName.bind(this);
    this.sortByLastName = this.sortByLastName.bind(this);
  }

  componentWillMount() {
    this.loadUsers();
  }

  render() {
    return [
      <SearchComponent key={"search"} onfilteredUserList={this.filterUserList} />,
      <UserActivityList key={"user"} users={this.state.userToView} isLoading={this.state.isLoading} onDelete={this.deleteUser} onUpdate={this.updateUser} onSortByFirstName={this.sortByFirstName} onSortByLastName={this.sortByLastName} />,
      this.renderFormDependOnIsUpadte()
    ]
  }
  renderFormDependOnIsUpadte = () => {
    if (this.state.isUpdate === true){
      return <UserUpdateForm key={"updateForm"} onUserUpdate={this.onUserUpdate} userToUpdate={this.state.userToUpdate} indexOfUser={this.state.indexOfUser} />
    } else {
    return <UserCreationForm key={"createForm"} onUserAdd={this.insertUsers} firstNameBorderColor={this.state.firstNameBorderColor} lastNameBorderColor={this.state.lastNameBorderColor} />
    }
  }

  sortByFirstName = () => {
    var sortList = this.state.users;
    sortList.sort(function(a, b){
      var keyA = a.firstName,
          keyB = b.firstName;
      if(keyA < keyB) return -1;
      if(keyA > keyB) return 1;
      return 0;
    });
    this.setState({userToView: sortList});
  }

  sortByLastName = () => {
    var sortList = this.state.users;
    sortList.sort(function(a, b){
      var keyA = a.lastName,
          keyB = b.lastName;
      if(keyA < keyB) return -1;
      if(keyA > keyB) return 1;
      return 0;
    });
    this.setState({userToView: sortList});
  }

  updateUser = (id) => {
    this.setState({userToUpdate: this.state.users.filter((item, index) => index === id)[0], isUpdate:true, indexOfUser: id});
  }
  onUserUpdate = (firstName, lastName, isActive, id) => {
    var userListToUpdate = this.state.users;
    userListToUpdate[id].firstName = firstName;
    userListToUpdate[id].lastName = lastName;
    userListToUpdate[id].isActive = isActive;
    this.setState({users: userListToUpdate, isUpdate: false});
  }

  filterUserList = (name) => {
    if(name !== "")
    {
      var filteredList = [];
      this.state.users.forEach(function (item){
        if(item.firstName.indexOf(name) !== -1 || item.lastName.indexOf(name) !== -1)
        {
          filteredList.push(item);
        }
      });
      this.setState({userToView: filteredList});
    } else
    {
      this.setState({userToView: this.state.users});
    }
    
  }

  insertUsers = (firstName, lastName, isActive) => {
    if((firstName !== "") && (lastName !== ""))
    {
      var users = [...this.state.users, { firstName: firstName, lastName:lastName, isActive: isActive }];
      this.setState({ isLoading: false, users: users, userToView: users, firstNameBorderColor: "darkgrey", lastNameBorderColor: "darkgrey"});
    } else {
      if(firstName === "")
      {
        this.setState({firstNameBorderColor: "red"});
      } else{
        this.setState({lastNameBorderColor: "red"});
      }
    }
  }

  deleteUser = (id) => {
    var users = this.state.users.filter((item, index) => index !== id);
    this.setState({ isLoading: false, users: users, userToView: users });
  }

  loadUsers() {
    var userList = [
      { firstName: "Jack", lastName: "JackLast", isActive: false },
      { firstName: "John", lastName: "JohnLast", isActive: true },
      { firstName: "Vasil", lastName: "VasilLast", isActive: false },
      { firstName: "Petro", lastName: "PetroLast", isActive: true },
    ]

    this.setState({ users: [], isLoading: true });

    setTimeout(() => {
      this.setState({ users: userList, isLoading: false, userToView: userList})
    }, 2000);
  }
}
export default App;