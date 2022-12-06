import React, { useState, useCallback } from "react";
import { useSubscribeEvent } from "../src/hooks/useSubscribeEvent";

import DetailUser from "./DetailUser";
import ListUsers from "./ListUsers";

const SubscribeEvent = () => {
    const [activeUser, setActiveUser] = useState();
    const { state: users } = useSubscribeEvent("example", []);

    const showDetailUserInfo = useCallback((id) => {
        setActiveUser((oldId) => oldId === id ? null : id);
    }, []);

    return (
        <div className="subscribe-event-wrapper">
            <ListUsers users={users} handleChangeActiveUser={showDetailUserInfo} />
            {activeUser && (
                <>
                    <hr />
                    <DetailUser userId={activeUser} />
                </>
            )}
        </div>
    );
};

export default SubscribeEvent;
