import { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { emailRegex } from '../../../utils/regex';
import { MAX_PASSWORD_LENGTH, MIN_LOGIN_LENGTH, MIN_PASSWORD_LENGTH, MAX_LOGIN_LENGTH } from '../../../utils/constants';
import { TextField, PasswordField, RegistrationButton } from './RegistrationFormFields';


export function RegistrationForm() {

  const { register, handleSubmit, watch, formState: { errors }, setError } = useForm(
    {
      defaultValues: {
        username: '',
        email: '',
        password: '',
        confirm_password: ''
      }
    }
  );

  async function sendRegistrationRequest(data: object) {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:8080/api/registration',
      headers: {},
      data: data
    });
    console.log(response)
  }

  const data = {
    username: watch('username'),
    email: watch('email'),
    password: watch('password')
  }

  return (
    <form className={'flex flex-col'} onSubmit={handleSubmit((data) => console.log(data))}>
      <div>
        <label htmlFor='username' className='mx-2 font-semibold'>Username</label>
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
        {errors.username && <p className={'text-red-600 mx-2'}>{errors.username.message}</p>}
      </div>

      <div>
        <label htmlFor='email' className='mx-2 font-semibold'>Email</label>
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
        {errors.email && <p className={'text-red-600 mx-2'}>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor='password' className='mx-2 font-semibold'>Password</label>
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
        {errors.password && <p className={'text-red-600 mx-2'}>{errors.password.message}</p>}
      </div>

      <div>
        <label htmlFor='confirm_password' className='mx-2 font-semibold'>Confirm Password</label>
        <PasswordField register={
          register(
            'confirm_password', {
            required: 'Please, confirm your password',
            validate: (value) => data.password == value ? true : "Passwords doesn't match"
          }
          )
        }
          placeholder='Confirm Password' />
        {errors.confirm_password && <p className={'text-red-600 mx-2'}>{errors.confirm_password.message}</p>}
      </div>

      <RegistrationButton />
    </form>
  )
}