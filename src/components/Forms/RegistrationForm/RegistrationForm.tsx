import {useState} from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { emailRegex } from '../../../utils/regex';
import { MAX_PASSWORD_LENGTH, MIN_LOGIN_LENGTH, MIN_PASSWORD_LENGTH, MAX_LOGIN_LENGTH } from '../../../utils/constants';
import { TextField, PasswordField, RegistrationButton } from './RegistrationFormFields';


export function RegistrationForm() {

    const { register, handleSubmit, watch, formState : {errors}, setError } = useForm();

    async function sendRegistrationRequest(data : object) {
        const response = await axios({
            method: 'post',
            url: 'http://localhost:8080/api/registration',
            headers: {}, 
            data: data
          });
        console.log(response)
    }

    return (
        <form className={'flex flex-col'} onSubmit={handleSubmit((data) => console.log(data))}>
                <div className='w-full'>
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
                  placeholder='Enter Username'/>

                  <TextField register={
                    register(
                      'email', {
                        required: true,
                        pattern: emailRegex
                      }
                    )
                  }
                  placeholder='Enter Email'/>

                  <PasswordField register={
                    register(
                      'password', {
                        required: 'Password is required', 
                        minLength: { 
                          value: MIN_PASSWORD_LENGTH, 
                          message:`Min password length is ${MIN_PASSWORD_LENGTH}`
                        },
                        maxLength: {
                          value: MAX_PASSWORD_LENGTH,
                          message: `Max password length is ${MAX_PASSWORD_LENGTH}`
                        }
                      }
                    )
                  }
                  placeholder='Enter Password'/>

                  <PasswordField register={
                    register(
                      'confirm_password', {
                        required: true,
                        validate: (value) => watch('password') == value
                      }
                    )
                  }
                  placeholder='Confirm Password'/>
                </div>
                
                <RegistrationButton/>
        </form>
    )
}