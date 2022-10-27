import { LoginField, PasswordField, RememberMeField } from './LoginFormFields';
import { useForm } from 'react-hook-form'
import { MAX_LOGIN_LENGTH, MAX_PASSWORD_LENGTH, MIN_LOGIN_LENGTH, MIN_PASSWORD_LENGTH } from '../../../utils/constants'


export default function LoginForm() {

    const { register, handleSubmit } = useForm();

    return (
        <form className={'flex flex-col'}
            onSubmit={
                handleSubmit((data: object) => {
                    console.log(data);
                })
            }>

            <div className='w-full mb-3'>
                <LoginField register={
                    register('username', {
                        required: 'You must specify a login',
                        minLength: MIN_LOGIN_LENGTH,
                        maxLength: MAX_LOGIN_LENGTH
                    })
                } />

                <PasswordField register={
                    register('password', {
                        required: 'You must specify a password',
                        minLength: MIN_PASSWORD_LENGTH,
                        maxLength: MAX_PASSWORD_LENGTH
                    })
                } />
            </div>

            <div className='flex w-full mb-4 justify-between p-1'>
                <RememberMeField register={register('rememberMe')} />
                <a className='text-violet-800 hover:underline text-medium transition-all hover:text-violet-900' href='https://google.com'>Forgot password</a>
            </div>

            <button className={'h-[40px] w-full rounded-[20px] bg-[#2b2b2b] self-end hover:bg-black transition-all ease-in'} type='submit'>
                <p className='w-full py-2 text-white font-normal'>SIGN IN</p>
            </button>

        </form>
    )
}