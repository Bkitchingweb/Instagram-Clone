import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import IsntLoggedIn from './helpers/isnt-logged-in';
import UserContext from './context/user';
import useAuthListener from './hooks/useAuthListener';
import * as ROUTES from './constants/routes';

const Dashboard = lazy(() => import ('./pages/dashboard'));
const Login = lazy(() => import ('./pages/login'));
const SignUp = lazy(() => import ('./pages/signup'));
const Profile = lazy(() => import ('./pages/profile'));
const NotFound = lazy(() => import ('./pages/not-found'));

export default function App() {
    const { user } = useAuthListener();

    return (
        <UserContext.Provider value={{ user }}>
            <Router>
                <Suspense fallback={<p>Loading...</p>}>
                    <Routes>
                        <Route path={ROUTES.LOGIN} element={<Login />} />
                        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
                        <Route path={ROUTES.PROFILE} element={<Profile />} />
                        <Route path={ROUTES.DASHBOARD} element={
                            <IsntLoggedIn 
                                user={user} 
                                notLoggedInPath={ROUTES.LOGIN}
                            >
                                <Dashboard />
                            </IsntLoggedIn> 
                        }/>
                        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
                    </Routes>
                </Suspense>
            </Router>
        </UserContext.Provider>
    );
}