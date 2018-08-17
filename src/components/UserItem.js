import React from 'react';

const UserItem = (props) => {
    let color = props.isActive ? "green" : "grey";
    // return <div style={{ color: color }}>Hello from {props.firstName} {props.lastName}<button onClick={props.onDelete}>x</button><button onClick={props.onUpdate}>Update</button></div>;
    return <tr style={{ color: color }}>
        <td>Hello from</td>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td><button onClick={props.onDelete}>x</button></td>
        <td><button onClick={props.onUpdate}>Update</button></td>
      </tr>
}
export default UserItem;