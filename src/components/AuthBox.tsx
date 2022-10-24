import React from 'react'

interface IAuthBox {
    children : React.ReactNode
}


export function AuthBox({ children } : IAuthBox) {
    return (
        <div className='flex flex-col justify-evenly items-center w-[100vw] h-[100vh] bg-gradient-to-t from-green-200 to-blue-500'>

            <div className='absolute justify-around w-[85vw] h-[700px] max-w-[500px] max-h-[90vh] bg-[#ffffff50] rounded-xl shadow-2xl -rotate-2'/>


            <div className='flex flex-col justify-around w-[85vw] h-[700px] max-w-[500px] max-h-[90vh] bg-[#ffffff50] rounded-xl py-[1.5rem] px-[2rem] shadow-2xl z-20 overflow-auto'>
                {children}
            </div>

        </div>
    )
}