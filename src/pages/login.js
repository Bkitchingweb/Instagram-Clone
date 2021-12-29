import React from 'react';

// =====================
// Login.js page
// =====================

// =====================
// Structure
// =====================
// - div (parent)
// 	- div (child)
// 	- div (child)
// 		- div (child of child)
// 		- div (child of child)


// A container div that holds children
// 	- div
// 		- image of src /images/iphone-with-profile.jpg & alt tag of "iPhone with Instagram app"

// 	- div to wrap the following children
// 		- div -> (another div to wrap the form (see below for further details of the form)
// 		- div -> a paragraph with a React router link that allows to the user to navigate to 'Sign up' - use the ROUTES file to link to this particular page

// A form for the user to login with a method of POST

// An input box for the user to enter their email address with a placeholder value of Email Address

// An input box for the user to enter their password with a placeholder value of Password

// A button so that the user can submit the form

// References:
// 	- Tailwind container: https://tailwindcss.com/docs/container
// 	- Tailwind flex: https://tailwindcss.com/docs/flex

export default function Login() {
    return (
        <div className="md:container md:mx-auto md:flex md:gap-8 md:items-center md:justify-center">
            <div className="">
                <img src="/images/iphone-with-profile.jpg" alt="iPhone with Instagram app" />
            </div>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4 bg-white p-2 md: p-6">
                    <img src="/images/logo.png" alt="Instagram logo" className="max-w-max mx-auto"/>
                    <form method="POST" className="flex flex-col gap-4">
                        <input placeholder="Email Address"/>
                        <input placeholder="Password"/>
                        <button>Log in</button>
                    </form>
                </div>
                <div className="md:flex md:gap-8 md:items-center md:justify-center bg-white p-2 md: p-6">
                    <p>Dont have an account?</p>
                    <a>Sign up</a>
                </div>
            </div>
        </div>
    )
}