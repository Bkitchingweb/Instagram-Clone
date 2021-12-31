import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';

export default function SignUp() {
    const { firebase } = useContext(FirebaseContext);

    const [formData, setFormData] = useState({
        username: "",
        fullName: "",
        email: "",
        password: ""
    })

    const [error, setError] = useState('');
    const isInvalid = formData.username === '' || 
                        formData.fullName === '' || 
                        formData.password === '' || 
                        formData.emailAddress === '';

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData(prevFormData => {
            switch (name) {
                case 'username' : 
                    return {...prevFormData, [name]: value.toLowerCase()}
                case 'email' : 
                    return {...prevFormData, [name]: value.toLowerCase()}
                default:
                    return {...prevFormData, [name]: value}
            }
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const createdUserResult = await firebase.auth().createUserWithEmailAndPassword(formData.emailAddress, formData.password)
             
            await createdUserResult.user.updateProfile({
                displayName: formData.userName
            })
                        
            await firebase.firestore().collection("users").add({
                userId: createdUserResult.user.uid,
                username: formData.userName.toLowerCase(),
                fullName: formData.fullName,
                emailAddress: formData.emailAddress.toLowerCase(),
                following: [],
                followers: [],
                dateCreated: Date.now()
            })
        } catch (error) {
            setFormData({
                username: "",
                fullName: "",
                email: "",
                password: ""
            })
            setError(error.message)
        }
    }

    useEffect(() => {
        document.title = 'Sign Up - Instagram';
    }, []);
    
    return (
        <div className="container flex mx-auto max-w-xs items-center h-screen">
            <div className="flex flex-col">
                <div className="flex flex-col items-center bg-white p-4 border mb-4">
                    <img src="/images/logo.png" alt="Instagram logo" className="max-w-max mx-auto"/>
                    {error && <p className="mb-4 text-xs text-red-500 text-center">{error}</p>}
                    
                    <form onSubmit={handleSubmit} method="POST">
                        <input
                            aria-label="Enter your username"
                            className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
                            type="text"
                            name="username"
                            placeholder="Username"
                            onChange={handleChange}
                            value={formData.username}
                        />
                        <input
                            aria-label="Enter your full name"
                            className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
                            type="text"
                            name="fullName"
                            placeholder="Full name"
                            onChange={handleChange}
                            value={formData.fullName}
                        />
                        <input
                            aria-label="Enter your email address"
                            className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
                            type="email"
                            name="email"
                            placeholder="Email address"
                            onChange={handleChange}
                            value={formData.email}
                        />
                        <input
                            aria-label="Enter your password"
                            className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                            value={formData.password}
                        />
                        <button
                            disabled={isInvalid}
                            type="submit"
                            className={`bg-blue-500 text-white w-full rounded h-8 font-bold ${ isInvalid && 'cursor-not-allowed opacity-50'
                            }`}
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
                <div className="flex justify-center items-center flex-col w-full bg-white p-4 border">
                    <p className="text-sm">
                        Have an account?{` `}
                        <Link to={ROUTES.LOGIN} className="font-bold text-blue">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}