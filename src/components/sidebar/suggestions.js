import { memo, useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import SuggestedProfile from './suggested-profile';
import { getSuggestedProfiles } from '../../services/firebase';

const Suggestions = ({ userId }) => {
    const [profiles, setProfiles] = useState(null);
    
    useEffect(() => {
        async function suggestedProfiles() {
            const response = await getSuggestedProfiles(userId);
            setProfiles(response);
        }

        if (userId) {
            suggestedProfiles();
        }
    }, [userId]);
    
    return !profiles ? (
        <Skeleton count={1} height={150} className="mt-5" />
    ) : profiles.length > 0 ? (
        <>
            <p className="font-bold text-gray text-sm my-4">Suggestions for you</p>
            <div className="grid gap-4">
                {profiles.map((profile) => (
                    <SuggestedProfile
                        key={profile.docId}
                        userDocId={profile.docId}
                        username={profile.username}
                        profileId={profile.userId}
                        userId={userId}
                    />
                ))}
            </div>
        </>
    ) : null;
}

export default memo(Suggestions);