import './styles.css'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { emailRegex } from '../../../utils/regex';
import { MAX_PASSWORD_LENGTH, MIN_LOGIN_LENGTH, MIN_PASSWORD_LENGTH, MAX_LOGIN_LENGTH } from '../../../utils/constants';
import { TextField, PasswordField, RegistrationButton } from './RegistrationFormFields';
import { IRegistrationRequestData } from './models/RegistrationRequestData';

export default function RegistrationForm() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm(
    {
      defaultValues: {
        username: '',
        email: '',
        password: '',
        confirm_password: '',
        terms: false
      }
    }
  );

  async function sendRegistrationRequest(data: IRegistrationRequestData) {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:8080/api/registration',
      headers: {},
      data: data
    });
    console.log(response)
  }

  const data : IRegistrationRequestData = {
    username: watch('username'),
    email: watch('email'),
    password: watch('password')
  }

  return (
    <form className={'form'} onSubmit={handleSubmit(() => sendRegistrationRequest(data))}>

      <div className='text-inputs'>
        {errors.username && <p className={'error'}>{errors.username.message}</p>}
        <TextField register={
          register(
            'username', {
            required: "Username is required",
            minLength: {
              value: MIN_LOGIN_LENGTH,
              message: `Min username length is ${MIN_LOGIN_LENGTH}`
            },
            maxLength: {
              value: MAX_LOGIN_LENGTH,
              message: `Max username length is ${MAX_LOGIN_LENGTH}`,
            }
          }
          )
        }
          placeholder='Enter Username' />

        {errors.email && <p className={'error'}>{errors.email.message}</p>}
        <TextField register={
          register(
            'email', {
            required: 'Email is required',
            pattern: {
              value: emailRegex,
              message: 'Invalid email'
            }
          }
          )
        }
          placeholder='Enter Email' />

        {errors.password && <p className={'error'}>{errors.password.message}</p>}
        <PasswordField register={
          register(
            'password', {
            required: 'Password is required',
            minLength: {
              value: MIN_PASSWORD_LENGTH,
              message: `Min password length is ${MIN_PASSWORD_LENGTH}`
            },
            maxLength: {
              value: MAX_PASSWORD_LENGTH,
              message: `Max password length is ${MAX_PASSWORD_LENGTH}`
            }
          }
          )
        }
          placeholder='Enter Password' />

        {errors.confirm_password && <p className={'error'}>{errors.confirm_password.message}</p>}
        <PasswordField register={
          register(
            'confirm_password', {
            required: 'Please, confirm your password',
            validate: (value) => data.password === value ? true : "Passwords doesn't match"
          }
          )
        }
          placeholder='Confirm Password' />
      </div>

      <div className='policy-block'>
        <input {...register('terms', { required: true, validate: value => value })} type={'checkbox'} id='terms'></input>
        <label htmlFor='terms'>I agree to the <a href='https://ya.ru'>Terms of Service and Privacy Policy</a></label>
      </div>

      <RegistrationButton />
      
    </form>
  )
}