import React from 'react';
import Skeleton from'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import Post from './post'
import useFollowedUsersPhotos from '../hooks/useFollowedUsersPhotos';

export default function Timeline() {
    const { photos } = useFollowedUsersPhotos();

    return (
        <div className="container col-span-2">
            {!photos ? (
                <Skeleton count={4} width={640} height={500} className="mb-5" />
            ) : photos && photos.length > 0 ? (
                photos.map((content) => <Post key={content.docId} content={content} />)
            ) : (
                <p className="text-center text-2xl">Follow people to see photos!</p>
            )}
        </div>
    );
}