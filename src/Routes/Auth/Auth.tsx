import React from "react";
import LoginForm from "../../components/Forms/LoginForm";
import RegistrationForm from "../../components/Forms/RegistrationForm";
import Navbar from "../../components/Navbar";
import NavbarLink from "../../components/NavbarLink";
import { AuthBox } from "../../components/AuthBox";
import { useState } from "react";

export default function Auth() {

    const [isLogin, setLogin] = useState(true)
    
    const buttonClassName = "text-gray-800 hover:text-black transition-colors ease-in-out";

    return (
        <>
            <header>
                <Navbar>
                    <NavbarLink href="1" title="Home" className={buttonClassName}/>
                    <NavbarLink href="1" title="About" className={buttonClassName}/>
                    <NavbarLink href="1" title="Help" className={buttonClassName}/>
                </Navbar> 
            </header>

            <AuthBox>
                <div>
                    <img className='max-h-[100px] mx-auto ' src={require('../../images/shopping-bag.png')} alt="" />
                    <p className='mt-4 text-center text-4xl font-semibold mb-1'>
                        {isLogin ? "Sign in" : "Sign up"}
                    </p>
                    <p className='text-center font-light'>{isLogin ? "Please login to continue" : "Please register to continue"}</p>
                </div>

                {isLogin ? <LoginForm/> : <RegistrationForm/>}
                
                <div className='flex flex-col self-center'>
                    <span>
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                    </span>
                    <button onClick={() => setLogin(prev => !prev)} className='text-center text-violet-800 font-medium hover:underline hover:text-violet-900'>
                        {isLogin ? "Create a free one." : "Log in."}
                    </button>
                </div>
            </AuthBox>
        </>
    )
}