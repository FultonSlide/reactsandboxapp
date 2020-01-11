import React, { Component } from 'react';

class Users extends Component {
    render(){
        const { users } = this.props;
        const userList = users.map(user => {
            return (
                <div className='user' key={ user.id }>
                    <div>Name: { user.name }</div>
                    <div>Age: { user.age }</div>
                    <div>Belt: { user.belt }</div>
                </div>
            )
        });
        return(
            <div className="user-list">
                { userList }
            </div>
        )
    }
}

export default Users;