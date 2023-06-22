import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function GuestNavigation() {

    return (
        // <section class="w-full px-8 text-gray-700 bg-white">
        //     <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        //         <div class="relative flex flex-col md:flex-row">
        //             <a class="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
        //                 <span class="mx-auto text-xl font-black leading-none text-gray-900 select-none"> <img
        //                     alt=""
        //                     className="h-14 w-14"
        //                     src="https://img.freepik.com/premium-vector/forkspoon-logo-icon-vector-illustration_598213-6842.jpg?size=626&ext=jpg" />
        //                 </span>
        //             </a>
        //             <nav class="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
        //                 <Link to='/Guest' class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Rooms</Link>
        //                 <Link to='/YourRoom' class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Booked-Room</Link>
        //                 <Link to='/History' class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">History</Link>
        //                 <Link to='/Feedback' class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Feedback</Link>
        //             </nav>
        //         </div>

        //         <div class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
        //             <input type='search' placeholder='search room ' class="text-base font-medium leading-6 p-2 text-300 border-2 rounded-md" />

        //             <Link to="/Profile" class="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
        //                 Profile
        //             </Link>
        //             <Link to="/" class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
        //                 Log out
        //             </Link>
        //         </div>
        //     </div>
        // </section >
        <nav class="bg-white dark:bg-gray-900  w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a class="flex items-center">
                    <img
                        src="https://img.freepik.com/premium-vector/forkspoon-logo-icon-vector-illustration_598213-6842.jpg?size=626&ext=jpg"
                        class="h-8 mr-3" alt="Logo" />
                </a>
                <div class="flex md:order-2">
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <Link
                            to="/">
                            Log out
                        </Link>
                    </button>
                    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full md:block md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link
                                to="/Guest" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Rooms
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/YourRoom"
                                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Booked-Room
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/History"
                                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">

                                History
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/Feedback"
                                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Feedback
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/Profile"
                                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Profile
                            </Link>
                        </li>
                        <li>
                            <input
                                type="search"
                                placeholder="search room"
                                className="text-base font-medium leading-6 p-2 text-300 border-2 rounded-md"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </nav >








    )
}

export default GuestNavigation