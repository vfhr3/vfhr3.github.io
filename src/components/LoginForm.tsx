export function LoginForm() {
    return (
        <form className={'flex flex-col'}>
            
            <div className='w-full mb-3'>
                <input placeholder='Enter Login / Email' type={'text'} className='h-[40px] w-full rounded-[20px] p-3 m-1'></input>
            </div>

            <div className='w-full mb-2'>
                <input placeholder='Enter Password' type={'password'} className='h-[40px] w-full rounded-[20px] p-3 m-1'></input>
            </div>
            
            <div className='flex w-full mb-4 justify-between p-1'>
                <div>
                    <input className='transition-all mr-1' type={'checkbox'} id='rememberMeCheckbox'></input>
                    <label htmlFor='rememberMeCheckbox'>Remember me</label>
                </div>
                <a className='text-violet-800 hover:underline text-medium transition-all hover:text-violet-900' href='https://google.com'>Forgot password</a>
            </div>

            <button className = {'h-[40px] w-full rounded-[20px] bg-[#2b2b2b] self-end hover:bg-black transition-all ease-in'}type='submit'>
                <p className='w-full py-2 text-white font-normal'>SIGN IN</p>
            </button>
            
        </form>
    )
}