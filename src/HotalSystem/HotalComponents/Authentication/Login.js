import { useState } from 'react';
import { Link } from 'react-router-dom';
const fixedInputClass = "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"

const fields = [
    {
        labelText: "Email address",
        labelFor: "email-address",
        id: "email-address",
        name: "email",
        type: "email",
        autoComplete: "email",
        isRequired: true,
        placeholder: "Email address"
    },
    {
        labelText: "Password",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        autoComplete: "current-password",
        isRequired: true,
        placeholder: "Password"
    }
]
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

function Login() {
    const [userType, setUserType] = useState('');
    const [loginState, setLoginState] = useState(fieldsState);
    // console.log(loginState)
    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        authenticateUser();
    }

    //Handle Login API Integration here
    const authenticateUser = () => {

    }

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="userType">
                    User Type:
                </label>
                <select
                    id="userType"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}
                >
                    <option value="">Select User Type</option>
                    <option value="Guest">Guest</option>
                    <option value="Staff">Staff</option>
                    <option value="Admin">Admin</option>
                </select>
            </div>
            <div className="-space-y-px">
                {
                    fields.map(field =>
                        <div key={field.id} className="my-5">
                            <label htmlFor={field.labelFor} className="sr-only">
                                {field.labelText}
                            </label>
                            <input
                                onChange={handleChange}
                                value={loginState[field.id]}
                                id={field.id}
                                name={field.name}
                                type={field.type}
                                required={field.isRequired}
                                className={fixedInputClass}
                                placeholder={field.placeholder}
                            />
                        </div>
                    )
                }
            </div>

            <div className="flex items-center justify-between ">
                <div className="flex items-center">
                    <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                        Remember me
                    </label>
                </div>

                <div className="text-sm">
                    <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                        Forgot your password?
                    </a>
                </div>
            </div>

            {/* <FormAction handleSubmit={handleSubmit} text="Login" /> */}
            {/* <Link to={userType === "Guest" && ('/Room') || userType === "Staff" && ('/Form') || userType === "Admin" && ('/Form')} ><button */}
            <Link to={userType === "Guest" && ('/Guest') || userType === "Staff" && ('/Staff') || userType === "Admin" && ('/Admin')} ><button
                type='submit'
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
                onSubmit={handleSubmit}
            >

                Login
            </button></Link>

        </form >
    )
}

export default Login