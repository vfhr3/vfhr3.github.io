import { UseFormRegisterReturn } from 'react-hook-form/dist/types'
import './styles.css'

interface IFieldProps {
    register: UseFormRegisterReturn<any>,
    placeholder: string
}

export function TextField({register, placeholder} : IFieldProps) {
    return (
        <input {...register} id={register.name}
            placeholder={placeholder} className='text-field'>
        </input>
    )
}

export function PasswordField({register, placeholder} : IFieldProps) {
    return (
        <input {...register} id={register.name}
            placeholder={placeholder} type={'password'} className='text-field'>
        </input>
    )
}

export function RegistrationButton() {
    return (
        <button className = {'button'} type='submit'>
            <p>SIGN UP</p>
        </button>
    )
}