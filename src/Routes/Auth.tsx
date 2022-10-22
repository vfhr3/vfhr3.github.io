import React from "react";
import '../index.css'
import { LoginForm } from "../components/LoginForm";
import { AuthBox } from "../components/AuthBox";
import { useState } from "react";
import { RegistrationForm } from "../components/RegistrationForm";

export function Auth() {

    const [isLogin, setLogin] = useState(true)

    return (
        <AuthBox>
              <div>
                <img className='max-h-[100px] mx-auto ' src={require('../images/shopping-bag.png')} alt="" />
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
    )
}