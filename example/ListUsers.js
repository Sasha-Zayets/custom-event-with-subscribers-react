import React from "react";

const ListUsers = ({ users, handleChangeActiveUser }) => (
    <ul>
        {users.map((item) => (
            <li key={item.id} onClick={() => handleChangeActiveUser(item.id)}>
                <div><strong>Name:</strong> {item.name}</div>
                <div><strong>Email:</strong> {item.email}</div>
                <div><strong>Phone:</strong> {item.phone}</div>
            </li>
        ))}
    </ul>
);

export default ListUsers;
