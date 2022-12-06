import React, { useEffect, useCallback } from "react";
import { useDispatchEvent } from "../src/hooks/useDispatchEvent";
import { useSubscribeEvent } from "../src/hooks/useSubscribeEvent";

const DetailUser = ({ userId }) => {
    const dispatchEvent = useDispatchEvent();
    const { state: user } = useSubscribeEvent("setUserData", null);

    const getUserData = useCallback((id) => {
        return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(user => user);
    }, []);

    useEffect(() => {
        getUserData(userId).then((userData) => {
            dispatchEvent("setUserData", userData);
        }); 
    }, [userId, dispatchEvent, getUserData]);

    if (!user) {
        return null;
    } 

    return (
        <div className="detail-user">
            <h1>{user.name}</h1>
        </div>
    );
};

export default DetailUser;
