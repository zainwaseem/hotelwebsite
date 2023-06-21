import React, { useState } from 'react'
import { Contact, Home } from '../components/Home/Home'
import { Link } from 'react-router-dom'

function HomePage({ props }) {
    const [showHome, setShowHome] = useState(props)
    const [showContact, setShowContact] = useState(false)
    return (
        <>
            <section class="w-full px-8 text-gray-700 bg-white">
                <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
                    <div class="relative flex flex-col md:flex-row">
                        <a class="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                            <span class="mx-auto text-xl font-black leading-none text-gray-900 select-none"> <img
                                alt=""
                                className="h-14 w-14"
                                src="https://img.freepik.com/premium-vector/forkspoon-logo-icon-vector-illustration_598213-6842.jpg?size=626&ext=jpg" />
                                <span class="text-indigo-600">.</span></span>
                        </a>
                        <nav class="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
                            <Link to='/' onClick={() => <>{setShowHome(true)}{setShowContact(false)}</>} class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Home</Link>
                            {/* <a onClick={() => <>{setShowHome(false)}{setShowHome(true)}</>} class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Features</a> */}
                            {/* <a href="#_" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Pricing</a> */}
                            <Link to='/' onClick={() => <>{setShowHome(false)}{setShowContact(true)}</>} class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Contact</Link>
                        </nav>
                    </div>

                    <div class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
                        <Link to="/Signin" onClick={() => <>{setShowHome(false)}{setShowContact(false)}</>} class="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                            Sign in
                        </Link>
                        <Link to="/Signup" onClick={() => <>{setShowHome(false)}{setShowContact(false)}</>} class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                            Sign up
                        </Link>
                    </div>
                </div>
            </section>
            {
                showHome && <Home />
            }{
                showContact && <Contact />
            }
        </>
    )
}

export default HomePage