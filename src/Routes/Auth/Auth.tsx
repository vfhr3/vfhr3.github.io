import LoginForm from "../../components/Forms/LoginForm";
import RegistrationForm from "../../components/Forms/RegistrationForm";
import { AuthScreen } from "../../components/AuthScreen";
import { useState } from "react";




export default function Auth(props : any) {

    const [isLoginScreen, setLogin] = useState(true)

    return (
        <>
            <AuthScreen>
                <div>
                    <img className='max-h-[100px] mx-auto' src={require('../../media/shopping-bag.png')} alt="" />
                    <p className='mt-4 text-center text-4xl font-semibold mb-1'>
                        {isLoginScreen ? "Sign in" : "Sign up"}
                    </p>
                    <p className='text-center font-light'>{isLoginScreen ? "Please login to continue" : "Please register to continue"}</p>
                </div>

                {isLoginScreen ? <LoginForm/> : <RegistrationForm/>}
                
                <div className='flex flex-col self-center'>
                    <span>
                        {isLoginScreen ? "Don't have an account?" : "Already have an account?"}
                    </span>
                    <button onClick={() => setLogin(prev => !prev)} className='text-center text-violet-800 font-medium hover:underline hover:text-violet-900'>
                        {isLoginScreen ? "Create a free one." : "Log in."}
                    </button>
                </div>
            </AuthScreen>
        </>
    )
}