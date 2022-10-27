import React from 'react'
import FormContainer from './Forms/FormContainer'

interface IAuthBox {
    children: React.ReactNode
}

export function AuthBox({ children }: IAuthBox) {
    return (
        <>
            <div className='flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-gradient-to-t from-green-300 to-red-400'> 
                <FormContainer>
                    {children}
                </FormContainer>            
            </div>

        </>
    )
}