import React from 'react'
import Container from './ContainerBox'

interface IAuthBox {
    children: React.ReactNode
}

export function AuthScreen({ children }: IAuthBox) {
    return (
        <div className='flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-gradient-to-t from-green-300 to-red-400'>
            <Container>
                {children}
            </Container>
        </div>
    )
}