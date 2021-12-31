import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';


export default function Login() {
    const { firebase } = useContext(FirebaseContext);
    let navigate = useNavigate();

    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState('');
    const isInvalid = emailAddress === '' || password === ''

    const handleLogin = async (event) => {
        event.preventDefault();
        
        try {
            await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
            navigate(ROUTES.DASHBOARD)
        } catch (error) {
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        }
    }

    useEffect(() => {
        document.title = 'Login - Instagram';
    }, []);

    return (
        <div className="md:container md:mx-auto md:flex md:gap-8 md:items-center md:justify-center">
            <div className="">
                <img src="/images/iphone-with-profile.jpg" alt="iPhone with Instagram app" />
            </div>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4 bg-white p-2 md: p-6">
                    <img src="/images/logo.png" alt="Instagram logo" className="max-w-max mx-auto"/>
                    {error && <p className="mb-4 text-xs text-red-500">{error}</p>}

                    <form onSubmit={handleLogin} method="POST" className="flex flex-col gap-4">
                        <input
                            aria-label="Enter your email address"
                            className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                            type="text"
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <input
                            aria-label="Enter your password"
                            className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <button
                            disabled={isInvalid}
                            type="submit"
                            className={`bg-blue-500 text-white w-full rounded h-8 font-bold ${ isInvalid && 'cursor-not-allowed opacity-50'
                            }`}
                        >
                            Log In
                        </button>
                    </form>
                </div>
                <div className="md:flex md:gap-8 md:items-center md:justify-center bg-white p-2 md: p-6">
                    <p>Dont have an account?</p>
                    <Link to={ROUTES.SIGN_UP} className="font-bold">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    )
}