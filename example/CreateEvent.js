import React from 'react';
import { useDispatchEvent } from '../src/hooks/useDispatchEvent';

const CreateEvent = () => {
    const dispatchEvent = useDispatchEvent();

    const handleCreateEvent = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                dispatchEvent("example", users);
            });
    };

    return (
        <div className="create-event-wrapper">
            <button onClick={handleCreateEvent}>create event</button>
        </div>
    );
};

export default CreateEvent;
