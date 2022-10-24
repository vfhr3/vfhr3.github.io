import { UseFormRegisterReturn } from 'react-hook-form/dist/types'

const textFieldClassName = 'h-[40px] w-full rounded-[20px] p-3 m-1';

interface IFieldProps {
    register: UseFormRegisterReturn<any>
}

export function LoginField({register} : IFieldProps) {
    return (
        <input {...register}
        placeholder='Enter Login / Email' type={'text'} className={textFieldClassName}>
        </input>   
    )
}

export function PasswordField({register} : IFieldProps) {
    return (
        <input {...register}
                placeholder='Enter Password' type={'password'} className={textFieldClassName}>
        </input>
    )
}

export function RememberMeField({register} : IFieldProps) {
    return (
        <div>
        <input {...register} className='transition-all mr-1' type={'checkbox'} id='rememberMeCheckbox'></input>
        <label htmlFor='rememberMeCheckbox'>Remember me</label>
        </div>
    )
}
