import { Navigate } from 'react-router-dom';

export default function IsUserLoggedIn({ user, notLoggedInPath, children }) {

    return !user ? <Navigate to={notLoggedInPath} replace /> : children;
}