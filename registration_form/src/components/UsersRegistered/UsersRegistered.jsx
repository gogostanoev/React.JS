import React from 'react';

const UsersRegistered = ({ registeredUsers, handleDeleteUser, handleDeleteAllUsers }) => {
    return (
        <div className='usersDiv'>
            {registeredUsers.map((user) => (
                <div key={user.id}>
                    <h3>{user.fullName}</h3>
                    <p>Email: {user.email}</p>
                    <button onClick={() => handleDeleteUser(user.id)}>Delete User</button>
                </div>
            ))}
            {registeredUsers.length > 0 && (
                <button onClick={handleDeleteAllUsers}>Remove Users</button>
            )}
        </div>
    );
};

export default UsersRegistered;