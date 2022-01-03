import React from 'react';

import { Link } from 'react-router-dom';

export default function Header({ username }) {
    
    return (
        <div className="flex border-b p-4">
            <div className="flex items-center">
                <Link to={`/p/${username}`} className="flex items-center gap-4">
                    <img 
                        src={`/images/avatars/${username}.jpg`} 
                        alt={`${username}'s Profile Picture'`}
                        className="rounded-full h-8 w-8"
                    />
                    <p className="font-bold">{username}</p>
                </Link>        
            </div>
        </div>
    )
}