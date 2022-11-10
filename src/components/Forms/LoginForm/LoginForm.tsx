import { LoginField, PasswordField, RememberMeField } from './LoginFormFields';
import { useForm } from 'react-hook-form'
import { MAX_LOGIN_LENGTH, MAX_PASSWORD_LENGTH, MIN_LOGIN_LENGTH, MIN_PASSWORD_LENGTH } from '../../../utils/constants'
import './styles.css'


export default function LoginForm() {

    const { register, handleSubmit } = useForm();

    return (
        <form className={'form'}
            onSubmit={
                handleSubmit((data: object) => {
                    console.log(data);
                })
            }>

            <div className='input-fields'>
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

            <div className='checkbox'>
                <RememberMeField register={register('rememberMe')} />
                <a href='https://google.com'>Forgot password</a>
            </div>

            <button className={'login-button'} type='submit'>
                <p>SIGN IN</p>
            </button>
        </form>
    )
}