import { UseFormRegisterReturn } from 'react-hook-form/dist/types'

interface IFieldProps {
    register: UseFormRegisterReturn<any>,
    placeholder: string
}

const textFieldClassName = 'h-[40px] w-full rounded-[20px] p-3 m-1'

export function TextField({register, placeholder} : IFieldProps) {
    return (
        <input {...register} 
            placeholder={placeholder} type={'text'} className={textFieldClassName}>
        </input>
    )
}

export function PasswordField({register, placeholder} : IFieldProps) {
    return (
        <input {...register}
            placeholder={placeholder} type={'password'} className={textFieldClassName}>
        </input>
    )
}

export function RegistrationButton() {
    return (
        <button className = {'h-[40px] w-full rounded-[20px] bg-[#2b2b2b] self-end hover:bg-black transition-all ease-in mt-3'} type='submit'>
            <p className='w-full py-2 text-white font-normal'>SIGN UP</p>
        </button>
    )
}