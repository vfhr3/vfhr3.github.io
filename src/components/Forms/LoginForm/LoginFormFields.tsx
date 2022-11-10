import { UseFormRegisterReturn } from 'react-hook-form/dist/types'
import './styles.css'

interface IFieldProps {
    register: UseFormRegisterReturn<any>
}

export function LoginField({ register }: IFieldProps) {
    return (
        <input {...register}
            placeholder='Enter Login / Email' type={'text'} className='input-field'>
        </input>
    )
}

export function PasswordField({ register }: IFieldProps) {
    return (
        <input {...register}
            placeholder='Enter Password' type={'password'} className='input-field'>
        </input>
    )
}

export function RememberMeField({ register }: IFieldProps) {
    return (
        <div>
            <input {...register} className='transition-all mr-1' type={'checkbox'} id='rememberMeCheckbox'></input>
            <label htmlFor='rememberMeCheckbox'>Remember me</label>
        </div>
    )
}
