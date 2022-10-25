import React from 'react'
import { Navbar } from './Navbar'

interface IAuthBox {
    children: React.ReactNode
}


export function AuthBox({ children }: IAuthBox) {

    const containerClassName = 'w-[500px] bg-[#ffffff99] relative flex flex-col p-10 items-evenly rounded-2xl shadow-2xl max-w-[95vw] overflow-auto gap-5 z-2'
    const backContainerClassName = 'before:absolute before:bg-[#ffffff99] before:rounded-2xl before:shadow-2xl before:-rotate-2' 

    return (
        <div className='flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-gradient-to-t from-green-200 to-blue-500'>
            <Navbar>
            </Navbar>


            <div className={containerClassName + backContainerClassName}>
                {children}
            </div>

        </div>
    )
}