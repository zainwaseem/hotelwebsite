import HeaderBar from "../components/Login/Header"
import Login from "../components/Login/Login"

export default function LoginPage() {
    return (
        <>
            <HeaderBar
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
            />
            <Login />

        </>
    )
}