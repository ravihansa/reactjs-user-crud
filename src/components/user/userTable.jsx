import React from "react";
import "../../styles/userList.css";

const UserTable = ({ users }) => {
    return (
        <div className="user-table-container">
            <h2>User List</h2>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.fName}</td>
                                <td>{user.lName}</td>
                                <td>{user.email}</td>
                                <td>{user.userName}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No users found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
