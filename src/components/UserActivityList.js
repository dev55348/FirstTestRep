import React, { Component } from 'react';
import UserItem from './UserItem';

class UserActivityList extends Component {
    render() {
      return <div style={{ padding: 20, border: '1px solid black' }}>
        {
          this.props.isLoading
            ?
            <div>loading...</div>
            :
            <div>
                <table border="1">
                <tbody>
                  <tr>
                    <th>Caption</th>
                    <th><a onClick={this.props.onSortByFirstName} style={{color: "blue"}}>First name</a></th>
                    <th><a onClick={this.props.onSortByLastName} style={{color: "blue"}}>last name</a></th>
                    <th>Delete</th>
                    <th>Update</th>
                  </tr>
                    {this.props.users.map(
                      (item, index) =>
                        <UserItem
                          key={index}
                          firstName={item.firstName}
                          lastName={item.lastName}
                          isActive={item.isActive}
                          onDelete={() => { this.props.onDelete(index) }}
                          onUpdate={() => { this.props.onUpdate(index) }}
                        />
                    )}
                  </tbody>
                </table>
            </div>
        }
      </div>
    }
  }
export default UserActivityList;