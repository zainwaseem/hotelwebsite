import Header from "../components/Login/Header";
import Signup from "../components/Login/Signup";
import HomePage from "./HomePage";

export default function SignupPage() {
    return (
        <><HomePage />
            <div className=" flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <Header
                        heading="Signup to create an account"
                        paragraph="Already have an account? "

                    />
                    <Signup />
                </div></div></>
    )
}