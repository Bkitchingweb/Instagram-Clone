import React from 'react';
import useUser from '../../hooks/useUser';
import User from './user';
import Suggestions from './suggestions';

export default function Sidebar() {
    const { user: { docId, userId, following, username, fullName } = {} } = useUser()
    
    return (
        <div className="p-4">
            <User username={username} fullName={fullName} />
            <Suggestions userId={userId} />
        </div>
    );
}