import React from 'react';

const Users = ({users}) => {
    const userList = users.map(user => {
        return user.age > 20 ? (
           <div className='user' key={ user.id }>
                <div>Name: { user.name }</div>
                <div>Age: { user.age }</div>
                <div>Belt: { user.belt }</div>
            </div> 
        ) : null;
    });
    
    return(
        <div className="user-list">
            { userList }
        </div>
    )
}

export default Users;